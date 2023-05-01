import React, { useContext, useState, useEffect } from "react";
import SurveyList from "./SurveyList";
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
    console.log(newSurvey)
    console.log(newMainSurveyList)
    setMainSurveyList(newMainSurveyList);

    setFormVisibleOnPage(false);
  };

  let currentlyVisibleState = null;
  let buttonText = null;

  if (formVisibleOnPage) {
    currentlyVisibleState =
      <NewSurvey
        onNewSurveyCreation={handleAddingNewSurveyToList} />;
    buttonText = "Return to list";
  } else {
    currentlyVisibleState = <SurveyList
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