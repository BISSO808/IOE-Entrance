import React from 'react';
import {IonPage, IonImg, IonContent, IonGrid, IonCol, IonRow, IonText, IonButton} from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage color="primary">
      <IonContent fullscreen>
      <IonText className="title">
        <p>IOE ENTRANCE</p>
      </IonText>
      <IonImg class="logo" src='assets/icon/ioe.png'></IonImg>
      <IonText className="info">
        <p>This is a collection of questions for you to ace the IOE Entrance exam.</p>
      </IonText>
      <IonGrid>
      <IonRow>
        <IonCol><div className="button"><IonButton className="button" href="login">Login</IonButton></div></IonCol>
        <IonCol><div className="button"><IonButton className="button" href="#">SignUp</IonButton></div></IonCol>
      </IonRow>
      </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
