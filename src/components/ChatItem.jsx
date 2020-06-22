import React from "react";

import { IonItem, IonAvatar, IonLabel } from "@ionic/react";

const ChatItem = ({ contact }) => {
  let profile_image =
    contact.avatar ||
    "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=";

  return (
    <IonItem>
      <IonAvatar slot="start">
        <img
          src="https://www.dropbox.com/sh/t9iqfzj390fspy3/AAAKkyjggyQT-suQvrphPqJba?dl=0&preview=adam-traore.png"
          alt="icon"
        />
      </IonAvatar>
      <IonLabel>
        <h2>{contact.name}</h2>
        <p>I've got enough on my plate as it is, and I...</p>
      </IonLabel>
    </IonItem>
  );
};

export default ChatItem;
