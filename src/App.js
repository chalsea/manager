import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDpAh3r9YiAr2Ghw9LGvBpBqNS36YdJGRY',
      authDomain: 'manager-72719.firebaseapp.com',
      databaseURL: 'https://manager-72719.firebaseio.com',
      storageBucket: 'manager-72719.appspot.com',
      messagingSenderId: '1000514972885'
  };

  firebase.initializeApp(config);
}

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
