import React , {useState, useContext} from 'react'
import {View , Text, StyleSheet , Image,useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from './Components/Input'
import CustomButton from './Components/Button'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1  from 'react-native-vector-icons/MaterialIcons'
import {Context} from '../Services/Context';
import { Register } from '../Services/Newapi'


const SignUpScreen = ({navigation})=> {
    const [email, setEmail] = useState('khayrikharmach@gmail.com')
    const [name,setName] = useState('khayrii')
    const [confirmPassword, setConfirmPassword] = useState('khayri2566')
    const [Password, setPassword] = useState('khayri2566')


const {Signup} = useContext(Context)

const HandleSignUP = async () => {
    const response = await Register(email,Password,name,confirmPassword)
    Signup(response)

}


  
    const onForgotPass = () => {
        console.warn('forgot password')
     }
     const onSignInGoogle = () => {
         console.warn('sign In with google')
     }
     const onSigninPressed = () => {
         console.warn('sign in')
       navigation.navigate('signin')

     }
     const onTermsofUse = () => {
         console.warn('Terms of Use')
     }
     const onPrivacy = () => {
         console.warn('Privacy Policy')
     }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>
            <View style={styles.iconView}> 
                <Icon name='user' size={24} style={{marginRight:10}} />
                <CustomInput  Value={name} setValue={setName}
                placeholder='Name'
                
                 />
            </View>
            <View style={styles.iconView}>
            <Icon name='mail' size={24} style={{marginRight:10}}/>
            <CustomInput  Value={email} setValue={setEmail} 
                placeholder='Email'
            />
            </View>
          <View style={styles.iconView}>
          <Icon1 name='lock-outline' size={24} style={{marginRight:10}} />
          <CustomInput  Value={Password} setValue={setPassword} 
                secureTextEntry={true}
                placeholder='Password'
            />

          </View>
          <View style={styles.iconView}>

          <Icon1 name='lock-outline' size={24} style={{marginRight:10}} />
          <CustomInput  Value={confirmPassword} setValue={setConfirmPassword} 
                secureTextEntry={true}
                placeholder='Confirm password'
            />

          </View>
    
            <CustomButton text='Register' onPress={HandleSignUP}/>
            <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsofUse}>Terms of Use</Text> and <Text style={styles.link} onPress={onPrivacy}>Privacy Policy </Text></Text>
            <CustomButton
             text='Sign In with google'
            onPress={onSignInGoogle}
            fgColor='#DD4D44'
            bgColor='#FAE9EA'
                
              />
            <CustomButton text="Have an account? Sign in" onPress={onSigninPressed} type='TERTIARY' />
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
    title : {
        fontSize : 24,
        fontWeight : 'bold',
        color : '#051c60',
        margin : 15
    },
    text : {
        marginVertical : 10,
        color :'grey'
    },
    link : {
        color : '#FDB075'
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
export default SignUpScreen