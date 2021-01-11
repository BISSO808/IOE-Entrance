import React,{useEffect} from 'react'
import { connect } from 'react-redux';
import { IonContent } from '@ionic/react'
import {getQuestionBySubject} from '../../action/question'
import Details from '../board/Details'
const Physics=(props:any)=> {
    useEffect(() => {
    // getQuestionBySubject(props.match.path.substring(1));
      },[]);
      return (
        <IonContent>
            <Details subject= {props.match.path.substring(1)}/>
        </IonContent>
    );
}

const mapStateToProps=(state:any)=> ({
loading:state.question.loading

    })
export default connect(mapStateToProps,{getQuestionBySubject})(Physics)
