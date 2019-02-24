/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { Text, View } from 'react-native';
// Used to Provide Redux store to all child components
import { Provider } from 'react-redux'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import NavBar from './components/NavBar';
import SignInScreen from './Screens/SignInScreen';
import HomeScreen from './Screens/HomeScreen';
import FeedScreen from './Screens/FeedScreen';
import configureStore from './store/configureStore';
import { startSetFeed } from './actions/feed';
import { startSetFriends } from './actions/friends';
import { startSetTransactions } from './actions/transactions';

const store = configureStore();

const AppNavigator = createStackNavigator(
  {
    SignIn: SignInScreen,
    Home: HomeScreen,
    Feed: FeedScreen
  },
  {
    initialRouteName: 'SignIn'
  }
);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      finishedLoading: false
    };
  }

  componentDidMount(){
    Promise.all([
      // store.dispatch(startSetFeed),
      // store.dispatch(startSetFriends),
      store.dispatch(startSetTransactions())
    ])
    .then(() => {
      this.setState({ finishedLoading: true });
    });
  }

  render() {

    return this.state.finishedLoading ?
      (
        <Provider store={store}>
          <AppContainer/>
          {/* <NavBar/> */}
        </Provider>
      )
      : <Text>Loading...</Text>;
  }
}
