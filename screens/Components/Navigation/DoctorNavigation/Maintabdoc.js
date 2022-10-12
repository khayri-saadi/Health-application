import React from 'react'
import { Button, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import Iconn from 'react-native-vector-icons/MaterialIcons'
import ICON from 'react-native-vector-icons/FontAwesome5'
import Icon1 from 'react-native-vector-icons/Fontisto'

import UserListView from './Lspatients'
import ProfileView from './Profiledoc'
import NotifcationDoc from './MessageScreen';
import Supportscreen from './MessagesScreen';
import LspatientsStack from './LspateintsStack.js'
import ProfileStack from './profileScreenStack';
import MessageStack from './MessageStackscreen';


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
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <ICON name="users" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-person" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name="About doctor"
        component={MessageStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon1 name="messenger" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}

export default MainTabscreenDoc;