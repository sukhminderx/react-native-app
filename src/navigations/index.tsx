 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
 
const AppNavContainer = () => {
  const isAuthenticated = true;
   return (
     <NavigationContainer>       
        {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
     </NavigationContainer>
   );
 };
 
 export default AppNavContainer;
 
 /*
  screens > home > drawer
  screens> auth
 */