import React from "react";
import { createStackNavigator } from "react-navigation";

import FeedScreen from "../Screens/FeedScreen";
import FriendScreen from '../Screens/FriendScreen';
import FriendProfileScreen from '../Screens/FriendProfileScreen'
//import RecipeScreen from '../Screens/RecipeScreen';
import RecipeRouter from './RecipeRouter';
import ChatMessageScreen from '../Screens/ChatMessageScreen';

import ProfileScreen from "../Screens/ProfileScreen";

const FeedNavigator = createStackNavigator(
    {
        Feed: FeedScreen,
        Recipes: RecipeRouter,
        Friends: FriendScreen,
        Profile: ProfileScreen,
        FriendProfile: FriendProfileScreen,
        ChatMessage: ChatMessageScreen
    },
    {
        initialRouteName: 'Feed',
        headerMode: 'none'
    }
);
export default FeedNavigator;
