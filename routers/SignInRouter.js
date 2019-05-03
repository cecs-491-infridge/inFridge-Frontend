import React from "react";
import { createStackNavigator } from "react-navigation";

import Signin from "../Screens/SignInScreen";
import Signup from "../Screens/SignUpScreen";


const SignInNavigator = createStackNavigator(
    {
        SignIn: Signin,
        SignUp: Signup
        
        
    },
    {
        initialRouteName: 'SignIn',
        headerMode: 'none'
    }
);
export default SignInNavigator;