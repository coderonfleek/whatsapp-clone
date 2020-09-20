import React, { useContext } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonAvatar,
  IonFooter,
  useIonViewWillLeave
} from "@ionic/react";

import { AppContext } from "../State";

const ChatPage = () => {
  const { state, dispatch } = useContext(AppContext);
  useIonViewWillLeave(() => {
    dispatch({
      type: "setNoTabs",
      payload: false
    });
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="login-bar">
          <IonAvatar
            slot="start"
            style={{ width: "40px", height: "40px", marginLeft: "10px" }}
          >
            <img src={state.chattingWith.avatar} alt="Profile" />
          </IonAvatar>
          <IonTitle>{state.chattingWith.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>Hey, Chat Page</IonContent>

      <IonFooter>
        <IonToolbar>
          <IonTitle>Footer</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default ChatPage;
