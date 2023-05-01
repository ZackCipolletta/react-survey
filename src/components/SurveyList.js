import React from "react";
import Survey from "./Survey";
import PropTypes from "prop-types";

function SurveyList(props) {
  return (
    <React.Fragment>
      {Object.values(props.surveyList).map((survey) =>
        <Survey
          title={survey.title}
          Question1={survey.Question1}
          id={survey.id}
          key={survey.id}
        />
      )}
    </React.Fragment>
  );
}

SurveyList.propTypes = {
  SurveyList: PropTypes.array
};

export default SurveyList;