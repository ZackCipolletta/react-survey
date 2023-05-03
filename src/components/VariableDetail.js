import React, { useState } from "react";
import PropTypes from "prop-types";
import VariableQForm from "./VariableQForm";

function VariableDetail(props) {
  const [answers, setAnswers] = useState({});

  function handleAnswerChange(event, index) {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [index]: event.target.value,
    }));
  }

  function handleAnswerSubmission(event) {
    event.preventDefault();
    const { onClickingSend } = props;
    const surveyData = {
      questions: props.currentQuestions.map((question, index) => ({
        question: question,
        answer: answers[index] || "",
      })),
    };
    onClickingSend(surveyData);
  }

  const questionInputs = props.currentQuestions.map((question, index) => (
    <div key={index}>
      <label>
        {question}
        <input
          type="text"
          value={answers[index] || ""}
          onChange={(event) => handleAnswerChange(event, index)}
        />
      </label>
    </div>
  ));

  return (
    <React.Fragment>
      <form onSubmit={handleAnswerSubmission}>
        {questionInputs}
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

VariableDetail.propTypes = {
  currentUserEmail: PropTypes.string,
  onClickingSend: PropTypes.func,
  currentQuestions: PropTypes.arrayOf(PropTypes.string)
};

export default VariableDetail;
