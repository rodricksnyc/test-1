import React from "react";


const RadioButton = (props) => {
  return (


    <td className="form-check">
      <input type="radio" className="form-check-input"
      value={props.value}
      id={props.id} />
      <label className="form-check-label" htmlFor={props.for}>{props.label}</label>
    </td>

  );
};

export default RadioButton;
