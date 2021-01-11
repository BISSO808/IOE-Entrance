import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs
  } from '@ionic/react';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from '../pages/Tab1';
import Tab2 from '../pages/Tab2';
import Tab3 from '../pages/Tab3';
import Login from '../pages/Login';
import Mathematics from '../pages/subjects/Mathematics';
import Physics from '../pages/subjects/Physics';
import Chemistry from '../pages/subjects/Chemistry';
import English from '../pages/subjects/English';
const Tabs=(props:any)=>{ 
    return (  
  <IonTabs>
    <IonRouterOutlet>
      <Route path="/tab1" component={Tab1} exact={true} />
      <Route path="/tab2" component={Tab2} exact={true} />
      <Route path="/tab2" component={Tab2} exact={true} />
      <Route path="/Mathematics" component={Mathematics} exact={true} />
      <Route path="/Physics" component={Physics} exact={true} />
      <Route path="/English" component={English} exact={true} />
      <Route path="/Chemistry" component={Chemistry} exact={true} />
      <Route path="/login" component={Login} />
      <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
    </IonRouterOutlet>
    {props.isAutheticated && !props.loading ?
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar> : <IonTabBar>
            </IonTabBar>}
  </IonTabs>
  );
};


const mapStateToProps=(state:any)=> ({
    isAutheticated:state.auth.isAuthenticated,
    loading:state.auth.loading
    })

export default connect(mapStateToProps, {})(Tabs);
