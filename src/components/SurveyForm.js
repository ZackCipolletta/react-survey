import React from "react";
import PropTypes from "prop-types";

function SurveyForm(props) {

  const { } = props;

  return (
    < React.Fragment >
      <form onSubmit={props.formSubmissionHandler}>
        Survey Title: <input
          type='text'
          name="title"
          placeholder="Title of Survey" />
        Question 1: <input
          type='text'
          name="Question1"
          placeholder="First Question" />
        Question Answer 1: <input
          type='text'
          name="Question1Answer1"
          placeholder="First Answer" />
        Question Answer 2: <input
          type='text'
          name="Question1Answer2"
          placeholder="Second Answer" />
        Question Answer 3: <input
          type='text'
          name="Question1Answer3"
          placeholder="Third Answer" />
        Question Answer 4: <input
          type='text'
          name="Question1Answer4"
          placeholder="Fourth Answer" />
        <button>{props.buttonText}</button>
      </form>
    </React.Fragment >
  );
}

SurveyForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default SurveyForm;