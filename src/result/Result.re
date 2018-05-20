include SharedTypes;

open Belt;

[@bs.module] external pluralize : unit => unit = "";
[@bs.val] [@bs.module "pluralize"] external singular : string => string = "";

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
    let (selectingMatchedNames, selectedMatchedNames,
         selectingRanks, selectingRanksWorst, selectedRanks, selectedRanksWorst) =
      resultData
      |. Array.reduce(
           (
             Set.make(~id=(module SharedTypes.StrCmp)),
             Set.make(~id=(module SharedTypes.StrCmp)),
             HashMap.Int.make(~hintSize=30),
             0,
             HashMap.Int.make(~hintSize=30),
             0,
           ),
           (
             (selectingMatchedNames, selectedMatchedNames,
              selectingRanks, selectingRanksWorst, selectedRanks, selectedRanksWorst),
             c,
           ) => {
             let (selectingName, selectedName, selectingRank, selectedRank) = c;

            let oldSelectingRankCount =
            Js.Option.getWithDefault(
            0,
            HashMap.Int.get(selectingRanks, selectingRank),
            );
            HashMap.Int.set(selectingRanks, selectingRank, oldSelectingRankCount + 1);
            let oldSelectedRankCount =
            Js.Option.getWithDefault(
            0,
            HashMap.Int.get(selectedRanks, selectedRank),
            );
            HashMap.Int.set(selectedRanks, selectedRank, oldSelectedRankCount + 1);
        
             (
               Set.add(selectingMatchedNames, selectingName),
               Set.add(selectedMatchedNames, selectedName),
               selectingRanks,
               (selectingRank > selectingRanksWorst ? selectingRank : selectingRanksWorst),
               selectedRanks,
               (selectedRank > selectedRanksWorst ? selectedRank : selectedRanksWorst),
             );
           },
         );
    let allSelectorNames =
      List.map(currentState.selectingParsedData, e => e.name) |> List.toArray;
    let allSelecteeNames =
      List.map(currentState.selectedParsedData, e => e.name) |> List.toArray;
    let unmatchedSelectorNames =
      currentState.selectingParsedData
      |. List.reduce(
          Set.fromArray(allSelectorNames, ~id=(module StrCmp)),
          (unmatchedSelectorNames, c) => Set.remove(unmatchedSelectorNames, c.name)
         );
    let unmatchedSelecteeNames =
      currentState.selectedParsedData
      |. List.reduce(
          Set.fromArray(allSelecteeNames, ~id=(module StrCmp)),
          (unmatchedSelecteeNames, c) => Set.remove(unmatchedSelecteeNames, c.name)
         );
    {
      selectorsMatched: Set.size(selectingMatchedNames),
      selecteesMatched: Set.size(selectedMatchedNames),
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
    | 0 => singular(currentState.selectingName)
    | 1 => singular(currentState.selectedName)
    | 2 => singular(currentState.selectingName) ++ " ranked " ++ singular(currentState.selectedName)
    | 3 => singular(currentState.selectedName) ++ " ranked " ++ singular(currentState.selectingName)
    | _ => ""
    };
  let get_max_value = Array.reduce(_, 0, (p, c) => c > p ? c : p);
  {
    ...component,
    render: (_) => {
      let {
        selecteesMatched,
        selectorsMatched,
        unmatchedSelectorNames,
        unmatchedSelecteeNames,
        selectingRanks,
        selectedRanks,
        selectingRanksWorst,
        selectedRanksWorst,
      } =
        statistics();
    
      let rankHistBars = (rankMap, worstRank) => {
        let modeRank = rankMap |> HashMap.Int.valuesToArray |> get_max_value;
        worstRank
        |> Array.range(1)
        |. Array.map(r => {
             let pcHeight =
               float_of_int(
                 Js.Option.getWithDefault(0, HashMap.Int.get(rankMap, r)),
               )
               *. 100.0
               /. float_of_int(modeRank);
            <div className="hist-bar-with-label">
             <div
               className="hist-bar"
               style=(
                 ReactDOMRe.Style.make(
                   ~height=string_of_float(pcHeight) ++ "0%",
                   (),
                 )
               )
               key=(string_of_int(r))
               title=(string_of_int(r))
             />
              <div className="hist-label">(ReasonReact.string(string_of_int(r)))</div>
              </div>;
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
              "maxCols": currentState.mutualMatch ? 4 : 3,
              "stretchH": "all",
              "data": resultData,
            }
          />
        </div>
        <div className="result-details">
          <div className="counts">
            <div className="pairings">
              <div className="top-label">
                (ReasonReact.string("Matches"))
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
                    ReasonReact.array(
                      rankHistBars(selectingRanks, selectingRanksWorst),
                    )
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
                    ReasonReact.array(
                      rankHistBars(selectedRanks, selectedRanksWorst),
                    )
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
