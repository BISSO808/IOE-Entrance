import React, {useEffect} from 'react';
import {loadUser} from '../action/user';
import {store} from  '../store'
import { connect } from 'react-redux'
import { IonContent,IonText, IonPage, IonGrid,IonRow, IonCol,IonAvatar,useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave} from '@ionic/react';
import Subjects from './dashboard/Subjects'
import './Tab2.css';

const Tab2 = (props:any) => {
  useEffect(() => {
    props.loadUser()
 console.log(props)
 console.log(props.isAuthenticated)
  }, [])
  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'English'];
  return (
    <IonPage>
      <IonContent fullscreen>
      <IonGrid>
        <IonRow>
          <IonCol>
            {(!props.loading) && props.isAuthenticated ? 
      <IonText className="cardtext">Hello, {props.name}</IonText>
          :<h1>lol</h1>  }
      </IonCol>
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
 name: state.user.user.name,
  loading:state.user.loading,
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {loadUser})(Tab2);
