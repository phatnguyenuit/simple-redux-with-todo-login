import ConnectedFilter from "../container/ConnectedFilter";
import React from "react";

export default ({ filters }) => {
  // console.log('Render filter list');
  return (
    <ul className="list-unstyled ml-3">
      {filters.map(filter => (
        <ConnectedFilter key={filter.id} {...filter} />
      ))}
    </ul>
  );
};
