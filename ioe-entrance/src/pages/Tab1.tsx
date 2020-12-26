import React ,{useState}from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAlert ,IonButton} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage color="primary">
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonButton href="login">Anchor</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
