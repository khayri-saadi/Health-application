import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'
import  {HomeScreen} from '../src/screens/Home.tsx'
import  {DeviceScreen} from '../src/screens/Device.tsx'
import {useTheme} from '@react-navigation/native'

const HomeStack = createNativeStackNavigator()
const HomeStackScreen = ({navigation}) => {
  const {colors} =  useTheme()
  return(
    <HomeStack.Navigator   screenOptions={{headerStyle:{
      backgroundColor : '#fff'
    },
    headerTintColor : '#000',
    headerBackTitleStyle : {
      fontWeight : 'bold',
      textAlign : 'center',
      },
      }}
      >
      <HomeStack.Screen name='home' component={HomeScreen}  options={{
        title:'Scan devices',
      headerTitleAlign: 'center',
      headerTitleStyle:{fontWeight:'bold',fontSize:22}
        }}/> 
        <HomeStack.Screen  name='Device' component={DeviceScreen}/>
    </HomeStack.Navigator>
  )}
    
  export default HomeStackScreen;