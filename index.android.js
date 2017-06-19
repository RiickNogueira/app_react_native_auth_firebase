import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';

const app = props => (
  <App />
)

AppRegistry.registerComponent('app_react_native_auth_firebase', () => app);
