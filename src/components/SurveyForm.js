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
        Question1: <input type='text'
          name="question1"
          placeholder="Type your question here" /> <br />
        Question2: <input type='text'
          name="question2"
          placeholder="Type your question here" /> <br />
        Question3: <input type='text'
          name="question3"
          placeholder="Type your question here" /> <br />
        Question4: <input type='text'
          name="question4"
          placeholder="Type your question here" /> <br />
        Question5: <input type='text'
          name="question5"
          placeholder="Type your question here" /> <br />
        Question6: <input type='text'
          name="question6"
          placeholder="Type your question here" /> <br />
        Question7: <input type='text'
          name="question7"
          placeholder="Type your question here" /> <br />
        Question8: <input type='text'
          name="question8"
          placeholder="Type your question here" /> <br />
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