import React from 'react'
import { connect } from 'react-redux';
import { IonItem, IonLabel, IonText, IonCard, IonCardHeader, IonCardTitle, IonCardContent} from '@ionic/react'
const Details=(props:any)=> {
  const myArray:any = {Mathematics: "50"}
  const index = props.subject;
  return (
    <div>
    <IonCard>
    <IonCardHeader>
      <IonCardTitle>{props.subject}</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
      Content Weight : {myArray[index]}
    </IonCardContent>
  </IonCard>
   <IonCard className="maincard">
   <IonItem>
     <IonLabel><IonText className="text">Learn</IonText></IonLabel>
   </IonItem>
 </IonCard>
 <IonCard className="maincard">
   <IonItem>
     <IonLabel><IonText className="text">Test</IonText></IonLabel>
   </IonItem>
 </IonCard>
 </div>
  )
}

const mapStateToProps=(state:any)=> ({
    })
export default connect(mapStateToProps,{})(Details)
