import React from "react";
import formStyle from "../Form/form.module.css";

function Form(props) {
  return (
    <div>
      <div className={formStyle.form}>
        <form onSubmit={props.handleFormValue}>
          <input
            type="text"
            value={props.forminput}
            onChange={props.handleFormValue}
            name="input"
          />
          <select
            className={formStyle.selectType}
            id="movietype"
            name="selectValue"
            value={props.selectinput}
            onChange={props.handleFormValue}
          >
            <option value="" onChange={props.allContent}>
              All
            </option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="game">Game</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default Form;
