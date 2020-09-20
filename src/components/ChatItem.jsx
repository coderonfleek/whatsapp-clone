import React, { useContext } from "react";

import {
  IonItem,
  IonAvatar,
  IonLabel,
  useIonViewWillLeave
} from "@ionic/react";

import { AppContext } from "../State";
import { useHistory } from "react-router";

const ChatItem = ({ contact }) => {
  const { state, dispatch } = useContext(AppContext);
  let history = useHistory();

  let profile_image =
    contact.avatar ||
    "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=";

  const goToChat = () => {
    dispatch({
      type: "setNoTabs",
      payload: true
    });

    dispatch({
      type: "setChattingWith",
      payload: contact
    });

    history.push("/chatpage");
  };
  return (
    <IonItem onClick={() => goToChat()}>
      <IonAvatar slot="start">
        <img src={profile_image} alt="icon" />
      </IonAvatar>
      <IonLabel>
        <h2>{contact.name}</h2>
        <p>I've got enough on my plate as it is, and I...</p>
      </IonLabel>
    </IonItem>
  );
};

export default ChatItem;
