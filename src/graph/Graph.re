open Belt;

let component = ReasonReact.statelessComponent("Graph");

type cytoscapeElement = {
  .
  "data": {
    .
    "id": string,
    "group": string,
    "source": Js.Nullable.t(string),
    "target": Js.Nullable.t(string),
    "side": Js.Nullable.t(string),
    "rank": Js.Nullable.t(int),
    "inResult": Js.Nullable.t(bool),
  },
  "position": Js.Nullable.t({. "y": int, "x": int}),
};

let make = (~selectingParsedData, ~selectedParsedData, ~resultData, _children) => {
  let acceptedEdgesMap = Array.reduce(resultData, HashMap.String.make(Array.length(resultData)), (p, c) => {
    let [|selecting, selected|] = c;
    HashMap.String.set(p, selecting ++ "_to_" ++ selected, true);
    p;
  });

  let sideDataEntryToElementArray =
      (entry: SharedTypes.sideDataEntry, x: int, y: int, side: string)
      : array(cytoscapeElement) => {
    /* the actual node first */
    let node = {
      "data": {
        "group": "nodes",
        "id": entry.name,
        "source": Js.Nullable.undefined,
        "target": Js.Nullable.undefined,
        "side": Js.Nullable.return(side),
        "rank": Js.Nullable.return(0),
        "inResult": Js.Nullable.return(false),
      },
      "position": Js.Nullable.return({"y": y * 7, "x": x}),
    };
    let selectedNodes =
      entry.selectedNames
      |. List.map(((sn, rank)) =>
           {
             "data": {
               "group": "edges",
               "id": entry.name ++ "_to_" ++ sn,
               "source": Js.Nullable.return(entry.name),
               "target": Js.Nullable.return(sn),
               "side": Js.Nullable.undefined,
               "rank": Js.Nullable.return(rank),
               "inResult": Js.Nullable.return(HashMap.String.has(acceptedEdgesMap, entry.name ++ "_to_" ++ sn))
             },
             "position": Js.Nullable.undefined,
           }
         )
      |. List.toArray;
    Array.concat([|node|], selectedNodes);
  };
  let selectingElements =
    selectingParsedData
    |. List.mapWithIndex((i, x) => ((i, x)))
    |. List.map(((i, e)) => sideDataEntryToElementArray(e, 0, 2 * i - List.length(selectingParsedData), "selecting"))
    |. List.toArray;
  let selectedElements =
    selectedParsedData
    |. List.mapWithIndex((i, x) => ((i, x)))
    |. List.map(((i, e)) => sideDataEntryToElementArray(e, 100, 2 * i - List.length(selectedParsedData), "selected"))
    |. List.toArray;
  let elements =
    [|selectingElements, selectedElements|]
    |. Array.concatMany
    |. Array.concatMany
    |> Js.Array.sortInPlaceWith((e1: cytoscapeElement, e2: cytoscapeElement) =>
         -
           compare(
             e1##data##source == Js.Nullable.undefined,
             e2##data##source == Js.Nullable.undefined,
           )
       );
  
  {
    ...component,
    render: (_) =>
      <div className="graph">
        <Cytoscape
          elements
          style=[%bs.raw
            {|
          [{
            selector: "node",
            style: {
              "background-color": "#666",
              "label": "data(id)",
              "width": 4,
              "height": 4,
              "font-size": "2.7px",
              "font-family": "Roboto Mono",
              "font-weight": "500",
              "color": "#333",
              "text-outline-color": "#fff",
              "text-outline-width": "0.5px",
              "background-color": e => e.data("side") === "selecting" ? "#1a4a8f" : "#ff6953",
            },
          },
          {
            selector: "edge",
            style: {
              "width": e => e.data("inResult") ? 2 : 0.4,
              "line-color": e => `hsl(${100/e.data("rank")}, 40%, 70%)`,
              "target-arrow-color": e => `hsl(${100/e.data("rank")}, 40%, 70%)`,
              "target-arrow-shape": "triangle",
              "arrow-scale": 0.34,
              "curve-style": "bezier",
            },
          }]
        |}
          ]
          cyRef=[]
          layout={}
        />
        <div id="graph-container" />
      </div>,
  };
};
