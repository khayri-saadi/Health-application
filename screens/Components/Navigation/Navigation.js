import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../../SigninScreen'
import SignUpScreen from '../../SignupScreen'
import ConfirmEmail from '../../ConfirmEmail'
import ResetPassword from '../../ResetPass'
import Forgotpassword from '../../ForgotPass'
import SplashScreen from '../../SplashScreen';

const Navigation = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Splash' component={SplashScreen}/>
            <Stack.Screen name='signin' component={SignInScreen} />
            <Stack.Screen name='signup' component={SignUpScreen} />
            <Stack.Screen name='confirmEmail' component={ConfirmEmail} />
            <Stack.Screen name='ResetPass' component={ResetPassword} />
            <Stack.Screen  name='ForgotPass' component={Forgotpassword} />
        </Stack.Navigator>
    )
}

export default Navigation;