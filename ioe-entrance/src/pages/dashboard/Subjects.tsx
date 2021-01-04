import React from 'react'
import {IonCard, IonLabel, IonItem, IonText} from '@ionic/react';
import './Subjects.css'
import { NavLink } from 'react-router-dom';
const Subjects = (props:any) => {
    return (
      props.subjects.map((subject:any)=>{
      return(
      <IonCard className="maincard" href={subject}>
        <IonItem>
          <IonLabel><IonText className="text">{subject}</IonText></IonLabel>
        </IonItem>
      </IonCard>
      )
      }
    )
    )
}

export default (Subjects)
