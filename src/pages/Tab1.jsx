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
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

import { AppContext } from "../State";

const Tab1 = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <IonPage>
      <IonContent className="chat-screen">
        <IonList>
          <IonItem>
            <IonAvatar slot="start">
              <img
                src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0="
                alt="icon"
              />
            </IonAvatar>
            <IonLabel>
              <h2>Han</h2>
              <p>I've got enough on my plate as it is, and I...</p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
