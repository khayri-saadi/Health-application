import React , {useState} from 'react'
import {View , Text, StyleSheet , Image,useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from './Components/Input'
import CustomButton from './Components/Button'
import Icon from 'react-native-vector-icons/AntDesign'



const Forgotpassword = ({navigation})=> {
    const onResetPass = () => {
       console.warn('Reset password')
       navigation.navigate('ResetPass')

       
    }
     const onSigninPressed = () => {
         console.warn('sign in')
         navigation.navigate('signin')
     }
    const [Email, setEmail] = useState('')
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Reset your password</Text>
            <View style={styles.iconView}>
                <Icon name='mail' size={24}  style={{marginRight:10}}/>
                 <CustomInput value={Email} onChange={setEmail} placeholder='Email'/>
                
            </View>
            <CustomButton text='SEND' onPress={onResetPass}/>
            <CustomButton text="Back to sign in" onPress={onSigninPressed} type='TERTIARY' />
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
    }
})
export default Forgotpassword  ;