/*include SharedTypes;*/
include DataParser;

include SampleData;

include RunMatch;

[%bs.raw {|require('./styles.scss')|}];

[%bs.raw {|require('../node_modules/@material/switch/mdc-switch.scss')|}];

[%bs.raw {|require('../node_modules/@material/button/mdc-button.scss')|}];

[%bs.raw {|require('../node_modules/@material/menu/mdc-menu.scss')|}];

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
  | UpdateMatchStrategy(matchStrategy)
  | OpenSampleMenu
  | CloseSampleMenu
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
      )
    );
    self.ReasonReact.send(
      UpdateSelectedRawData(
        sampleDataToRaw(SelectedInColumns, marriageWomen),
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
          selectingRawData: [||],
          selectingParsedData: [],
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
          selectedParsedData: selectedParsedData,
          selectedRawData:
            ! state.mutualMatch && List.length(state.selectedParsedData) == 0 ?
              sampleDataToRaw(state.selectedRowFormat, selectedNamesEntries) :
              state.selectedRawData,
          sampleMenuOpen: false,
          matchStrategy: suggestStrategy(parsedData, selectedParsedData, state.mutualMatch)
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
          matchStrategy: suggestStrategy(state.selectingParsedData, parsedData, state.mutualMatch)
        });
      | CloseSampleMenu =>
        ReasonReact.Update({...state, sampleMenuOpen: false});
      | OpenSampleMenu => ReasonReact.Update({...state, sampleMenuOpen: true});
      | UpdateMatchStrategy(matchStrategy) => ReasonReact.Update({...state, matchStrategy});
      | MatchNow =>
        ReasonReact.Update({...state, matchResult: RunMatch.runMatch(state)});
      },
    render: self => {
      let state = self.state;
      let resultData =
        self.state.matchResult
        |. Belt.List.map(((p1, p2)) => [|p1, p2|])
        |> Belt.List.toArray;
      <div onClick=((_) => self.send(CloseSampleMenu))>
        <div className="splash">
          <div className="plank-logo"> (ReasonReact.string("Plank")) </div>
          <div className="splash-content">
            <h1> (ReasonReact.string("MiniMatcher")) </h1>
            <div>
              (
                ReasonReact.string(
                  "Match candidates to jobs based on their preferences",
                )
              )
            </div>
          </div>
        </div>
        <div className="page-content top-content">
          <div className="input-pane top-pane">
            <div className="splash-buttons">
              <span className="privacy-info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
                  />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                (ReasonReact.string("The match runs in your browser."))
                <br />
                (
                  ReasonReact.string("None of your data leaves your computer.")
                )
              </span>
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
                    <li className="mdc-list-item" role="menuitem" tabIndex=0
                      onClick=(self.handle(loadMarriageProposals))>
                      (ReasonReact.string("Stable Marriages"))
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="input-pane">
            <div className="names-question">
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
              <span> (ReasonReact.string(" are ranking ")) </span>
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
              (state.mutualMatch ? (
            <span>
              (ReasonReact.string("Match strategy: "))
              <select
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
                      };
                    self.send(UpdateMatchStrategy(matchStrategy));
                  }
                )
                value=(switch(state.matchStrategy) {
                 | SelectingBreakTies => "selecting-break-ties";
                 | SelectedBreakTies => "selected-break-ties";
                 | MCMF => "mcmf"
              })>
                <option value="selecting-break-ties">
                  (
                    ReasonReact.string(
                      "Stable match, ties broken by " ++ singular(state.selectingName) ++ " preferences",
                    )
                  )
                </option>
                <option value="selected-break-ties">
                  (
                    ReasonReact.string(
                      "Stable match, ties broken by " ++ singular(state.selectedName) ++ " preferences",
                    )
                  )
                </option>
                <option value="mcmf">
                  (ReasonReact.string("Maximize matches, minimize sum of ranks"))
                </option>
              </select>
            </span>
            ) : ReasonReact.null)
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
      </div>;
    },
  };
};
