import React from "react";
import SurveyForm from "./SurveyForm";
import PropTypes from "react";

function EditSurveyForm(props) {
  const { survey } = props;

  function handleEditSurveyFormSubmission(event) {
    event.preventDefault();
    props.onEditSurvey({
      title: event.target.title.value,
      question1: event.target.question1.value,
      question2: event.target.question2.value,
      question3: event.target.question3.value,
      question4: event.target.question4.value,
      question5: event.target.question5.value,
      question6: event.target.question6.value,
      question7: event.target.question7.value,
      question8: event.target.question8.value,
      id: survey.id
    });
  }

  return (
    <React.Fragment>
      <SurveyForm
        formSubmissionHandler={handleEditSurveyFormSubmission}
        buttonText="Submit" />
    </React.Fragment>
  );
}

export default EditSurveyForm;

EditSurveyForm.propTypes = {
  survey: PropTypes.object,
  onEditSurvey: PropTypes.func
};