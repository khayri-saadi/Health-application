import React , {useState, useContext} from 'react'
import {View , Text, StyleSheet , Image,useWindowDimensions, ScrollView} from 'react-native'
import Logo3 from '../assets/imageBB.jpg'
import CustomInput from './Components/Input'
import CustomButton from './Components/Button'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1  from 'react-native-vector-icons/MaterialIcons'
import  {login} from '../Services/Newapi'
import { Context } from '../Services/Context'
import Apirequest from '../Services/Apirequest'
import { Alert } from 'react-native'

const SignInScreen = ({navigation})=> {
   const [email, setEmail] = useState('Hamza@gmail.com')
   const [emailError,setEmailError] = useState(false)
   const [password, setPassword] = useState('12345678i')
   const [passwordError,setPasswordError] = useState(false)
   // use Context API
const {Signin} = useContext(Context)
// function to signin
const handleLogin = async() => {
if(email==='' | password=== '') {
    Alert.alert('Please fill in the fields')
}
if(emailError | passwordError) {
        Alert.alert('Invalid email or password')
}
    const response = await login(email,password)
   if(response) {
    Signin (response)
   }
}
    const onForgotPass = () => {
        console.warn('forgot password')
        navigation.navigate('ForgotPass')
     }
     const onSignInGoogle = () => {
         console.warn('sign In with google')
     }
     const onSignupPressed = () => {
         console.warn('sign up')
        navigation.navigate('signup')  
     }
    const {height} = useWindowDimensions()

            const HandleEmail = text => {
        let regex = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        setEmail (text);
        if (regex.test (text)) {
            setEmailError (false);
        } else {
            setEmailError (true);
        }
        };
const onPasswordValidate = () => {
  if (password.length < 8) {
    setPasswordError (true);
  } else {
    setPasswordError (false);
  }
}
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image source={Logo3}  style={[styles.logo, {height : height * 0.3}]} resizeMode='cover' />
            <View style={[styles.iconView,{borderColor : emailError ? 'red' : '#AEB6BF'}]}>
                <Icon name='mail' size={24} style={{marginRight : 10}} />
                 <CustomInput value={email} setValue={(text)=>HandleEmail(text)} style={{marginHorizontal : 5}}
                 placeholder='Email' />
            </View>
            <View style={[styles.iconView,{borderColor : passwordError ? 'red':'#AEB6BF'}]}>
                <Icon1 name='lock-outline' size={24} style={{marginRight : 10}}  />
                <CustomInput  value={password} setValue={setPassword}
                        secureTextEntry={true}
                        placeholder='Password'
                        onBlur={onPasswordValidate}
            />
            </View>
            <CustomButton text='Sign In' onPress={handleLogin}/>
            <CustomButton text='Forgot password?' onPress={onForgotPass} type='TERTIARY' />
            <CustomButton
             text='Sign In with google'
            onPress={onSignInGoogle}
            fgColor='#DD4D44'
            bgColor='#FAE9EA' 
              />
            <CustomButton text="Don't have an account? Create One" onPress={onSignupPressed} type='TERTIARY' />
        </View>
        </ScrollView>

    )

}
const styles=StyleSheet.create({
    logo : {
    width : '80%',
    maxWidth : 500,
    height : 100,
    maxHeight : 350,
 
    
    },
    root : {
        alignItems : 'center',
        padding : 25,
    },
    iconView: {
        width : '100%',
        flexDirection:'row',
        alignItems :'center',
        backgroundColor:'#f9fbfc',
        borderColor:'#AEB6BF',
        borderWidth : 1,
        borderRadius : 10,
        marginVertical : 10,
        padding:10

    }
    

})
export default SignInScreen