/*include SharedTypes;*/
include DataParser;

include SampleData;

include RunMatch;

[%bs.raw {|require('./styles.scss')|}];

[%bs.raw {|require('../node_modules/@material/switch/mdc-switch.scss')|}];

[%bs.raw {|require('../node_modules/@material/button/mdc-button.scss')|}];

[%bs.raw {|require('../node_modules/@material/menu/mdc-menu.scss')|}];

[%bs.raw {|require('../node_modules/@material/dialog/mdc-dialog.scss')|}];

[@bs.module] external pluralize : unit => unit = "";

[@bs.val] [@bs.module "pluralize"] external singular : string => string = "";

/* Action declaration */
type action =
  | UpdateSelectingName(string)
  | UpdateSelectedName(string)
  | UpdateMutualMatch(bool)
  | UpdateSelectingRowFormat(rowFormat)
  | UpdateSelectedRowFormat(rowFormat)
  | UpdateSelectingRawData(array(array(string)))
  | UpdateSelectedRawData(array(array(string)))
  | AutofillSelected
  | UpdateMatchStrategy(matchStrategy)
  | OpenSampleMenu
  | CloseSampleMenu
  | OpenInfoBox
  | CloseInfoBox
  | MatchNow;

/* Component template declaration.
   Needs to be **after** state and action declarations! */
let component = ReasonReact.reducerComponent("App");

/* greeting and children are props. `children` isn't used, therefore ignored.
   We ignore it by prepending it with an underscore */
