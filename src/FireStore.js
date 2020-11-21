import firebase from "firebase";

const db = firebase
  .initializeApp({
    projectId: "YOUR_PROJECT_ID",
    databaseURL: "YOUR_DB_URL"
  })
  .firestore();

export default db;
