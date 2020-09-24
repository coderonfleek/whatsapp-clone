import React, { useContext, useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonAvatar,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonButton,
  IonInput,
  useIonViewWillLeave
} from "@ionic/react";

import { AppContext } from "../State";
import db from "../FireStore";
import { sendSharp, happyOutline, linkOutline } from "ionicons/icons";

import Utility from "../Utility";

const ChatPage = () => {
  const { state, dispatch } = useContext(AppContext);
  const [message, setMessage] = useState();
  useIonViewWillLeave(() => {
    dispatch({
      type: "setNoTabs",
      payload: false
    });
  });

  const sendMessage = async () => {
    if (message) {
      let messageBody = {
        message_id: Utility.genRandom(),
        sent_by: state.user.user_id,
        channel: `${state.user.user_id},${state.chattingWith.user_id}`,
        type: "text",
        message: message,
        file_url: null,
        time: +Date.now()
      };

      const send_response = await db.collection("messages").add(messageBody);

      setMessage(null);
    }
  };

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
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonGrid>
                  <IonRow>
                    <IonCol size="2">
                      <IonIcon icon={happyOutline} size="large"></IonIcon>
                    </IonCol>
                    <IonCol>
                      <IonInput
                        value={message}
                        placeholder="Type a message"
                        onIonChange={(e) => setMessage(e.detail.value)}
                      ></IonInput>
                    </IonCol>
                    <IonCol size="2">
                      <IonIcon
                        icon={linkOutline}
                        size="large"
                        className="media-icon"
                      ></IonIcon>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCol>
              <IonCol size="2">
                <IonButton
                  className="chat-send-button"
                  onClick={() => sendMessage()}
                >
                  <IonIcon icon={sendSharp} size="large"></IonIcon>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default ChatPage;
