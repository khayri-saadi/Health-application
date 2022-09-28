import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import UserListView from './Lspatients'
import DiscussionDoc from './DiscussionDoc';
import DataDoc  from './dataDoc';
import Icon from 'react-native-vector-icons/Ionicons'
const List = createStackNavigator()
const LspatientsStack = ({navigation})=> {
    return(
        <List.Navigator screenOptions={{headerStyle:{
            backgroundColor : '#70b5f9'
          },
          headerTintColor : '#ffff',
          headerBackTitleStyle : {
            fontWeight : 'bold',
            textAlign : 'center',
            },
            }}>
            <List.Screen name='list' component={UserListView}  options={{
        title:'Patient list',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#70b5f9" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }}/>
        <List.Screen name='message' component={DiscussionDoc} />
        <List.Screen name='data' component={DataDoc} />


        </List.Navigator>

    )
}

export default LspatientsStack