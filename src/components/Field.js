
import React from "react";


const Field = (props) => {
  return (
    <span>
      <label htmlFor={props.for}>{props.label}</label>
      <input
        className="form-control"
        id={props.id}

      />
    </span>
  );
};



export default Field;
