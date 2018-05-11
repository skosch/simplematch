/*include SharedTypes;*/

include DataParser;

include Graph;

include SampleData;

include RunMatch;

[%bs.raw {|require('./styles.scss')|}];

[%bs.raw {|require('../node_modules/@material/switch/mdc-switch.scss')|}];

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
    self.ReasonReact.send(UpdateSelectingRawData(sampleDataToRaw(self.state.selectingRowFormat, candidates)));
    self.ReasonReact.send(UpdateSelectedRawData(sampleDataToRaw(self.state.selectedRowFormat, positions)));
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
    matchResult: [],
  },
  /* State transitions */
  reducer: (action, state) =>
    switch (action) {
    | UpdateSelectingName(selectingName) =>
      ReasonReact.Update({...state, selectingName})
    | UpdateSelectedName(selectedName) =>
      ReasonReact.Update({...state, selectedName})
    | UpdateMutualMatch(mutualMatch) =>
      ReasonReact.Update({...state, mutualMatch})
    | UpdateSelectingRowFormat(rowFormat) =>
      ReasonReact.Update({...state, selectingRowFormat: rowFormat})
    | UpdateSelectedRowFormat(rowFormat) =>
      ReasonReact.Update({...state, selectedRowFormat: rowFormat})
    | UpdateSelectingRawData(rawData) =>
      let (parsedData, selectedNamesEntries) =
        parseData(rawData, state.selectingRowFormat);
      ReasonReact.Update({
        ...state,
        selectingRawData: rawData,
        selectingParsedData: parsedData,
        selectedParsedData:
          ! state.mutualMatch && List.length(state.selectedParsedData) == 0 ?
            selectedNamesEntries : state.selectedParsedData,
      });
    | UpdateSelectedRawData(rawData) =>
      let (parsedData, selectedNamesEntries) =
        parseData(rawData, state.selectedRowFormat);
      ReasonReact.Update({
        ...state,
        selectedRawData: rawData,
        selectedParsedData: parsedData,
        /*selectingParsedData:
          state.mutualMatch ? state.selectingParsedData : selectedNamesEntries,*/
      });
    | MatchNow =>
      ReasonReact.Update({...state, matchResult: RunMatch.runMatch(state)})
    },
  render: self => {
    let state = self.state;
    let resultData =
      self.state.matchResult
      |. Belt.List.map(((p1, p2)) => [|p1, p2|])
      |> Belt.List.toArray;
    <div className="page-split">
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
        <SideDataImporter
          selectingName=state.selectingName
          selectedName=state.selectedName
          rawData=state.selectingRawData
          rowFormat=state.selectingRowFormat
          includeSelectees=true
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
          updateRowFormat=(
            rowFormat => self.send(UpdateSelectedRowFormat(rowFormat))
          )
          updateRawData=(
            rawData => self.send(UpdateSelectedRawData(rawData))
          )
        />

        <button onClick=(self.handle(loadSampleData))>
          (ReasonReact.string("Load Sample Data"))
        </button>
        (
          List.length(self.state.selectingParsedData) > 0
          || List.length(self.state.selectedParsedData) > 0 ?
            <div className="match-now">
              <button onClick=((_) => self.send(MatchNow))>
                (ReasonReact.string("Match now"))
              </button>
            </div> :
            ReasonReact.null
        )
      </div>
      <div className="graph-pane">
        <Graph
          selectingParsedData=state.selectingParsedData
          selectedParsedData=state.selectedParsedData
          resultData
        />
        (
          List.length(self.state.matchResult) > 0 ?
            <Result currentState=state resultData /> : ReasonReact.null
        )
      </div>
    </div>;
  },
  }
};
