import React from 'react'
import {View, Text, Button, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import CustomButton from './Components/Button'
const SplashScreen = ({navigation})=> {
   
    return(
        <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../assets/healthCare.png')} style={styles.logo}

                resizeMode='stretch'
            />
        </View>
        <View style={styles.footer}>
            <Text style={styles.title}>Stay connected with your doctor !</Text>
            <Text style={styles.text}>Sign in with an account</Text>
          <View style={{width : '70%', marginTop :15, marginLeft : 100}}>
              <CustomButton text='Get started' style={{marginRight :20, borderRadius:15}} onPress={()=> {
                  navigation.navigate('signin')
              }}/>
          </View>
           
        </View>


        </View>
    )
}

export default SplashScreen

const  {height} = Dimensions.get('screen')
const height_logo = height * 0.28

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#3b71f3'

    },
    header : {
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    footer : {
        flex : 1,
        backgroundColor :'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius : 30,
        paddingVertical : 50,
        paddingHorizontal : 30

    },
    logo:{
        width : height_logo,
        height : height_logo

    },
    title : {
        color : '#05375a',
        fontSize : 30,
        fontWeight : 'bold'

    },
    text : {
        color:'grey',
        marginTop :30

    },
    signIn : {
        width : 150,
        height : 40, 
        justifyContent :'center',
        alignItems :'center',
        borderRadius : 50,
        flexDirection  :'row'
    },
    textSignin : {
        color:'white',
        fontWeight : 'bold'

    },

})