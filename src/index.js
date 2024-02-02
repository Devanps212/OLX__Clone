import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './store/firebaseContext'
import Firebase from './firebase/config';
import {Context} from './store/firebaseContext'


ReactDOM.render(
<FirebaseContext.Provider value={Firebase}>
    <Context>
        <App />
    </Context>
</FirebaseContext.Provider>
, document.getElementById('root'));
