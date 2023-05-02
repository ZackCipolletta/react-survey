import React from "react";
import PropTypes from "prop-types";

function SurveyDetail(props) {
  const { survey, onClickingDelete } = props;

  function handleAnswerSubmission(event) {
    event.preventDefault();
    props.onClickingSend({
      // userId: user.id | null
      answer1: event.target.answer1.value,
      answer2: event.target.answer2.value,
      answer3: event.target.answer3.value,
      answer4: event.target.answer4.value,
      answer5: event.target.answer5.value,
      answer6: event.target.answer6.value,
      answer7: event.target.answer7.value,
      answer8: event.target.answer8.value,
      surveyId: survey.id
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleAnswerSubmission}>
        <h1>{survey.title}</h1><br />
        <h3>{survey.question1}</h3><br />
        Answer: <input type='text'
          name="answer1"
          placeholder="Type your answer here" /> <br />
        <h3>{survey.question2}</h3>
        Answer: <input type='text'
          name="answer2"
          placeholder="Type your answer here" /> <br />
        <h3>{survey.question3}</h3>
        Answer: <input type='text'
          name="answer3"
          placeholder="Type your answer here" /> <br />
        <h3>{survey.question4}</h3>
        Answer: <input type='text'
          name="answer4"
          placeholder="Type your answer here" /> <br />
        <h3>{survey.question5}</h3>
        Answer: <input type='text'
          name="answer5"
          placeholder="Type your answer here" /> <br />
        <h3>{survey.question6}</h3>
        Answer: <input type='text'
          name="answer6"
          placeholder="Type your answer here" /> <br />
        <h3>{survey.question7}</h3>
        Answer: <input type='text'
          name="answer7"
          placeholder="Type your answer here" /> <br />
        <h3>{survey.question8}</h3>
        Answer: <input type='text'
          name="answer8"
          placeholder="Type your answer here" /> <br /><br />
        <button type="submit">Submit Survey Answers</button>
      </form>
      <button onClick={props.onClickingEdit}>Update Survey</button>
      <button onClick={() => onClickingDelete(survey.id)}>Delete Survey</button>

    </React.Fragment>
  );
}

SurveyDetail.propTypes = {
  survey: PropTypes.object,
  onClickingSend: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default SurveyDetail;