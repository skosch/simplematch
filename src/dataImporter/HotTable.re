[@bs.module] external hotTable : ReasonReact.reactClass = "react-handsontable";

let make = (~settings, children) => {
  ReasonReact.wrapJsForReason(
  ~reactClass=hotTable,
  ~props={"settings": settings},
  children);
};
