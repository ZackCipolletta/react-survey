import React from "react";
import PropTypes from "prop-types";

function Survey(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTicketClicked(props.id)}>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
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