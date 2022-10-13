import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from './ProfileScreen'
import EditProfile from './Components/Navigation/DoctorNavigation/EditProfile'
const profile = createStackNavigator ();
const ProfileStackP = ({navigation}) => {
  return (
    <profile.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#000',
        },
        headerTintColor: '#000',
        headerBackTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
        },
      }}
    >
      <profile.Screen
        name="profile"
        component={Profile}
        options={{
          title: 'Profile',
          headerTitleAlign: 'center',
          headerRight: () => (
            <Icon1.Button
              name="account-edit"
              size={30}
              backgroundColor="#ffff"
              color="#000"
              onPress={() => navigation.navigate ('Edit')}
            />
          ),
        }}
      />
      <profile.Screen
        name="Edit"
        component={EditProfile}
        options={{
          title: 'Edit profile',
          headerTitleAlign: 'center',
        }}
      />
    </profile.Navigator>
  );
};

export default ProfileStackP;
