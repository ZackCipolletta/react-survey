import React from "react";
import Survey from "./Survey";
import PropTypes from "prop-types";

function surveyList(props) {
  <React.Fragment>
    {props.surveyList.map((survey) =>
      <Survey
        title={survey.title}
        Question1={survey.Question1}
        Question1Answer1={survey.Question1Answer1}
        Question1Answer2={survey.Question1Answer2}
        Question1Answer3={survey.Question1Answer3}
        Question1Answer4={survey.Question1Answer4}
      />
    )}
  </React.Fragment>;

}

surveyList.propTypes = {
  surveyList: PropTypes.array
}

export default surveyList;