import React,{useEffect} from 'react'
import { connect } from 'react-redux';
import { IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton } from '@ionic/react'
const Details=(props:any)=> {
  return (
    <IonCard>
    <IonCardHeader>
      <IonCardTitle>{props.subject}</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
      Keep close to Nature's heart... and break clear away, once in awhile,
      and climb a mountain or spend a week in the woods. Wash your spirit clean.
    </IonCardContent>
    <IonButton>Study</IonButton>
    <IonButton>Test</IonButton>
  </IonCard>
  )
}

const mapStateToProps=(state:any)=> ({
    })
export default connect(mapStateToProps,{})(Details)
