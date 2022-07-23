import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
    CONTACT_DETAIL,
    CONTACT_LIST,
    CREATE_CONTACT,
    LOGOUT,
    SETTINGS,
  } from '../constants/routeNames';
import Contacts from '../screens/Contacts';
import ContactDetails from '../screens/ContactDetails';
import CreateContact from '../screens/CreateContact';
import Settings from '../screens/Settings';
import Logout from '../screens/Logout';

const HomeNavigator = () => {
    const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
        <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
        <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetails} />
        <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
        <HomeStack.Screen name={SETTINGS} component={Settings} />
        <HomeStack.Screen name={LOGOUT} component={Logout} />
  </HomeStack.Navigator>
  );
};

export default HomeNavigator;
