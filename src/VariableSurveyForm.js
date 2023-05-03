import React from "react";
import PropTypes from "prop-types";

function SurveyForm(props) {
  return (
    < React.Fragment >
      <form onSubmit={props.formSubmissionHandler}>
        Survey Title: <input
          type='text'
          name="title"
          placeholder="Title of Survey" /> <br />
        {/* <button onClick={props.addQuestion}>submit</button> */}
        <br /><br />
        <br /><br />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment >
  );
}

SurveyForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default SurveyForm;