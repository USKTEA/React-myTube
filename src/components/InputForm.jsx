import React from "react";

function InputForm(props) {
  return (
    <form id="input-form" onSubmit={props.handleSubmit}>
      {props.children}
    </form>
  );
}

export default InputForm;
