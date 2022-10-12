import React , {useState, useContext} from 'react'
import {View , Text, StyleSheet , Image,useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from './Components/Input'
import CustomButton from './Components/Button'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1  from 'react-native-vector-icons/MaterialIcons'
import {Context} from '../Services/Context';
import { Register } from '../Services/Newapi'
import { Alert } from 'react-native'


const SignUpScreen = ({navigation})=> {
    const [email, setEmail] = useState('')
    const [emailError,setEmailError] = useState(false)
    const [NameError, setNameError] = useState (false)
    const [passwordError, setPasswordError] = useState (false)
    const [confirmPasswordError, setConfirmPasswordError] = useState (false);
    const [name,setName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [password, setPassword] = useState('')

const {Signup} = useContext(Context)

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
        const onEmailValidate = ()=> {
            if(email=== '') {
                setEmailError(true)
            } else {
                setEmailError(false)
            }
        }

        const onNameValidate = ()=> {
            if(name.length < 3) {
                setNameError(true)
            }
            else {
                setNameError(false)
            }
        }
        const onPasswordValidate = ()=> {
            if(password.length < 8) {
                setPasswordError(true)
            }else {
                setPasswordError(false)
            }
        }

        const onConfirmPasswordValidate = ()=> {
            if(confirmPassword.length < 8) {
                setConfirmPasswordError(true)
            } else {
                setConfirmPasswordError(false)
            }
        }

        const HandleEmail = (text)=> {
            let regex = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            setEmail(text)
            if(regex.test(text)) {
                setEmailError(false)
            }else {
                setEmailError(true)
            }

        }

const HandleSignUP = async () => {
  if (emailError | passwordError | NameError | confirmPasswordError) {
    Alert.alert ('Invalid data please fill all the fields');
  } 
  if(password=== '' | email=== '' |name==='' | confirmPassword==='') {
    Alert.alert('Please fill in the fields')
  }
  if(password !== confirmPassword) {
    Alert.alert('password are not the same')
  }
     const response = await Register ({email, password, name, confirmPassword});
     if(response) {
        Signup (response)
  } 
};

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>
            <View style={[styles.iconView,{borderColor: NameError ? 'red' : '#AEB6BF'}]}> 
                <Icon name='user' size={24} style={{marginRight:10}} />
                <CustomInput  Value={name} setValue={setName}
                placeholder='Name' onBlur={onNameValidate} />
            </View>
            <View style={[styles.iconView,{borderColor: emailError ? 'red' : '#AEB6BF'}]}>
                <Icon name='mail' size={24} style={{marginRight:10}}/>
                <CustomInput Value={email} setValue={(text)=> HandleEmail(text)} 
                    placeholder='Email'
                />
            </View>
          <View style={[styles.iconView,{borderColor:passwordError ? 'red' : '#AEB6BF'}]}>
          <Icon1 name='lock-outline' size={24} style={{marginRight:10}} />
          <CustomInput  Value={password} setValue={setPassword} 
                secureTextEntry={true}
                placeholder='Password'
                Length={8}
                onBlur={onPasswordValidate}
            />
          </View>
          <View style={[styles.iconView,{borderColor:confirmPasswordError ? 'red' : '#AEB6BF'}]}>
          <Icon1 name='lock-outline' size={24} style={{marginRight:10}} />
          <CustomInput  Value={confirmPassword} setValue={setConfirmPassword} 
                secureTextEntry={true}
                placeholder='Confirm password'
                onBlur={onConfirmPasswordValidate}
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
            borderWidth : 1,
            borderRadius : 10,
            marginVertical : 10,
            padding:10

    }
})
export default SignUpScreen