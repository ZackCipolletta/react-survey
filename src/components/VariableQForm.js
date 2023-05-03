import React from "react";
import PropTypes from "prop-types";

function VariableQForm(props) {
  return (
    < React.Fragment >
      <form onSubmit={props.formSubmissionHandler}>
      <div>
        Question: <input type='text'
          name="question"
            placeholder="Type your question here" />
          <button type="submit">{ props.buttonText }</button>
        </div>
      </form>
    </React.Fragment >
  );
}

VariableQForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default VariableQForm;