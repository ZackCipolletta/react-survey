import React, { useContext, useState, useEffect } from "react";
import Survey from "./Survey";
import NewSurvey from "./NewSurvey";

function SurveyControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainSurveyList, setMainSurveyList] = useState([]);


  const handleClick = () => {
    setFormVisibleOnPage(!formVisibleOnPage);
  };

  const handleAddingNewSurveyToList = (newSurvey) => {
    const newMainSurveyList = mainSurveyList.concat(newSurvey);
  };

  let currentlyVisibleState = null;
  let buttonText = null;

  if (formVisibleOnPage) {
    currentlyVisibleState =
      <newSurvey
        onNewSurveyCreation={handleAddingNewSurveyToList} />;
    buttonText = "Return to list";
  } else {
    currentlyVisibleState = <surveyList
      surveyList={mainSurveyList} />;
    buttonText = "New Survey";
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  );
}

export default SurveyControl;