import React from "react";
import PropTypes from "prop-types";
import SurveyForm from "./SurveyForm";
import { v4 } from 'uuid';

function NewSurvey(props) {

  function handleNewSurveyFormSubmission(event) {
    event.preventDefault();
    props.onNewSurveyCreation({
      title: event.target.title.value,
      Question1: event.target.title.value,
      Question1Answer1: event.target.Question1Answer1.value,
      Question1Answer2: event.target.Question1Answer2.value,
      Question1Answer3: event.target.Question1Answer3.value,
      Question1Answer4: event.target.Question1Answer4.value,
      id: v4()
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