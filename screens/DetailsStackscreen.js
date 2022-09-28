import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'
const DetailsStack = createStackNavigator()
import NotificationsScreen from './DetailsScreen'

const DetailsStackScreen = ({navigation}) => {
  return (
    <DetailsStack.Navigator screenOptions={{headerStyle:{
      backgroundColor : '#1f65ff'
    },
    headerTintColor : '#ffff',
    headerBackTitleStyle : {
      fontWeight : 'bold',
      textAlign : 'center',
    
  
    }}}>
      <DetailsStack.Screen name='Details' component={NotificationsScreen} options={{
        title:'Details',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
    </DetailsStack.Navigator>

  )
    
  }
  export default DetailsStackScreen;