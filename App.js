import React, {useState, useEffect, useMemo} from 'react';
import { View, ActivityIndicator} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultheme,
  DarkTheme as NavigationDarktheme,
} from '@react-navigation/native';
import {Context} from './Services/Context';
import {
  Provider as PaperProvoider,
  DarkTheme as PaperDarktheme,
  DefaultTheme as Paperdefaultheme,
} from 'react-native-paper';
import Navigation from '././screens/Components/Navigation/Navigation';
import MainTabscreenDoc from './screens/Components/Navigation/DoctorNavigation/Maintabdoc';
import MainTabscreen from './screens/MainTabScreen'

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
  const [userCapt,setUsercapt] = useState('')
  const [lsPatient,setLspatient] = useState([{}])

  const authocontext = useMemo ( () => ({
   Signin:  async (Response) => {
    const res =  await Response 
      setUserToken(res.headers['set-cookie'][0].split(';')[0]);
      setLoading (false);
     setEmail (res.data.user.email);
    setName (res.data.user.name);
    setUserRole (res.data.user.role);
    setUsercapt(res.data.user.nom_Capteur)
    setLspatient(res.data.user.Lspatients)
    },
    Signup: Response => {
      setUserToken(Response?.headers['set-cookie'][0].split (';')[0]);
    },
    SignOut: () => {
      setUserToken(null);
      setLoading(false);
    },
    ToggleTheme: () => {
      setIsDarkT(isDarkT => !isDarkT);
    },
    
   Data : {
    token : userToken ? userToken : null,
    nom : name ? name : null,
    email : email ? email : null,
    role : userRole ? userRole : null,
    nom_Capteur : userCapt ? userCapt : null,
    lspatients: lsPatient ? lsPatient : null
   },
  }));

  console.log(lsPatient,'hhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
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
            ? <MainTabscreen/>
            : userToken !== null && userRole === 'doctor'
              ? <MainTabscreenDoc/>
                : <Navigation/>}
        </NavigationContainer>
      </Context.Provider>
    </PaperProvoider>
  );
}
