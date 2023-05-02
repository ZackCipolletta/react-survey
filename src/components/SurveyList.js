import React from "react";
import Survey from "./Survey";
import PropTypes from "prop-types";

function SurveyList(props) {
  return (
    <React.Fragment>
      {Object.values(props.surveyList).map((survey) =>
        <Survey
          whenSurveyClicked={props.onSurveySelection}
          title={survey.title}
          id={survey.id}
          key={survey.id}
        />
      )}
    </React.Fragment>
  );
}

SurveyList.propTypes = {
  SurveyList: PropTypes.array,
  onSurveySelection: PropTypes.func
};

export default SurveyList;