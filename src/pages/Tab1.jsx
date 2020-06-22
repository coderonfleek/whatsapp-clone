import React, { useContext } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel
} from "@ionic/react";
import ChatItem from "../components/ChatItem";
import "./Tab1.css";

import { AppContext } from "../State";

const Tab1 = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <IonPage>
      <IonContent className="chat-screen">
        <IonList>
          {state.user.contacts.map((contact) => (
            <ChatItem contact={contact} key={contact.user_id} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
