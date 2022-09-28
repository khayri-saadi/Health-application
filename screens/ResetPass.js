import React , {useState} from 'react'
import {View , Text, StyleSheet , Image,useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from './Components/Input'
import CustomButton from './Components/Button'
import Icon1  from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/Ionicons'



const ResetPassword = ({navigation})=> {
    const onSubmiPressed = () => {
       console.warn('chnage password')
       navigation.navigate('signin')
    }
    const backSignin = ()=> {
        console.warn('back to sign In')
        navigation.navigate('signin')
    }

   
    const [Code, setCode] = useState('')
    const [confirmnewPassword, setConfirmnewPassword] = useState('')
    const [newPassword, setnewPassword] = useState('')
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Reset your password</Text>
            <View style={styles.iconView}>
           
                 <CustomInput value={Code} onChange={setCode} placeholder='Enter your code' />
            </View>
            <View style={styles.iconView}>
            <Icon1 name='lock-outline' size={24}  style={{marginRight:10}} />
                <CustomInput  value={newPassword} onChange={setnewPassword}
                        secureTextEntry={true}
                        placeholder='New password'
                    />

            </View>
            <View style={styles.iconView}>
            <Icon1 name='lock-outline' size={24}  style={{marginRight:10}} />
                <CustomInput  value={confirmnewPassword} onChange={setConfirmnewPassword}
                        secureTextEntry={true}
                        placeholder='Confirm New passwordr'
                    />

            </View>
            <CustomButton text='Submit' onPress={onSubmiPressed}  />
            <CustomButton text="back to sign in" onPress={backSignin} type='TERTIARY' />
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
export default ResetPassword ;