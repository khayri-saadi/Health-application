import React , {useState} from 'react'
import {View , Text, StyleSheet , Image,useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from './Components/Input'
import CustomButton from './Components/Button'
import Icon from 'react-native-vector-icons/AntDesign'



const ConfirmEmail = ({navigation})=> {
    const onConfirmEmail = () => {
       console.warn('Email confirmed')
       navigation.navigate('Home')
    }
    const onSignIn = ()=> {
        console.warn('back to sign In')
        navigation.navigate('signin')
    }
    
    const [Code, setCode] = useState('')
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Confirm your email</Text>
            <View style={styles.iconView} >
                 <CustomInput value={Code} onChange={setCode} placeholder='Enter your code' />
            </View>
            <CustomButton text='Confirm' onPress={onConfirmEmail}/>
            <CustomButton text="Resend Code" onPress={onSignIn} type='SECONDARY' />
            <CustomButton text="Back to sign in" onPress={onSignIn} type='TERTIARY' />

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
                marginVertical : 10,
                   padding:10

    }
})
export default ConfirmEmail ;