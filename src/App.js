import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as firebase from 'firebase'
import thunk from 'redux-thunk';

import AuthOrApp from './AuthOrApp';
import reducers from './reducers';
import { config_firebase } from './env'


var config = config_firebase // <- passar aqui seu objeto config do firebase
firebase.initializeApp(config)

const store = applyMiddleware(thunk)(createStore)(reducers)

export default props => (
    <Provider store={store}>
        <AuthOrApp />
    </Provider>
);