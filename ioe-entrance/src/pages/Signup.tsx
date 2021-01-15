import React, { useState} from 'react'
import { connect } from 'react-redux';
import { IonCard, IonContent, IonCardHeader, IonText, IonInput, IonItem ,IonCardContent, IonButton} from '@ionic/react';
import {Redirect} from "react-router-dom";
import './Signup.css';
import {signup} from '../action/auth';
import Alert from '../components/Alert';

const Signup=(props:any)=> {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();
    const Submit=()=>{
       signup(name, email, password);
    }
    if(props.isAutheticated){
        return <Redirect to="/login"></Redirect>
    }
    return (
        <IonContent color="primary">
            <IonCard className="card">
                <IonCardHeader>
                <IonText className="title">
                    <p>IOE ENTRANCE</p>
                    </IonText>
                    <IonText className="heading">
                    <p>SIGN UP</p>
                    </IonText>
                    
                </IonCardHeader>
                <Alert alert={props.alert}/>
                <IonCardContent>
                <IonItem className="input">
                        <IonInput value={name} placeholder="Name" onIonChange={e => setName(e.detail.value!)}></IonInput>
                    </IonItem>
                    <div className="bottom"></div>
                    <IonItem className="input">
                        <IonInput value={email} placeholder="Email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
                    </IonItem>
                    <div className="bottom"></div>
                    <IonItem className="input">
                        <IonInput value={password} type="password" placeholder="Password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
                    </IonItem>
                    <div className="bottom"></div>
                    <IonItem className="input">
                        <IonInput value={confirmPassword} type="password" placeholder="Confirm Password" onIonChange={e => setConfirmPassword(e.detail.value!)}></IonInput>
                    </IonItem>
                    <div className="bottom"></div>
                    <IonButton className="button" shape="round" color="secondary" onClick={Submit}>Sign Up</IonButton>
                    
                </IonCardContent>
            </IonCard>
        </IonContent>
    )
}

const mapStateToProps=(state:any)=> ({
alert:state.alert,
isAutheticated:state.auth.isAuthenticated
})

Signup.propTypes = {

}

export default connect(mapStateToProps, {signup})(Signup)

