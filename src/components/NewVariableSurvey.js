import React, { useState } from "react";
import PropTypes from "prop-types";
import VariableQForm from "./VariableQForm";

function NewVariableSurvey(props) {
  const [questionArray, setQuestionArray] = useState([]);

  function placeholderfunc(event) {
    event.preventDefault();
    const newQuestion = event.target.question.value;
    setQuestionArray((prevArray) => [...prevArray, newQuestion]);
  }

  function handleNewSurveyFormSubmission(event) {
    event.preventDefault();
    props.onNewSurveyCreation({
      creatorEmail: props.currentUserEmail,
      title: event.target.title.value,
      questions: questionArray,
    });
  }

  // Create an array of JSX elements
  const questions = questionArray.map((question, index) => (
    <div key={index}>{question}</div>
  ));

  return (
    <React.Fragment>
      {/* Render the array of JSX elements */}
      {questions}
      <form onSubmit={handleNewSurveyFormSubmission}>
        Title: <input type='text'
          name="title"
          placeholder="Type your question here" />
        <button type="submit">Create this survey</button>
      </form>
      <VariableQForm
        formSubmissionHandler={placeholderfunc}
        buttonText="Add this question"
      />


    </React.Fragment>
  );
}

NewVariableSurvey.propTypes = {
  onNewSurveyCreation: PropTypes.func,
};

export default NewVariableSurvey;
