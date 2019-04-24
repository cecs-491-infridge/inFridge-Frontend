import React from "react";
import { createStackNavigator } from "react-navigation";

import RecipeScreen from "../Screens/RecipeScreen";
import SpecificRecipeScreen from '../Screens/SpecificRecipeScreen';
import SearchRecipeTab from "../components/SearchRecipeTab";
import RecRecipeTab from "../components/RecRecipeTab";
import RecipeComponent from "../components/Recipe";

const RecipeNavigator = createStackNavigator(
    {
        RecipeHome: RecipeScreen,
        SearchRecipe: SearchRecipeTab,
        RecRecipe: RecRecipeTab,
        RecipeComp: RecipeComponent,
        SpecificRecipe: SpecificRecipeScreen
        
    },
    {
        initialRouteName: 'RecipeHome',
        headerMode: 'none'
    }
);
export default RecipeNavigator;