import React, {useState, useEffect, useMemo} from 'react';
import {Button, View, ActivityIndicator} from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme as NavigationDefaultheme,
  DarkTheme as NavigationDarktheme,
} from '@react-navigation/native';
import {Context} from './Services/Context';
import {
  Provider as PaperProvoider,
  DarkTheme as PaperDarktheme,
  DefaultTheme as Paperdefaultheme,
} from 'react-native-paper';
import {login} from './Services/Newapi';
import UserNavigation from './screens/Components/Navigation/Usernavigation';
import Navigation from '././screens/Components/Navigation/Navigation';
import DoctorNavigation
  from './screens/Components/Navigation/DoctorNavigation/DoctorNavigation';

export default function App () {
  const [isDarkT, setIsDarkT] = useState (false);

  const CustomdefalutTheme = {
    ...NavigationDefaultheme,
    ...Paperdefaultheme,
    colors: {
      ...NavigationDefaultheme.colors,
      ...Paperdefaultheme.colors,
      background: '#ffff',
      text: '#333',
    },
  };
  const CustomDarktheme = {
    ...NavigationDarktheme,
    ...PaperDarktheme,
    colors: {
      ...NavigationDarktheme.colors,
      ...PaperDarktheme.colors,
      background: '#333',
      text: '#ffff',
    },
  };

  const theme = isDarkT ? CustomDarktheme : CustomdefalutTheme;

  const [userToken, setUserToken] = useState (null);
  const [loading, setLoading] = useState (true);
  const [email, setEmail] = useState ('');
  const [name, setName] = useState ('');
  const [userRole, setUserRole] = useState ('user');

  const authocontext = useMemo ( () => ({
   Signin:  async (Response) => {
    const res =   await Response 
      console.log(res,'reeee')
     setUserToken (res.headers['set-cookie'][0].split (';')[0]);
      setLoading (false);
     setEmail (res.data.user.email);
    setName (res.data.user.name);
    setUserRole (res.data.user.role);
    //  console.log (Response.data.user, 'APPPPPPPPPPPPPP');
    },
    Signup: Response => {
      setUserToken (Response.headers['set-cookie'][0].split (';')[0]);
    },
    SignOut: () => {
      setUserToken (null);
      setLoading (false);
    },
    ToggleTheme: () => {
      setIsDarkT (isDarkT => !isDarkT);
    },   
  }));
  useEffect (() => {
    setTimeout (() => {
      setLoading (false);
    }, 2000);
  });

  if (loading) {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <ActivityIndicator size="large" color={'#1117'} />
      </View>
    );
  }
  return (
    <PaperProvoider theme={theme}>
      <Context.Provider value={authocontext}>
        <NavigationContainer theme={theme}>
          {userToken !== null && userRole === 'user'
            ? <UserNavigation/>
            : userToken !== null && userRole === 'doctor'
              ? <DoctorNavigation/>
                : <Navigation/>}
        </NavigationContainer>
      </Context.Provider>
    </PaperProvoider>
  );
}
