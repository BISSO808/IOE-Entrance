import React, { useState} from 'react'
import { IonCard, IonContent, IonCardHeader, IonText, IonInput, IonItem ,IonCardContent, IonButton, IonCardSubtitle} from '@ionic/react';
import PropTypes from 'prop-types'
import './Login.css'
import {login} from '../action/auth';

const Login=()=> {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const Submit=()=>{
       login(email, password);
    }
    return (
      <IonContent color="primary">
         <IonCard>
            <IonCardHeader>
                <IonText className="heading">
                <p>IOE PREP</p>
                </IonText>
                <IonCardSubtitle><p>Login to your account.</p></IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                <IonItem>
                    <IonInput value={email} placeholder="Email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput value={password} type="password" placeholder="Password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
                </IonItem>
                <IonButton expand="full" color="secondary" onClick={Submit}>Log in</IonButton>
            </IonCardContent>
         </IonCard>
      </IonContent>
    )
}

Login.propTypes = {

}

export default Login

