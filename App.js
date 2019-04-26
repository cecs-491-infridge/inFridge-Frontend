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
import AppRouter from './routers/AppRouter';
// Used to Provide Redux store to all child components
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';

import { persistor, store } from './store/configureStore';

// Actions
import { startSetFeed } from './actions/feed';
import { startSetFood } from './actions/fridge';
import { startSetFriends } from './actions/friends';
import { startSetTransactions } from './actions/transactions';

// const store = configureStore();

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screenState: 0
    };
  }

  componentDidMount() {
    Promise.all([
      // store.dispatch(startSetFeed),
      store.dispatch(startSetTransactions()),
      store.dispatch(startSetFood()),
      // store.dispatch(startSetFriends),
    ])
      .then(() => {
        this.setState({ screenState: 2 });
        console.log(store);
      });
  }

  getApp(screenState) {
    switch(screenState) {
      case 0:
        return <Text>Loading...</Text>

      case 1:
        return <Text>Loading...</Text>

      case 2:
      console.log(store)
      return <AppRouter/>

      default:
        console.log('Invalid screenState value')
        return <Text>Loading...</Text>
    }
  }

  render() {
    let jsx = this.getApp(this.state.screenState);
    console.log('About to render')
    return (
      <Provider store={store}>
<<<<<<< HEAD
		{store.userInfo.userId}
        {jsx}
=======
        <PersistGate loading={this.getApp(0)} persistor={persistor}>
          {jsx}
        </PersistGate>
>>>>>>> daniel
      </Provider>
    )
  }
}
