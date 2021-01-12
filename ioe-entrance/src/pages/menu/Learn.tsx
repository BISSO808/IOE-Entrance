import React from 'react'
import { connect } from 'react-redux'
import Question from '../../components/Question';
import {IonCard, IonLabel, IonItem, IonText} from '@ionic/react';
const Learn = (props:any) => {
  return (
    <div>
    { props.questions != null && props.questions.length > 0 && props.questions.map((question:any)=>
      <div>
      <Question question={question}/>
      </div>
      ) 
    }
  </div>
  )
}

const mapStateToProps=(state:any)=>({
  questions : state.question.questions,

})

Learn.propTypes = {

}
export default connect(mapStateToProps,{})(Learn)
