import firebase from "firebase";

const db = firebase
  .initializeApp({
    projectId: "whatsapp-clone-2d48b",
    databaseURL: "https://whatsapp-clone-2d48b.firebaseio.com"
  })
  .firestore();

export default db;
