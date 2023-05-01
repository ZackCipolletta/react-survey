import React, { useContext, useState, useEffect } from "react";
import db from "../firebase";
import SurveyList from "./SurveyList";
import Survey from "./Survey";
import { collection, addDoc, doc, updateDoc, onSnapshot, deleteDoc } from "firebase/firestore";
import NewSurvey from "./NewSurvey";

function SurveyControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainSurveyList, setMainSurveyList] = useState([]);
  const [error, setError] = useState(null);
  const [newSurvey, setNewSurvey] = useState(false)

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "surveys"),
      (collectionSnapshot) => {
        const surveys = [];
        collectionSnapshot.forEach((doc) => {
          surveys.push({
            title: doc.data().title
          });
        });
        setMainSurveyList(surveys);
      },
      (error) => {
        setError(error.message);
      }
    );
    return () => unSubscribe();
  }, []);


  const handleClick = () => {
    setFormVisibleOnPage(!formVisibleOnPage)
    ;
  };

  const createSurvey = async () => {
    await addDoc(collection(db, "surveys"))
    setFormVisibleOnPage(false);
  }

  //add functionality of createSurvey, handleAddingNewSurvey, and selected survey to make new function that allows us to alter the data for specified survey in the db

  const handleAddingNewSurveyToList = async (newSurveyData) => {
    const result = await addDoc(collection(db, "surveys"), newSurveyData)
    console.log(result._key.path.segments[1]);
    setFormVisibleOnPage(false);
  };

  let currentlyVisibleState = null;
  let buttonText = null;

  if (error) {
    currentlyVisibleState = <p>There was an error: {error}</p>;
  }
  else if (formVisibleOnPage) {
    currentlyVisibleState =
      <NewSurvey
        onNewSurveyCreation={handleAddingNewSurveyToList} />;
    buttonText = "Return to list";
  } else {
    currentlyVisibleState = <SurveyList
      surveyList={mainSurveyList}
      addQuestion={someFunction} />;
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