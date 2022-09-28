import React from 'react'
import { Button, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import Iconn from 'react-native-vector-icons/MaterialIcons'
import ICON from 'react-native-vector-icons/FontAwesome5'

import UserListView from './Lspatients'
import ProfileView from './Profiledoc'
import NotifcationDoc from './Notification';
import Supportscreen from './SupportDic';
import LspatientsStack from './LspateintsStack.js'


const Tab = createBottomTabNavigator();
const MainTabscreenDoc = () => {
    return(
        <Tab.Navigator
        initialRouteName="users"
        screenOptions={{
          headerShown:false,
          tabBarStyle: {backgroundColor : '#fff'},
          tabBarActiveTintColor:'#6c60d2'
        }} 
    >
      <Tab.Screen
        name="users"
        component={LspatientsStack}
        options={{
          tabBarLabel: 'doctor pateints',
          tabBarIcon: ({ color }) => (
            <ICON name="users" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Profile"
        component={ProfileView}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-person" color={color} size={size} />
          ),
        }}
      />
       
      <Tab.Screen
        name="Notification"
        component={NotifcationDoc}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-notifications" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name="About doctor"
        component={Supportscreen}
        options={{
          tabBarLabel: 'About doctor',
          tabBarIcon: ({ color, size }) => (
            <Iconn name="explore" color={color} size={size} />
          ),
        }}
      />
  
    </Tab.Navigator>
    )
}

export default MainTabscreenDoc;