/*include SharedTypes;*/
include DataParser;


include SampleData;

include RunMatch;

[%bs.raw {|require('./styles.scss')|}];

[%bs.raw {|require('../node_modules/@material/switch/mdc-switch.scss')|}];

[%bs.raw {|require('../node_modules/@material/button/mdc-button.scss')|}];

/* Action declaration */
type action =
  | UpdateSelectingName(string)
  | UpdateSelectedName(string)
  | UpdateMutualMatch(bool)
  | UpdateSelectingRowFormat(rowFormat)
  | UpdateSelectedRowFormat(rowFormat)
  | UpdateSelectingRawData(array(array(string)))
  | UpdateSelectedRawData(array(array(string)))
  | MatchNow;

/* Component template declaration.
   Needs to be **after** state and action declarations! */
let component = ReasonReact.reducerComponent("App");

/* greeting and children are props. `children` isn't used, therefore ignored.
   We ignore it by prepending it with an underscore */
let make = _children => {
  let loadSampleData = (_, self) => {
    self.ReasonReact.send(
      UpdateSelectingRawData(
        sampleDataToRaw(self.state.selectingRowFormat, candidates),
      ),
    );
    if (self.state.mutualMatch) {
      self.ReasonReact.send(
        UpdateSelectedRawData(
          sampleDataToRaw(self.state.selectedRowFormat, positions),
        ),
      );
    };
  };
  {
    /* spread the other default fields of component here and override a few */
    ...component,
    initialState: () => {
      selectingName: "candidates",
      selectedName: "positions",
      mutualMatch: false,
      selectingRowFormat: SelectedInMultipleRows,
      selectedRowFormat: SelectedInMultipleRows,
      selectingRawData: [||],
      selectedRawData: [||],
      selectingParsedData: [],
      selectedParsedData: [],
    selectingIgnoredRowIndices: Belt.Set.make(~id=(module SharedTypes.IntCmp)),
    selectedIgnoredRowIndices: Belt.Set.make(~id=(module SharedTypes.IntCmp)),
      matchResult: [],
    },
    didMount: self => loadSampleData(0, self),
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
        ReasonReact.Update({
          ...state,
          selectingRawData: rawData,
          selectingParsedData: parsedData,
          selectingIgnoredRowIndices: ignoredRowIndices,
          selectedParsedData:
            ! state.mutualMatch && List.length(state.selectedParsedData) == 0 ?
              selectedNamesEntries : state.selectedParsedData,
          selectedRawData:
            ! state.mutualMatch && List.length(state.selectedParsedData) == 0 ?
              sampleDataToRaw(state.selectedRowFormat, selectedNamesEntries) :
              state.selectedRawData,
        });
      | UpdateSelectedRawData(rawData) => {
        let (parsedData, ignoredRowIndices, _selectedNamesEntries) =
          parseData(rawData, state.selectedRowFormat, state.mutualMatch);
        
        ReasonReact.Update({
          ...state,
          selectedRawData: rawData,
          selectedIgnoredRowIndices: ignoredRowIndices,
          selectedParsedData: parsedData,
        });
        };
      | MatchNow => {
          ReasonReact.Update({...state, matchResult: RunMatch.runMatch(state)});
        }
      },
    render: self => {
      let state = self.state;
      let resultData =
        self.state.matchResult
        |. Belt.List.map(((p1, p2)) => [|p1, p2|])
        |> Belt.List.toArray;
    <div>
      <div className="page-content">
        <div className="input-pane">
          <div className="names-question">
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
            <span />
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
            <button
              onClick=(self.handle(loadSampleData)) className="mdc-button">
              (ReasonReact.string("Load Sample Data"))
            </button>
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
