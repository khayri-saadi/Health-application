import React, {Component, useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity
} from 'react-native';
import { Context } from '../Services/Context';
import {Octicons,MaterialCommunityIcons,Fontisto,MaterialIcons} from 'react-native-vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';
const Profile = ( {navigation , route})=> {

  const {Data, Signin,SignOut} = useContext(Context)
 console.log(Data.nom)
    return (
      <SafeAreaView style={styles.container}> 
              <View style={{margin: 10, flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                  <Image
                    style={styles.avatar}
                    source={{
                      uri: 'https://media-exp1.licdn.com/dms/image/C5603AQHyQBO_S2Viog/profile-displayphoto-shrink_800_800/0/1605011466512?e=1671062400&v=beta&t=L0TbfqHqFM_PM64wPZarvCO0nyJEwpOP9Dp0iARDqaw',
                    }}
                  />
                  <View style={{alignItems:'center', justifyContent:'center',padding:5}}> 
                    <Text style={styles.title}>{Data.nom}</Text>
                  </View>
            </View>
            <View>
                    <View style={styles.userInformation}>
                      <Octicons name='mail' size={20} />
                      <Text style={styles.txt}>{Data.email}</Text>
                    </View>
                    <View style={{marginLeft:10,flexDirection:'row',padding:5}}>
                      <Octicons name='device-mobile' size={20}  />
                      <Text style={styles.txt}>Oxymeter</Text>
                    </View>
                    <View style={{marginLeft: 10, flexDirection: 'row', padding: 5}}>
                        <Fontisto name="doctor" size={20}  />
                        <Text
                          style={styles.txt}>
                          Oxymeter
                        </Text>
                    </View>
            </View>
             <View style={styles.menuWrapper}>
           
                <TouchableOpacity
                  onPress={() => {
                    console.log ('hahaha')
                  }}
                  style={styles.menuItem}
                >
                <MaterialCommunityIcons name="account-settings" size={35} color="#ff6347" />
                <Text style={styles.menuItemText}>Change password</Text>
                </TouchableOpacity>
                  <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Home')
                  }}
                  style={styles.menuItem}
                >
                  <MaterialIcons
                    name="explore"
                    size={35}
                    color="#ff6347"
                  />
                    <Text style={styles.menuItemText}>About doctor</Text>
                  </TouchableOpacity>
              </View>
          <TouchableOpacity style={styles.commandButton} onPress={SignOut}>
              <Text style={styles.panelButtonTitle}>Sign Out</Text>
          </TouchableOpacity>
  </SafeAreaView>
         
    );
  }

export default Profile
const styles = StyleSheet.create ({
  container : {
    flex:1
  },
  avatar: {
    borderRadius : 150,
    width : 150,
    aspectRatio : 1,
    marginTop : 10,
  },
   title: {
    fontSize:18,
    fontWeight:'bold',
    marginLeft:15,
    marginTop:15,
    marginBottom:10,
  },
  row:{
    flexDirection:'row',
    margin:15
  },
  txt:{
 fontWeight:'600',
 fontSize:14, 
 marginLeft:10,
  },
  userInformation:{
 marginLeft:10,
 flexDirection:'row',
 padding:5
  },
  header:{
    flexDirection:'row',
    margin:15
  },
  caption : {
    fontSize:14,
    fontWeight:'500',
    lineHeight:14
  },
 
  infoBoxWrapper: {
    borderBottomColor:'#dddddd',
    borderBottomWidth:1,
    borderTopColor:'#dddd',
    borderWidth:1.5,
    flexDirection:'row',
    height:100,

  },
  infoBox:{
    width:'50%',
    alignItems:'center',
    justifyContent:'center'
  },
  menuItemText:{
    color:'#777',
    margin : 10,
    fontWeight:'600',
    fontSize:14,
    lineHeight:16,
  },
  menuWrapper:{
    marginTop:30,
  },
  menuItem:{
    flexDirection:'row',
    paddingHorizontal:20,
    paddingVertical:10
  },
  commandButton:{
        width:'90%',
        marginLeft:19,
        padding:15,
        borderRadius:5,
        backgroundColor:'#FF6347',
        alignItems:'center',
        marginTop:60,
    },  
     panelButtonTitle:{
        fontSize:15,
        fontWeight:'bold',
        color:'white'
    },
});
