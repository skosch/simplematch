[@bs.module "react-cytoscape"] external cytoscape : ReasonReact.reactClass = "ReactCytoscape";

let make = (~elements, ~style, ~cyRef, ~layout, children) => {
  ReasonReact.wrapJsForReason(
  ~reactClass=cytoscape,
  ~props={
    "elements": elements,
    "cyRef": cyRef,
    "cytoscapeOptions": [%bs.raw {|{
       minZoom: 0.2,
       maxZoom: 5, 
       motionBlur: true,
       mousewheelSensitivity: 0.8,
    }|}],
    "containerID": "graph-container",
    "style": style,
    "layout": {"name": "preset"},
  },
  children);
};
