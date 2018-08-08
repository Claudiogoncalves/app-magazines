import React, { Component } from 'react';
import './config/ReactotronConfig';

import * as firebase from 'firebase';
import Routes from './src/routes';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA5lPo8KZtZxE2n9pbh4YdAEXUXWRnMAKI',
      authDomain: 'app-magazine.firebaseapp.com',
      databaseURL: 'https://app-magazine.firebaseio.com',
      projectId: 'app-magazine',
      storageBucket: 'app-magazine.appspot.com',
      messagingSenderId: '956238833880',
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Routes />
    );
  }
}

