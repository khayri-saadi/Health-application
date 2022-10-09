import React , {useState, useContext} from 'react'
import {View , Text, StyleSheet , Image,useWindowDimensions, ScrollView} from 'react-native'
import Logo3 from '../assets/logo2.png'
import CustomInput from './Components/Input'
import CustomButton from './Components/Button'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1  from 'react-native-vector-icons/MaterialIcons'
import  {login} from '../Services/Newapi'
import { Context } from '../Services/Context'
import Apirequest from '../Services/Apirequest'

const SignInScreen = ({navigation})=> {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
const {Signin} = useContext(Context)


const handleLogin = async() => {
    const response = await login(email,password)  
    console.log(Apirequest,'hello')
   if(response) {
    Signin (response);
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
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image source={Logo3}  style={[styles.logo, {height : height * 0.3}]} resizeMode='contain' />
            <View style={styles.iconView}>
                <Icon name='mail' size={24} style={{marginRight : 10}} />
                 <CustomInput value={email} setValue={setEmail} style={{marginHorizontal : 5}}
                 placeholder='Email' />
            </View>
            <View style={styles.iconView}>
                <Icon1 name='lock-outline' size={24} style={{marginRight : 10}}  />
                <CustomInput  value={password} setValue={setPassword}
                        secureTextEntry={true}
                        placeholder='Password'
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
    width : '70%',
    maxWidth : 500,
    height : 100,
    maxHeight : 350,
  
    
    },
    root : {
        alignItems : 'center',
        padding : 40,
    },
    iconView: {
        width : '100%',
             flexDirection:'row',
              alignItems :'center',
            backgroundColor:'#f9fbfc',
            borderColor:'#AEB6BF',
                borderWidth : 2,
                borderRadius : 15,
                marginVertical : 10,
                   padding:10

    }
    

})
export default SignInScreen