let make = _children => {
  let loadImperialInternships = (_, self) => {
    self.ReasonReact.send(UpdateSelectingName("Applicants"));
    self.ReasonReact.send(UpdateSelectedName("Internships"));
    self.ReasonReact.send(UpdateSelectingRowFormat(SelectedInMultipleRows));
    self.ReasonReact.send(UpdateSelectedRowFormat(SelectedInMultipleRows));
    self.ReasonReact.send(UpdateMutualMatch(true));
    self.ReasonReact.send(UpdateMatchStrategy(MCMF));
    self.ReasonReact.send(
      UpdateSelectingRawData(
        sampleDataToRaw(SelectedInMultipleRows, imperialCandidates),
      ),
    );
    self.ReasonReact.send(
      UpdateSelectedRawData(
        sampleDataToRaw(SelectedInMultipleRows, imperialPositions),
      ),
    );
  };
  let loadMarriageProposals = (_, self) => {
    self.ReasonReact.send(UpdateSelectingName("Men"));
    self.ReasonReact.send(UpdateSelectedName("Women"));
    self.ReasonReact.send(UpdateSelectingRowFormat(SelectedInColumns));
    self.ReasonReact.send(UpdateSelectedRowFormat(SelectedInColumns));
    self.ReasonReact.send(UpdateMutualMatch(true));
    self.ReasonReact.send(UpdateMatchStrategy(SelectingBreakTies));
    self.ReasonReact.send(
      UpdateSelectingRawData(
        sampleDataToRaw(SelectedInColumns, marriageMen),
      ),
    );
    self.ReasonReact.send(
      UpdateSelectedRawData(
        sampleDataToRaw(SelectedInColumns, marriageWomen),
      ),
    );
  };
  let loadResidencies = (_, self) => {
    self.ReasonReact.send(UpdateSelectingName("Residents"));
    self.ReasonReact.send(UpdateSelectedName("Hospitals"));
    self.ReasonReact.send(UpdateSelectingRowFormat(SelectedInMultipleRows));
    self.ReasonReact.send(UpdateSelectedRowFormat(SelectedInMultipleRows));
    self.ReasonReact.send(UpdateMutualMatch(false));
    self.ReasonReact.send(UpdateMatchStrategy(MCMF));
    self.ReasonReact.send(
      UpdateSelectingRawData(
        sampleDataToRaw(SelectedInMultipleRows, residents),
      ),
    );
    self.ReasonReact.send(
      UpdateSelectedRawData(
        sampleDataToRaw(SelectedInMultipleRows, hospitals),
      ),
    );
  };
  {
    /* spread the other default fields of component here and override a few */
    ...component,
    initialState: () => {
      selectingName: "candidates",
      selectedName: "positions",
      sampleMenuOpen: false,
      infoBoxOpen: false,
      mutualMatch: false,
      selectingRowFormat: SelectedInMultipleRows,
      selectedRowFormat: SelectedInMultipleRows,
      selectingRawData: [||],
      selectedRawData: [||],
      selectingParsedData: [],
      selectedParsedData: [],
      selectingIgnoredRowIndices:
        Belt.Set.make(~id=(module SharedTypes.IntCmp)),
      selectedIgnoredRowIndices:
        Belt.Set.make(~id=(module SharedTypes.IntCmp)),
      matchStrategy: MCMF,
      matchResult: [],
    },
    /*didMount: self => loadSampleData(0, self),*/
    /* State transitions */
    reducer: (action, state) =>
      switch (action) {
      | UpdateSelectingName(selectingName) =>
        ReasonReact.Update({...state, selectingName})
      | UpdateSelectedName(selectedName) =>
        ReasonReact.Update({...state, selectedName})
      | UpdateMutualMatch(mutualMatch) =>
        ReasonReact.Update({
          ...state,
          mutualMatch,
          selectedRawData: [||],
          selectedParsedData: [],
          matchResult: [],
          matchStrategy: mutualMatch ? state.matchStrategy : MCMF,
        })
      | UpdateSelectingRowFormat(rowFormat) =>
        ReasonReact.Update({
          ...state,
          selectingRowFormat: rowFormat,
          selectingRawData: [||],
          selectingParsedData: [],
          matchResult: [],
        })
      | UpdateSelectedRowFormat(rowFormat) =>
        ReasonReact.Update({
          ...state,
          selectedRowFormat: rowFormat,
          selectedRawData: [||],
          selectedParsedData: [],
          matchResult: [],
        })
      | UpdateSelectingRawData(rawData) =>
        let (parsedData, ignoredRowIndices, selectedNamesEntries) =
          parseData(rawData, state.selectingRowFormat, true);
        let selectedParsedData =
          ! state.mutualMatch && List.length(state.selectedParsedData) == 0 ?
            selectedNamesEntries : state.selectedParsedData;
        ReasonReact.Update({
          ...state,
          selectingRawData: rawData,
          selectingParsedData: parsedData,
          selectingIgnoredRowIndices: ignoredRowIndices,
          selectedParsedData,
          selectedRawData:
            ! state.mutualMatch && List.length(state.selectedParsedData) == 0 ?
              sampleDataToRaw(state.selectedRowFormat, selectedNamesEntries) :
              state.selectedRawData,
          sampleMenuOpen: false,
          matchStrategy:
            suggestStrategy(
              parsedData,
              selectedParsedData,
              state.mutualMatch,
            ),
        });
      | AutofillSelected =>
        let (_, _, selectedNamesEntries) =
          parseData(state.selectingRawData, state.selectingRowFormat, true);
        ReasonReact.Update({
          ...state,
          selectedParsedData: selectedNamesEntries,
          selectedRawData:
            sampleDataToRaw(state.selectedRowFormat, selectedNamesEntries),
          sampleMenuOpen: false,
        });
      | UpdateSelectedRawData(rawData) =>
        let (parsedData, ignoredRowIndices, _selectedNamesEntries) =
          parseData(rawData, state.selectedRowFormat, state.mutualMatch);
        ReasonReact.Update({
          ...state,
          selectedRawData: rawData,
          selectedIgnoredRowIndices: ignoredRowIndices,
          selectedParsedData: parsedData,
          sampleMenuOpen: false,
          matchStrategy:
            suggestStrategy(
              state.selectingParsedData,
              parsedData,
              state.mutualMatch,
            ),
        });
      | CloseSampleMenu =>
        ReasonReact.Update({...state, sampleMenuOpen: false})
      | OpenSampleMenu => ReasonReact.Update({...state, sampleMenuOpen: true})
      | CloseInfoBox => ReasonReact.Update({...state, infoBoxOpen: false})
      | OpenInfoBox => ReasonReact.Update({...state, infoBoxOpen: true})
      | UpdateMatchStrategy(matchStrategy) =>
        ReasonReact.Update({...state, matchStrategy})
      | MatchNow =>
        ReasonReact.Update({...state, matchResult: RunMatch.runMatch(state)})
      },
    render: self => {
      let state = self.state;
      let resultData = self.state.matchResult |> Belt.List.toArray;
      <div onClick=((_) => self.send(CloseSampleMenu))>
        <div className="splash">
          <div className="plank-logo"> (ReasonReact.string("Plank")) </div>
          <div className="splash-content">
            <h1> (ReasonReact.string("SimpleMatch")) </h1>
            <div>
              (
                ReasonReact.string(
                  "Finds the best match from rank lists in seconds",
                )
              )
            </div>
          </div>
        </div>
        <div className="page-content top-content">
          <div className="input-pane">
            <div className="names-question">
              <div className="mdc-menu-anchor">
                <button
                  onClick=(
                    e => {
                      ReactEventRe.Mouse.stopPropagation(e);
                      self.send(OpenSampleMenu);
                    }
                  )
                  className="mdc-button">
                  (ReasonReact.string("Load Sample Data"))
                </button>
                <div
                  className=(
                    "mdc-menu"
                    ++ (state.sampleMenuOpen ? " mdc-menu--open" : "")
                  )
                  tabIndex=(-1)>
                  <ul className="mdc-menu__items mdc-list" role="menu">
                    <li
                      className="mdc-list-item"
                      role="menuitem"
                      tabIndex=0
                      onClick=(self.handle(loadImperialInternships))>
                      (ReasonReact.string("Imperial Internships"))
                    </li>
                    <li
                      className="mdc-list-item"
                      role="menuitem"
                      tabIndex=1
                      onClick=(self.handle(loadMarriageProposals))>
                      (ReasonReact.string("Marriage Matchmaking"))
                    </li>
                    <li
                      className="mdc-list-item"
                      role="menuitem"
                      tabIndex=2
                      onClick=(self.handle(loadResidencies))>
                      (ReasonReact.string("Rewarding Residencies"))
                    </li>
                  </ul>
                </div>
              </div>
              <span className="leftpad" />
              <input
                _type="text"
                value=self.state.selectingName
                onChange=(
                  _event =>
                    self.send(
                      UpdateSelectingName(
                        ReactDOMRe.domElementToObj(
                          ReactEventRe.Form.target(_event),
                        )##value,
                      ),
                    )
                )
              />
              <span> (ReasonReact.string(" have ranked ")) </span>
              <input
                _type="text"
                value=self.state.selectedName
                onChange=(
                  _event =>
                    self.send(
                      UpdateSelectedName(
                        ReactDOMRe.domElementToObj(
                          ReactEventRe.Form.target(_event),
                        )##value,
                      ),
                    )
                )
              />
              <div className="mdc-switch">
                <input
                  _type="checkbox"
                  id="mutual-switch"
                  className="mdc-switch__native-control"
                  role="switch"
                  checked=self.state.mutualMatch
                  onChange=(
                    _event =>
                      self.send(
                        UpdateMutualMatch(
                          ReactDOMRe.domElementToObj(
                            ReactEventRe.Form.target(_event),
                          )##checked,
                        ),
                      )
                  )
                />
                <div className="mdc-switch__background">
                  <div className="mdc-switch__knob" />
                </div>
              </div>
              <label htmlFor="mutual-switch">
                (ReasonReact.string("and vice versa"))
              </label>
              <span className="rightpad" />
            </div>
            <div className="data-importers">
              <SideDataImporter
                selectingName=state.selectingName
                selectedName=state.selectedName
                rawData=state.selectingRawData
                rowFormat=state.selectingRowFormat
                autofillSelected=(() => ())
                includeSelectees=true
                ignoredRowIndices=state.selectingIgnoredRowIndices
                updateRawData=(
                  rawData => self.send(UpdateSelectingRawData(rawData))
                )
                updateRowFormat=(
                  rowFormat => self.send(UpdateSelectingRowFormat(rowFormat))
                )
              />
              <SideDataImporter
                selectingName=state.selectedName
                selectedName=state.selectingName
                rawData=state.selectedRawData
                rowFormat=state.selectedRowFormat
                includeSelectees=state.mutualMatch
                autofillSelected=(() => self.send(AutofillSelected))
                ignoredRowIndices=state.selectedIgnoredRowIndices
                updateRowFormat=(
                  rowFormat => self.send(UpdateSelectedRowFormat(rowFormat))
                )
                updateRawData=(
                  rawData => self.send(UpdateSelectedRawData(rawData))
                )
              />
            </div>
            <div className="bottom-buttons">
              <span className="privacy-info">
                (ReasonReact.string("The match runs in your browser."))
                <br />
                (
                  ReasonReact.string("None of your data leaves your computer.")
                )
              </span>
              <span>
                <div className="material-select">
                  <span> (ReasonReact.string("Matching strategy")) </span>
                  <select
                    disabled=(! state.mutualMatch)
                    onChange=(
                      _event => {
                        let value = ReactDOMRe.domElementToObj(
                                      ReactEventRe.Form.target(_event),
                                    )##value;
                        let matchStrategy =
                          switch (value) {
                          | "selecting-break-ties" => SelectingBreakTies
                          | "selected-break-ties" => SelectedBreakTies
                          | "mcmf" => MCMF
                          | "" => MCMF
                          | "*" => MCMF
                          };
                        self.send(UpdateMatchStrategy(matchStrategy));
                      }
                    )
                    value=(
                      switch (state.matchStrategy) {
                      | SelectingBreakTies => "selecting-break-ties"
                      | SelectedBreakTies => "selected-break-ties"
                      | MCMF => "mcmf"
                      }
                    )>
                    <option value="mcmf">
                      (ReasonReact.string("Maximal matching"))
                    </option>
                    <option value="selecting-break-ties">
                      (
                        ReasonReact.string(
                          "Popular matching, "
                          ++ String.uncapitalize(state.selectingName)
                          ++ " decide ties",
                        )
                      )
                    </option>
                    <option value="selected-break-ties">
                      (
                        ReasonReact.string(
                          "Popular matching, "
                          ++ String.uncapitalize(state.selectedName)
                          ++ " decide ties",
                        )
                      )
                    </option>
                  </select>
                </div>
                <span
                  className="info-link"
                  onClick=((_) => self.send(OpenInfoBox))>
                  (ReasonReact.string("(what is this?)"))
                </span>
              </span>
              <button
                onClick=((_) => self.send(MatchNow))
                className="mdc-button mdc-button--raised"
                disabled=(
                  List.length(self.state.selectingParsedData) == 0
                  || List.length(self.state.selectedParsedData) == 0
                )>
                (ReasonReact.string("Match now"))
              </button>
            </div>
          </div>
        </div>
        <div className="page-content">
          <div className="graph-pane">
            (
              List.length(self.state.matchResult) > 0 ?
                <Result currentState=state resultData /> : ReasonReact.null
            )
          </div>
        </div>
        <aside
          id="my-mdc-dialog"
          className="mdc-dialog"
          role="alertdialog"
          style=(
            ReactDOMRe.Style.make(
              ~visibility=state.infoBoxOpen ? "visible" : "hidden",
              (),
            )
          )>
          <div className="mdc-dialog__surface">
            <header className="mdc-dialog__header">
              <h2
                id="my-mdc-dialog-label" className="mdc-dialog__header__title">
                (ReasonReact.string("Matching strategy"))
              </h2>
            </header>
            <section
              id="my-mdc-dialog-description" className="mdc-dialog__body">
              <h3> (ReasonReact.string("Maximal matching")) </h3>
              <p>
                (
                  ReasonReact.string(
                    "This strategy will always find the maximum possible number of matches, while taking\npreferences into account (it minimizes the sum of the ranks of all matches).",
                  )
                )
              </p>
              <p>
                (
                  ReasonReact.string(
                    "This strategy may find more matches than the ",
                  )
                )
                <em> (ReasonReact.string("Popular matching")) </em>
                (
                  ReasonReact.string(
                    " strategy, but may include more matches that are less preferred.",
                  )
                )
              </p>
              <p>
                (
                  ReasonReact.string(
                    "For more details, please see ",
                  )
                )
                <a
                  href="https://en.wikipedia.org/wiki/Minimum-cost_flow_problem#Minimum_weight_bipartite_matching">
                  (ReasonReact.string("minimum-weight bipartite matching"))
                </a>
                (ReasonReact.string("."))
              </p>
              <br />
              <h3> (ReasonReact.string("Popular matching")) </h3>
              <p>
                (
                  ReasonReact.string(
                    "A popular matching is one that tries to maximize overall satisfaction.
                     While the algorithm will try to find as many matches as possible,
                     it will not do so unconditionally. Under one-on-one conditions, this typically results in a ",
                  )
                )
                <a
                  href="https://en.wikipedia.org/wiki/Stable_marriage_problem">
                  (ReasonReact.string("stable matching"))
                </a>
                (ReasonReact.string("."))
              </p>
              <p>
                (
                  ReasonReact.string(
                    "When two different matchings would be equally popular, the rank lists of either "
                    ++ String.uncapitalize(state.selectingName)
                    ++ " or "
                    ++ String.uncapitalize(state.selectedName)
                    ++ " can be used to break ties.",
                  )
                )
              </p>
              <p>
                (
                  ReasonReact.string(
                    "For an in-depth explanation, please see ",
                  )
                )
                <a href="https://arxiv.org/abs/1609.07531">
                  (ReasonReact.string("the original article describing the algorithm."))
                </a>
              </p>
              <p>
                (
                  ReasonReact.string(
                    "This strategy does not apply when only one side is ranking the other."
                  )
                )
              </p>
            </section>
            <footer className="mdc-dialog__footer">
              <button
                _type="button"
                className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept"
                onClick=((_) => self.send(CloseInfoBox))>
                (ReasonReact.string("Close"))
              </button>
            </footer>
          </div>
          <div className="mdc-dialog__backdrop" />
        </aside>
      </div>;
    },
  };
};
