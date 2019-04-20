import React from "react";
import { createStackNavigator } from "react-navigation";

import FeedScreen from "../Screens/FeedScreen";
import FriendScreen from '../Screens/FriendScreen';
import RecipeScreen from '../Screens/RecipeScreen';
import ProfileScreen from "../Screens/ProfileScreen";

const FeedNavigator = createStackNavigator(
    {
        Feed: FeedScreen,
        Friends: FriendScreen,
        Profile: ProfileScreen,
        Recipes: RecipeScreen,
    },
    {
        intitialRouteName: 'Feed',
        headerMode: 'none'
    }
);
export default FeedNavigator;