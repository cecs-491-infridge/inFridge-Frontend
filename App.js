/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
// Used to Provide Redux store to all child components
import { Provider } from 'react-redux'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignInScreen from './Screens/SignInScreen';
import HomeScreen from './Screens/HomeScreen';
import FeedScreen from './Screens/FeedScreen';
import MessageScreen from './Screens/MessageScreen';
import FridgeScreen from './Screens/FridgeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import RecipeScreen from './Screens/RecipeScreen';
import Message from './Screens/ChatScreen';
import SignUpScreen from './Screens/SignUpScreen';
import configureStore from './store/configureStore';
import { startSetFeed } from './actions/feed';
import { startSetFood } from './actions/fridge';
import { startSetFriends } from './actions/friends';
import { startSetTransactions } from './actions/transactions';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Text, Icon } from 'native-base';
import SpecificRecipeScreen from './Screens/SpecificRecipeScreen';

const store = configureStore();

const AppNavigator = createMaterialBottomTabNavigator({
  //export default createMaterialBottomTabNavigator({
  //SignIn: { screen: SignInScreen },
  Feed: {
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icon
          // type="MaterialCommunityIcons"
          name="home"
          size={24}
        />
      )
    }),
    screen: FeedScreen,
    gesturesEnabled: false,
  },
  Fridge: {
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icon
          type="MaterialCommunityIcons"
          name="fridge"
          size={24}
        />
      )
    }),
    screen: FridgeScreen
  },
  Message: {
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icon
          type="MaterialCommunityIcons"
          name="message"
          size={24}
        />
      )
    }),
    screen: MessageScreen
  },
  Profile: {
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icon
          type="MaterialCommunityIcons"
          name="account"
          size={24}
        />
      )
    }),
    screen: ProfileScreen
  },
}, {
  tabBarOptions:{
    activeTintColor: '#F8F8F8', // active icon color
    inactiveTintColor: '#586589',  // inactive icon color
    style: {
        backgroundColor: '#171F33' // TabBar background
    }
  },
    initialRouteName: 'Feed',
    activeColor: '#3498db',
    inactiveColor: '#34495e',
    barStyle: { backgroundColor: '#f0edf6' },
    shifting: false
  });

const AppContainer = createAppContainer(AppNavigator);

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
    if (this.state.screenState === 2) jsx = <AppContainer />
    return (
      <Provider store={store}>
        {jsx}
      </Provider>
    )
  }
}
