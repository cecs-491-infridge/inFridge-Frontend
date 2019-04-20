import React from "react";
import { createStackNavigator } from "react-navigation";

import MessageScreen from "../Screens/MessageScreen";
import ChatMessageScreen from '../Screens/ChatMessageScreen';

const ChatNavigator = createStackNavigator(
    {
        ChatHome: MessageScreen,
        ChatMessage: ChatMessageScreen
    },
    {
        intitialRouteName: 'ChatHome',
        headerMode: 'none'
    }
);
export default ChatNavigator;