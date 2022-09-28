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
      backgroundColor : '#70b5f9'
    },
    headerTintColor : '#ffff',
    headerBackTitleStyle : {
      fontWeight : 'bold',
      textAlign : 'center',
      },
      }}
      >
      <HomeStack.Screen name='home' component={HomeScreen}  options={{
        title:'',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#70b5f9" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }}/> 
        <HomeStack.Screen  name='Device' component={DeviceScreen}/>
    </HomeStack.Navigator>
  )}
    
  export default HomeStackScreen;