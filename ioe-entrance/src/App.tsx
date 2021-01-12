import React, { useEffect } from 'react';
import { Provider }  from 'react-redux'
import {store} from './store';
import {
  IonApp, IonContent,
} from '@ionic/react';
import Tabs from './components/Tabs'
import { IonReactRouter } from '@ionic/react-router';
import setAuthToken from './utils/setAuthToken';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import {loadUser} from './action/user';
/* Theme variables */
import './theme/variables.css';
if (localStorage.token) {
	setAuthToken(localStorage.token);
}
const App= () => {
  useEffect(() => {
   store.dispatch(loadUser());
    }, []);
  return (
  <Provider store={store}>
  <IonApp>
    <IonContent>
    <IonReactRouter>
      <Tabs />
    </IonReactRouter>
    </IonContent>
  </IonApp>
</Provider>
  )
  };

export default App;
