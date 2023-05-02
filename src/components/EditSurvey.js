import React from "react";
import SurveyForm from "./SurveyForm";
import PropTypes from "react";

function EditSurveyForm(props) {
  const { survey } = props;

  function handleEditSurveyFormSubmission(event) {
    event.preventDefault();
    props.onEditSurvey({ title: event.target.title.value, question: event.target.question.value, answer: event.target.answer.value, id: survey.id });
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