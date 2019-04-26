import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";


import SignInRouter from '../routers/SignInRouter';
import AppRouter from '../routers/AppRouter';



const StartUpNavigator = createStackNavigator(
    {
        SignInRouter,
        AppRouter
        
        
    },
    {
        initialRouteName: 'SignInRouter',
        headerMode: 'none'
    }
);
export default createAppContainer(StartUpNavigator);