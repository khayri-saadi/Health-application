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
            backgroundColor : '#fff',
            shadowColor: ('#000'),
          },
          headerTintColor : '#000',
          headerBackTitleStyle : {
            fontWeight : 'bold',
            textAlign : 'center',
            },
            }}>
            <List.Screen name='list' component={UserListView}  options={{
        title:'Patient list',
        headerTitleAlign:'center',
       
        }}/>
        <List.Screen name='message' component={DiscussionDoc}  options={({route})=> ({
                title:route.params.name,
                headerBackTitleStyle:false
            })} />
        <List.Screen name='data' component={DataDoc} options={{title:'data history',headerTitleAlign: ('center') }} />


        </List.Navigator>

    )
}

export default LspatientsStack