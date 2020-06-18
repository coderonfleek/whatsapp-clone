import React, { useState, useContext } from "react";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonInput,
  IonButton,
  IonLoading
} from "@ionic/react";

import "./App.css";

import db from "./FireStore";
import { AppContext } from "./State";

const Login = () => {
  const [passcode, setPasscode] = useState();
  const [showLoading = false, setShowLoading] = useState();

  const { dispatch } = useContext(AppContext);

  const login = async () => {
    setShowLoading(true);
    let user;
    const fetchUser = await db
      .collection("users")
      .where("passcode", "==", passcode)
      .get();

    fetchUser.forEach((doc) => {
      user = doc.data();
      user.id = doc.id;
      console.log(user);
    });

    console.log(user);

    dispatch({
      type: "loadUser",
      payload: { user }
    });

    setShowLoading(false);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="login-bar">
          <IonTitle>Two-step Verification</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="passcode-text">
          Enter a four digit passcode which you'll be asked for when you
          register your phone number with WhatsApp:
        </div>

        <div className="passcode-input-section">
          <IonItem className="passcode-input">
            <IonInput
              value={passcode}
              onIonChange={(e) => setPasscode(e.detail.value)}
              clearInput
            ></IonInput>
          </IonItem>
        </div>

        <IonButton className="login-button" onClick={() => login()}>
          Login
        </IonButton>

        <IonLoading
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Please wait..."}
          duration={5000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
