import React ,{useState}from 'react';
import {IonPage, IonImg, IonContent, IonCardHeader, IonText,IonIcon, IonInput, IonItem ,IonCardContent, IonButton, IonCardSubtitle} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
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
      <div className="button"><IonButton className="button" href="login">Login</IonButton></div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
