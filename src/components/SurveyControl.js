import React, { useContext, useState, useEffect } from "react";
import db from "../firebase";
import SurveyList from "./SurveyList";
// import Survey from "./Survey";
import { collection, addDoc, doc, updateDoc, onSnapshot, deleteDoc } from "firebase/firestore";
import NewSurvey from "./NewSurvey";
import EditSurveyForm from "./EditSurvey";
import SurveyDetail from "./SurveyDetail";

function SurveyControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainSurveyList, setMainSurveyList] = useState([]);
  const [error, setError] = useState(null);
  const [newSurvey, setNewSurvey] = useState(false);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "surveys"),
      (collectionSnapshot) => {
        const surveys = [];
        collectionSnapshot.forEach((doc) => {
          surveys.push({
            title: doc.data().title,
            question1: doc.data().question1,
            question2: doc.data().question2,
            question3: doc.data().question3,
            question4: doc.data().question4,
            question5: doc.data().question5,
            question6: doc.data().question6,
            question7: doc.data().question7,
            question8: doc.data().question8,
            id: doc.id
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
    if (selectedSurvey != null) {
      setSelectedSurvey(null);
      setFormVisibleOnPage(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  };

  // const createSurvey = async () => {
  //   await addDoc(collection(db, "surveys"));
  //   setFormVisibleOnPage(false);
  // };

  //add functionality of createSurvey, handleAddingNewSurvey, and selected survey to make new function that allows us to alter the data for specified survey in the db
  // const addQuestionToSurvey = async (newQuestion) => {
  //   const result = await addDoc(collection(db, "surveys"), newQuestion);
  //   const id = result._key.path.segments[1];
  //   const selected = doc(db, "surveys", id);
  //   setSelectedSurvey(selected);
  //   console.log(selected);
  //   setEditing(true);
  // };

  const handleEditingSurveyInList = async (surveyToEdit) => {
    const surveyRef = doc(db, "surveys", surveyToEdit.id);
    await updateDoc(surveyRef, surveyToEdit);
    setEditing(false);
    setSelectedSurvey(null);
  };

  const handleAddingNewSurveyToList = async (newSurveyData) => {
    const result = await addDoc(collection(db, "surveys"), newSurveyData);
    setFormVisibleOnPage(false);
  };

  const handleChangingSelectedSurvey = (id) => {
    const selection = mainSurveyList.filter(survey => survey.id === id)[0];
    console.log(selection);
    setSelectedSurvey(selection);
  };

  const handleSendingSurvey = async (surveyAnswers) => {
    const result = await addDoc(collection(db, "answers"), surveyAnswers);
    setSelectedSurvey(null);
  };

  let currentlyVisibleState = null;
  let buttonText = null;

  if (error) {
    currentlyVisibleState = <p>There was an error: {error}</p>;
  } else if (editing) {
    currentlyVisibleState =
      <EditSurveyForm
        survey={selectedSurvey}
        onEditSurvey={handleEditingSurveyInList} />;
  } else if (selectedSurvey != null) {
    currentlyVisibleState =
      <SurveyDetail
        survey={selectedSurvey}
        onClickingSend={handleSendingSurvey} />;
    buttonText = "Return to list";
  } else if (formVisibleOnPage) {
    currentlyVisibleState =
      <NewSurvey
        onNewSurveyCreation={handleAddingNewSurveyToList} />;
    buttonText = "Return to list";
  } else {
    currentlyVisibleState = <SurveyList
      onSurveySelection={handleChangingSelectedSurvey}
      surveyList={mainSurveyList}
    // addQuestion={addQuestionToSurvey}
    />;
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
