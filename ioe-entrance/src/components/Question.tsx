import React from 'react'
import { connect } from 'react-redux'
import {IonCard, IonBadge, IonLabel, IonItem, IonText, IonCardSubtitle, IonCardTitle, IonCardContent} from '@ionic/react';
import './Question.css';

const Question = (props:any) => {
    return (
      <IonCard className="questioncard">
          <IonItem>
            <IonLabel>
              <IonText className="question">
                {props.question.details}
              </IonText>
              <br /><br/>
              <IonText className="answer">
              <IonBadge color="success">Answer</IonBadge>&nbsp;&nbsp;{props.question.answer}
              </IonText>
            </IonLabel>
          </IonItem>
      </IonCard>
  )
}

const mapStateToProps=(state:any)=>({
  questions : state.question.questions,

})

export default connect(mapStateToProps,{})(Question)
