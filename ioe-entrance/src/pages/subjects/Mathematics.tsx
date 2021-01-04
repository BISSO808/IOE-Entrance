import React,{useEffect} from 'react'
import { connect } from 'react-redux';
import {} from '@ionic/react'
import {getQuestionBySubject} from '../../action/question'
const Mathematics=(props:any)=> {
    useEffect(() => {
    console.log(props.match.path.substring(1));
    getQuestionBySubject(props.match.path.substring(1));
      },[]);
    return (
        <div>
            <h1>Mathematics</h1>
        </div>
    )
}

const mapStateToProps=(state:any)=> ({

    })
export default connect(mapStateToProps,{getQuestionBySubject})(Mathematics)
