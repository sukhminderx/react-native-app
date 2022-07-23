 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import {  
   Text
 } from 'react-native';
import HomeNavigator from './HomeNavigator';
 
const AppNavContainer = () => {
   return (
     <NavigationContainer>       
         <HomeNavigator></HomeNavigator>
     </NavigationContainer>
   );
 };
 
 export default AppNavContainer;
 
 /*
  screens > home > drawer
  screens> auth
 */