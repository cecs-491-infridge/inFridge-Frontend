/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
import { Text } from 'native-base';
import SignInRouter from './routers/SignInRouter';
// Used to Provide Redux store to all child components
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';

import Loading from './components/Loading';

import { persistor, store } from './store/configureStore';

import StartUpRouter from './routers/StartUpRouter';

// const store = configureStore();

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('About to render')
    return (
      <Provider store={store}>
        <PersistGate
          loading={<Loading/>}
          persistor={persistor}
        >
          <StartUpRouter/>
        </PersistGate>
      </Provider>
    )
  }
}
