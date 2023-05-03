import React from "react";
import PropTypes from "prop-types";
import SurveyForm from "./SurveyForm";

function NewSurvey(props) {


  function handleNewSurveyFormSubmission(event) {
    event.preventDefault();
    props.onNewSurveyCreation({
      creatorEmail: props.currentUserEmail,
      title: event.target.title.value,
      question1: event.target.question1.value,
      question2: event.target.question2.value,
      question3: event.target.question3.value,
      question4: event.target.question4.value,
      question5: event.target.question5.value,
      question6: event.target.question6.value,
      question7: event.target.question7.value,
      question8: event.target.question8.value
    });
  }

  return (
    < React.Fragment >
      <SurveyForm
        formSubmissionHandler={handleNewSurveyFormSubmission}
        buttonText="Submit"
      />
    </React.Fragment >
  );
}

NewSurvey.propTypes = {
  onNewSurveyCreation: PropTypes.func
};

export default NewSurvey;