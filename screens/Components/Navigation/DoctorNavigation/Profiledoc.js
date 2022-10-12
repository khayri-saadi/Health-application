
import React, { Component, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { Context } from '../../../../Services/Context';
import {Avatar,
TouchableRipple,
Caption,
Title} from 'react-native-paper'

import Icon from 'react-native-vector-icons/Octicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/Fontisto'

const  ProfileView = ()=> {

  const {Data} = useContext (Context)
    return (
      <SafeAreaView style={styles.container}>
            <View style={styles.userInfosection}>
            <View style={{flexDirection:'row',marginTop:15}}>
            <Avatar.Image
              source={{
                uri: 'https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/255997299_4272261089567564_7204045446881231043_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nTFrPHraAFoAX_1VP_b&_nc_ht=scontent.ftun1-2.fna&oh=00_AT8ALTlxcgUmqy7_1_AlUKPYPuPeFQZmT2vZoA9o6LVFtg&oe=6348B76C',
              }}
              size={80}
                />
            <View style={{marginLeft:20}}>
              <Title style={styles.title}>{Data.nom}</Title>
              <Caption style={styles.caption}>doctor</Caption>
            </View>
            </View>
            </View>
            <View style={styles.userInfosection}>
            <View style={styles.row}>
            <Icon1 name='mail' size={22}  color='#777'/>
            <Text style={{color:'#777',marginLeft:20}}>{Data.email}</Text>
            </View>
            <View style={styles.row}>
              <Icon1 name="phone" size={20} color="#777" />
              <Text style={{color: '#777', marginLeft: 20}}>+21620830794</Text>
            </View>
            </View>
            <View style={styles.infoBoxWrapper}>
              <View style={[styles.infoBox,{borderRightColor:'#ddd',borderRightWidth:1}]}>
               <Avatar.Image source={{uri:'https://thumbs.dreamstime.com/b/doctor-icon-flat-style-white-background-doctor-icon-flat-style-doctor-logo-black-circle-147237145.jpg'}} size={100} />
              </View>
            <View style={styles.infoBox}>
               <Title>{Data.lspatients.length}</Title>
                <Title>{Data.lspatients.length > 1 ? 'patients' : 'patinet'}</Title>
            </View>
            </View>
            <View style={styles.menuWrapper}>
              <TouchableOpacity>
              <View style={styles.menuItem}>
                <Icon1 name="account-settings" size={30} color="#ff6347" />
                <Text style={styles.menuItemText}>Change password</Text>
              </View>

              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.menuItem}>
                <Icon2 name="player-settings" size={30} color="#ff6347" />
                <Text style={styles.menuItemText}>settings</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.menuItem}>
                <Icon1 name="account-check-outline" size={30} color="#ff6347" />
                <Text style={styles.menuItemText}>Support</Text>
              </View>
            </TouchableOpacity>  
            </View>
      </SafeAreaView>
    );
  }
export default ProfileView

const styles = StyleSheet.create({
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 2,
    borderColor: "grey",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000",
    fontWeight:'600',
  },
  container : {
    flex : 1
  },
  userInfosection:{
    paddingHorizontal:30,
    marginBottom:25
  },
  caption:{
    fontSize:14,
    lineHeight:14,
    fontWeight:'500',

  },
  row:{
    flexDirection:'row',
    marginBottom:10
  },
  title:{
    fontSize:24,
    fontWeight:'bold'
  },
  infoBoxWrapper:{
    borderBottomColor:'#ddd',
    borderBottomWidth:1.5,
    borderTopColor:'#ddd',
    borderTopWidth:1,
    flexDirection:'row',
    height:110,
  },
  infoBox:{
    width:'50%',
    alignItems:'center',
    justifyContent:'center'
  },
  menuWrapper:{
    marginTop:50
  },
  menuItem:{
    flexDirection:'row',
    paddingVertical:15,
    paddingHorizontal:30,

  },
  menuItemText:{
    color:'#777',
    marginLeft:20,
    fontWeight:'500',
    fontSize:14,
    lineHeight:26
  }
});
