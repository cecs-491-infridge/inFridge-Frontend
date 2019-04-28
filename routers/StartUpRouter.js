import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import StartUpScreen from '../Screens/StartUpScreen';
import SignInRouter from './SignInRouter';
import AppRouter from './AppRouter';

const StartUpNavigator = createStackNavigator(
    {
        StartUpScreen,
        SignInRouter,
        AppRouter
    },
    {
        initialRouteName: 'StartUpScreen',
        headerMode: 'none'
    }
);
export default createAppContainer(StartUpNavigator);