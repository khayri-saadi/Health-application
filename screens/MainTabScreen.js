import React from 'react'
import { Button, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import Iconn from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStackScreen from './HomeStackscreen'
import NotificationsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import Chat from './Bookmark';
const Tab = createBottomTabNavigator();
const MainTabscreen = () => {
    return(
        <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown:false,
        tabBarStyle: {backgroundColor : '#fff'},
        tabBarActiveTintColor:'#6c60d2'
        }} 
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Explore"
        component={Chat}
        options={{
          tabBarLabel: 'Discussion',
          tabBarIcon: ({ color, size }) => (
            <Icon1 name="android-messages" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-person" color={color} size={size} />
          ),
        }}
      />
      
  
    </Tab.Navigator>
    )
}

export default MainTabscreen;