import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
