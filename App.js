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
import FridgeScreen from './Screens/FridgeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import configureStore from './store/configureStore';
import { startSetFeed } from './actions/feed';
import { startSetFood } from './actions/fridge';
import { startSetFriends } from './actions/friends';
import { startSetTransactions } from './actions/transactions';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


const store = configureStore();


const AppNavigator = createMaterialBottomTabNavigator({
  //export default createMaterialBottomTabNavigator({
  //SignIn: { screen: SignInScreen },
  Feed: { screen: FeedScreen },
  Fridge: {screen: FridgeScreen},
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
}, {
  initialRouteName: 'Home',
  activeColor: '#f0edf6',
  inactiveColor: '#f0edf6',
  barStyle: { backgroundColor: '#3498db' }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      screenState: 0
    };
  }

  componentDidMount(){
    Promise.all([
      // store.dispatch(startSetFeed),
      store.dispatch(startSetFood()),
      // store.dispatch(startSetFriends),
      store.dispatch(startSetTransactions())
    ])
    .then(() => {
      this.setState({ screenState: 2 });
    });
  }

  render() {
    let jsx;
    if (this.state.screenState === 0) jsx = <Text>Loading...</Text>
    if (this.state.screenState === 1) jsx = <Text>Loading...</Text>
    if (this.state.screenState === 2) jsx = <AppContainer/>
    return(
      <Provider store={store}>
        {jsx}
      </Provider>
    )
  }
}
