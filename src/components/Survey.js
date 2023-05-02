import React from "react";
import PropTypes from "prop-types";

function Survey(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenSurveyClicked(props.id)}>
        <h3>{props.title}</h3>
        <hr />
      </div>
    </React.Fragment>
  );
}

Survey.propTypes = {
  title: PropTypes.string,
  question: PropTypes.object
};

export default Survey;