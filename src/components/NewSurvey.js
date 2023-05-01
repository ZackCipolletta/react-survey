import React from "react";
import PropTypes from "prop-types";
import SurveyForm from "./SurveyForm";

function NewSurvey(props) {

  function handleNewSurveyFormSubmission(event) {
    event.preventDefault();
    props.onNewSurveyCreation({
      title: event.target.title.value,
      Question: event.target.question.value,
      Answer: event.target.answer.value
    });
    
  }

  return (
    <React.Fragment>
      <SurveyForm
        formSubmissionHandler={handleNewSurveyFormSubmission}
        buttonText="Submit" />
    </React.Fragment>
  );
}

NewSurvey.propTypes = {
  onNewSurveyCreation: PropTypes.func
};

export default NewSurvey;