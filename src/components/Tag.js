import React from "react";
import { tagAction } from "../redux/action";

const handleToggleTag = (dispatch, name) => e => {
  e.preventDefault();
  dispatch(tagAction.actionToggleTag(name));
};

export default props => {
  const { dispatch, name, active } = props;
  return (
    <li>
      <span
        className={
          "mb-1 text-left badge badge-pill pointer " +
          (active ? "badge-success" : "badge-secondary")
        }
        onClick={handleToggleTag(dispatch, name)}
      >
        <span>{name}</span>
      </span>
    </li>
  );
};
