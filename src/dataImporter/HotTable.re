[@bs.module "./AutosizeHotTable"] external autosizeHotTable : ReasonReact.reactClass = "default";

let make = (~settings, children) => {
  ReasonReact.wrapJsForReason(
  ~reactClass=autosizeHotTable,
  ~props={"settings": settings},
  children);
};
