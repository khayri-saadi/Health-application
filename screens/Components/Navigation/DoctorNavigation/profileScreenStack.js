import React from 'react'
import {Text,View} from 'react-native'
import ProfileView from './Profiledoc'
import {createStackNavigator} from '@react-navigation/stack';
import EditProfile from './EditProfile';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
const Profile = createStackNavigator()
const ProfileStack = ({navigation})=>  {
    return(
       <Profile.Navigator screenOptions={{headerStyle:{
            backgroundColor : '#fff',
            shadowColor:'#000'
          },
          headerTintColor : '#000',
          headerBackTitleStyle : {
            fontWeight : 'bold',
            textAlign : 'center',
            },
            }}
       >
        <Profile.Screen name='profile'  component={ProfileView}  options={{
        title:'Profile',
         headerTitleAlign:'center',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={30} backgroundColor="#ffff" color='#000' onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerRight :()=> (
            <Icon1.Button
            name="account-edit"
            size={30}
            backgroundColor="#ffff"
            color="#000"
            onPress={() => navigation.navigate('Edit')}
            />
        )
        }}/>
        <Profile.Screen name='Edit' component={EditProfile} options={{
            title : 'Edit profile',
            headerTitleAlign:'center',
        }} />
       </Profile.Navigator>
    )
}


export default ProfileStack