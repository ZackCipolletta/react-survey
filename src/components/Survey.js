import React from "react";
import PropTypes from "prop-types";

function Survey(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTicketClicked(props.id)}>
      <h3>{props.title}</h3>
        <p>{props.Question1}</p>
        <p>{props.Question1Answer1}</p>
        <p>{props.Question1Answer2}</p>
        <p>{props.Question1Answer3}</p>
        <p>{props.Question1Answer4}</p>
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