import React, { useContext, useState, useEffect } from "react";
import { db, auth } from "../firebase";
import SurveyList from "./SurveyList";
// import Survey from "./Survey";
import { collection, addDoc, doc, updateDoc, onSnapshot, deleteDoc, query, where, getDocs } from "firebase/firestore";
import NewSurvey from "./NewSurvey";
import EditSurveyForm from "./EditSurvey";
import SurveyDetail from "./SurveyDetail";
import DashBoard from "./Dashboard";

function SurveyControl(props) {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainSurveyList, setMainSurveyList] = useState([]);
  const [error, setError] = useState(null);
  const [newSurvey, setNewSurvey] = useState(false);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [editing, setEditing] = useState(false);
  const [dashboardDisplay, setDashboardDisplay] = useState(false);
  const [answersList, setAnswersList] = useState([]);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "surveys"),
      (collectionSnapshot) => {
        const surveys = [];
        collectionSnapshot.forEach((doc) => {
          surveys.push({
            creatorEmail: doc.data().creatorEmail,
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

  useEffect(() => {
    if (!selectedSurvey) return;

    const selectedId = selectedSurvey.id;
    const q = query(collection(db, "answers"), where("surveyId", "==", selectedId));
  
    const unSubscribe = onSnapshot(q, (querySnapshot) => {
      const answers = [];
      querySnapshot.forEach((doc) => {
        answers.push({ id: doc.id, ...doc.data() });
      });
      console.log(answers);
      setAnswersList(answers);
    });
  
    return () => {
      if (unSubscribe) unSubscribe();
    };
  }, [selectedSurvey]);
  
  const handleClick = () => {
    if (selectedSurvey != null) {
      setSelectedSurvey(null);
      setFormVisibleOnPage(false);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  };

  const handleEditClick = () => {
    setEditing(true);
    console.log("setting edit to true");
  };

  const handleDashboardClick = () => {
    setDashboardDisplay(true);
  };

  const handleEditingSurveyInList = async (surveyToEdit) => {
    const surveyRef = doc(db, "surveys", surveyToEdit.id);
    await updateDoc(surveyRef, surveyToEdit);
    setEditing(false);
    setSelectedSurvey(null);
  };

  const handleDeleteSurvey = async (id) => {
    await deleteDoc(doc(db, "surveys", id));
    setSelectedSurvey(null);
  };

  const handleAddingNewSurveyToList = async (newSurveyData) => {
    const result = await addDoc(collection(db, "surveys"), newSurveyData);
    setFormVisibleOnPage(false);
  };

  const handleChangingSelectedSurvey = (id) => {
    const selection = mainSurveyList.filter(survey => survey.id === id)[0];
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
        onEditSurvey={handleEditingSurveyInList}

      />;
    buttonText = "Return to list";
  } else if (selectedSurvey != null) {
    currentlyVisibleState =
      <SurveyDetail
        survey={selectedSurvey}
        surveyAnswers={answersList}
        currentUserEmail={props.userEmail}
        onClickingSend={handleSendingSurvey}
        onClickingEdit={handleEditClick}
        onClickingDelete={handleDeleteSurvey} />;
    buttonText = "Return to list";
  } else if (formVisibleOnPage) {
    currentlyVisibleState =
      <NewSurvey
        onNewSurveyCreation={handleAddingNewSurveyToList}
        currentUserEmail={props.userEmail} />;
    buttonText = "Return to list";
  } else if (dashboardDisplay) {
    currentlyVisibleState =
      <DashBoard
        currentUserEmail={props.userEmail}
        mainList={mainSurveyList}
        onSurveySelection={handleChangingSelectedSurvey}
      />;
    buttonText = "Return to list";
  } else {
    currentlyVisibleState = <SurveyList
      onSurveySelection={handleChangingSelectedSurvey}
      surveyList={mainSurveyList}
      onDashboardClick={handleDashboardClick}
    // addQuestion={addQuestionToSurvey}
    />;
    buttonText = "New Survey";
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      {props.userEmail ? <button onClick={handleClick}>{buttonText}</button> : null}
    </React.Fragment>
  );
}

export default SurveyControl;