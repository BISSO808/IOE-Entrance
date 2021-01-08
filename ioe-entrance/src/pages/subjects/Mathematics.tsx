import React,{useEffect} from 'react'
import { connect } from 'react-redux';
import {} from '@ionic/react'
import {getQuestionBySubject} from '../../action/question'
const Mathematics=(props:any)=> {
    useEffect(() => {
    getQuestionBySubject(props.match.path.substring(1));
      },[]);
      return props.loading ? (
        <div>
            <h1>loading</h1>
        </div> ): (<div><h1>hey</h1></div>
    );
}

const mapStateToProps=(state:any)=> ({
loading:state.question.loading

    })
export default connect(mapStateToProps,{getQuestionBySubject})(Mathematics)
