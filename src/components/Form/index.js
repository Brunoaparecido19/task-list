/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { FiPlus } from "react-icons/fi";
import { FormContainer, FormInput, FormBtn } from "./styles";

export default function Form({ handleSubmit, handleChange, newTask }) {
  return (
    <FormContainer className="container-form">
      <form onSubmit={handleSubmit} action="/#">
        <FormInput
          onChange={handleChange}
          type="text"
          placeholder="New Task"
          value={newTask}
        />
        <FormBtn type="submit">
          <FiPlus />{" "}
        </FormBtn>
      </form>
    </FormContainer>
  );
}
Form.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  newTask: PropTypes.string,
};
