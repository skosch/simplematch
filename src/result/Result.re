include SharedTypes;

open Belt;

type stats = {
  selectorsMatched: int,
  selecteesMatched: int,
  unmatchedSelectorNames: Set.t(string, SharedTypes.StrCmp.identity),
  unmatchedSelecteeNames: Set.t(string, SharedTypes.StrCmp.identity),
  selectingRanks: HashMap.Int.t(int),
  selectedRanks: HashMap.Int.t(int),
  selectingRanksWorst: int,
  selectedRanksWorst: int,
};

let component = ReasonReact.statelessComponent("Result");

let make = (~currentState, ~resultData, _children) => {
  let statistics = () : stats => {
    let (selectingMatchedNames, selectedMatchedNames, matchedPairings) =
      resultData
      |. Array.reduce(
           (
             Set.make(~id=(module SharedTypes.StrCmp)),
             Set.make(~id=(module SharedTypes.StrCmp)),
             Set.make(~id=(module SharedTypes.PairingCmp)),
           ),
           (
             (selectingMatchedNames, selectedMatchedNames, matchedPairings),
             c,
           ) => {
             let selectingName = Js.Option.getWithDefault("", c[0]);
             let selectedName = Js.Option.getWithDefault("", c[1]);
             let pairing = (selectingName, selectedName);
             (Set.add(selectingMatchedNames, selectingName),
             Set.add(selectedMatchedNames, selectedName),
             Set.add(matchedPairings, pairing))
           },
         );
    let allSelectorNames =
      List.map(currentState.selectingParsedData, e => e.name) |> List.toArray;
    let allSelecteeNames =
      List.map(currentState.selectedParsedData, e => e.name) |> List.toArray;
    let (selectorsMatched, unmatchedSelectorNames, selectingRanks, selectingRanksWorst) =
      currentState.selectingParsedData
      |. List.reduce(
           (0, Set.fromArray(allSelectorNames, ~id=(module StrCmp)), HashMap.Int.make(~hintSize=30), 0),
           ((selectorsMatched, unmatchedSelectorNames, selectingRanks, selectingRanksWorst), c) => {
             let selectorMatched = Set.has(selectingMatchedNames, c.name);
             let newSelectorsMatched = selectorsMatched + (selectorMatched ? 1 : 0);
             let newUnmatchedNames =
               Set.remove(unmatchedSelectorNames, c.name);
             /* for each selectedName, tally up the rank IFF match happened */
             let (newSelectingRanks, newSelectingRanksWorst) =
               List.reduce(
                 c.selectedNames,
                 (selectingRanks, selectingRanksWorst),
                 ((psr, srw), (sn, r)) => {
                   if (Set.has(matchedPairings, (c.name, sn))) {
                     let oldCount = Js.Option.getWithDefault(0, HashMap.Int.get(selectingRanks, r));
                     HashMap.Int.set(psr, r, oldCount + 1);
                   };
                   (psr, r > srw ? r : srw);
                 },
               );
             (newSelectorsMatched, newUnmatchedNames, newSelectingRanks, newSelectingRanksWorst);
           },
         );
    let (selecteesMatched, unmatchedSelecteeNames, selectedRanks, selectedRanksWorst) =
      currentState.selectedParsedData
      |. List.reduce((
             0,
             Set.fromArray(allSelecteeNames, ~id=(module StrCmp)),
             HashMap.Int.make(~hintSize=30),
          0
           ),
           ((selecteesMatched, unmatchedSelecteeNames, selectedRanks, selectedRanksWorst), c) => {
             let selecteeMatched = Set.has(selectedMatchedNames, c.name);
             let newSelecteesMatched = selecteesMatched + (selecteeMatched ? 1 : 0);
             let newUnmatchedNames =
               Set.remove(unmatchedSelecteeNames, c.name);
             /* for each selectedName, tally up the rank IFF match happened */
             let (newSelectedRanks, newSelectedRanksWorst) =
               List.reduce(
                 c.selectedNames,
                 (selectedRanks, selectedRanksWorst),
                 ((psr, srw), (sn, r)) => {
                   if (Set.has(matchedPairings, (sn, c.name))) {
                     let oldCount = Js.Option.getWithDefault(0, HashMap.Int.get(selectedRanks, r));
                     HashMap.Int.set(psr, r, oldCount + 1);
                   };
                   (psr, r > srw ? r : srw);
                 },
               );
             (newSelecteesMatched, newUnmatchedNames, newSelectedRanks, newSelectedRanksWorst);
           },
         );
    {
      selectorsMatched,
      selecteesMatched,
      unmatchedSelectorNames,
      unmatchedSelecteeNames,
      selectingRanksWorst,
      selectedRanksWorst,
      selectingRanks,
      selectedRanks,
    };
  };
  let columnHeader = index =>
    switch (index) {
    | 0 => currentState.selectingName
    | 1 => currentState.selectedName
    | _ => "";
    };
  let get_max_value = Array.reduce(_, 0, (p, c) => {
    (c > p) ? c : p;
  });
  {
    ...component,
    render: (_) => {
      let {selecteesMatched, selectorsMatched,
           unmatchedSelectorNames, unmatchedSelecteeNames,
           selectingRanks, selectedRanks,
           selectingRanksWorst, selectedRanksWorst,
      } =
        statistics();
      let rankHistBars = (rankMap, worstRank) => {
        let modeRank = rankMap
        |> HashMap.Int.valuesToArray
        |> get_max_value;
        
        worstRank
        |> Array.range(1)
        |. Array.map(r => {
            let pcHeight = float_of_int(Js.Option.getWithDefault(0, HashMap.Int.get(rankMap, r))) *. 100.0 /. float_of_int(modeRank);
            <div
              className="hist-bar"
              style=(ReactDOMRe.Style.make(~height=(string_of_float(pcHeight) ++ "0%"), ()))
              key=(string_of_int(r))
              title=(string_of_int(r))
              ></div>
        });
      };
      <div className="result">
        <div className="result-table">
          <HotTable
            settings={
              "colHeaders": columnHeader,
              "rowHeaders": true,
              "copyPaste": true,
              "width": "50%",
              "maxCols": 2,
              "stretchH": "all",
              "data": resultData,
            }
          />
        </div>
        <div className="result-details">
          <div className="counts">
            <div className="pairings">
              <div className="top-label">
                (ReasonReact.string("Pairings"))
              </div>
              (ReasonReact.string(string_of_int(Array.length(resultData))))
            </div>
            <div className="matched-counts">
              <div className="selectors-matched">
                <div className="top-label">
                  (
                    ReasonReact.string(
                      String.capitalize(currentState.selectingName),
                    )
                  )
                </div>
                (ReasonReact.string(string_of_int(selectorsMatched)))
                <span className="label">
                  (ReasonReact.string("matched,"))
                </span>
                (
                  ReasonReact.string(
                    string_of_int(
                      List.length(currentState.selectingParsedData)
                      - selectorsMatched,
                    ),
                  )
                )
                <span className="label">
                  (ReasonReact.string("unmatched"))
                </span>
                <div className="histogram">
                  (
                    ReasonReact.array(rankHistBars(selectingRanks, selectingRanksWorst))
                  )
                </div>
              </div>
              <div className="selectors-matched">
                <div className="top-label">
                  (
                    ReasonReact.string(
                      String.capitalize(currentState.selectedName),
                    )
                  )
                </div>
                (ReasonReact.string(string_of_int(selecteesMatched)))
                <span className="label">
                  (ReasonReact.string("matched,"))
                </span>
                (
                  ReasonReact.string(
                    string_of_int(
                      List.length(currentState.selectedParsedData)
                      - selecteesMatched,
                    ),
                  )
                )
                <span className="label">
                  (ReasonReact.string("unmatched"))
                </span>
                <div className="histogram">
                  (
                    ReasonReact.array(rankHistBars(selectedRanks, selectedRanksWorst))
                  )
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>;
    },
  };
};
