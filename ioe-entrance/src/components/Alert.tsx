import React from 'react';
import {IonLabel, IonCard, IonItem } from '@ionic/react';
const Alert = (props:any) => {
  console.log(props);
  console.log(props.alert);
    return (
      props.alert!= null ? props.alert.map((alert:any) =>
      (<IonCard>
        <IonItem>
        <IonLabel color={alert.type}>{alert.msg}</IonLabel>
        </IonItem>
        </IonCard>
        )
      ):<p></p>);
      }
export default Alert;