import React from 'react';
import { connect } from 'react-redux'
import { IonContent,IonText, IonPage, IonGrid,IonRow, IonCol,IonAvatar} from '@ionic/react';
import Subjects from './dashboard/Subjects'
import './Tab2.css';

const Tab2: React.FC = () => {
  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'English'];
  return (
    <IonPage>
      <IonContent fullscreen>
      <IonGrid>
        <IonRow>
          <IonCol>
      <IonText className="cardtext">Hello, Bishwa</IonText>
    </IonCol>
    <IonCol></IonCol>
    <IonCol>
    <IonAvatar>
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
    </IonAvatar>
      </IonCol>
      </IonRow>
      </IonGrid>
      <Subjects subjects={subjects}></Subjects>
      </IonContent>
    </IonPage>
  );
};

const mapStateToProps=(state:any)=>({
name: state.auth.name
})

export default connect(mapStateToProps, {})(Tab2);
