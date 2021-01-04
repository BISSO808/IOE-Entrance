import React, { useState} from 'react'
import { connect } from 'react-redux';
import { IonCard, IonContent, IonCardHeader, IonText,IonIcon, IonInput, IonItem ,IonCardContent, IonButton, IonCardSubtitle} from '@ionic/react';
import PropTypes from 'prop-types'
import {Redirect} from "react-router-dom";
import { logoFacebook, logoGoogle } from 'ionicons/icons';
import './Login.css'
import {login} from '../action/auth';
import Alert from '../components/Alert';

const Login=(props:any)=> {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const Submit=()=>{
       login(email, password);
    }
    if(props.isAutheticated){
        return <Redirect to="/tab2"></Redirect>
    }
    return (
        <IonContent color="primary">
            <IonCard className="card">
                <IonCardHeader>
                <IonText className="title">
                    <p>IOE ENTRANCE</p>
                    </IonText>
                    <IonText className="heading">
                    <p>LOG IN</p>
                    </IonText>
                    <IonCardSubtitle><p>Login to your account.</p></IonCardSubtitle>
                </IonCardHeader>
                <Alert alert={props.alert}/>
                <IonCardContent>
                    <IonItem className="input">
                        <IonInput value={email} placeholder="Email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
                    </IonItem>
                    <div className="bottom"></div>
                    <IonItem className="input">
                        <IonInput value={password} type="password" placeholder="Password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
                    </IonItem>
                    <div className="bottom"></div>
                    <IonButton className="button" shape="round" color="secondary" onClick={Submit}>Log in</IonButton>
                    <IonButton className="facebook">
                        Log in with facebook<IonIcon icon={logoFacebook} slot="start"></IonIcon>
                    </IonButton>
                    <br/>
                    <IonButton className="bottom">
                        Log in with Gmail<IonIcon icon={logoGoogle} slot="start"></IonIcon>
                    </IonButton>
                </IonCardContent>
            </IonCard>
        </IonContent>
    )
}

const mapStateToProps=(state:any)=> ({
alert:state.alert,
isAutheticated:state.auth.isAuthenticated
})

Login.propTypes = {

}

export default connect(mapStateToProps, {login})(Login)

