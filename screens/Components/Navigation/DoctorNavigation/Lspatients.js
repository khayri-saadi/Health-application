
import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Navigation from '../Navigation';

const UserListView = ({navigation}) =>{
  const [data, setData] = useState([ {id:1, image: "https://bootdey.com/img/Content/avatar/avatar1.png"},
  {id:2, image: "https://bootdey.com/img/Content/avatar/avatar6.png"},
  {id:3, image: "https://bootdey.com/img/Content/avatar/avatar2.png"},
  {id:4, image: "https://bootdey.com/img/Content/avatar/avatar3.png"},
  {id:5, image: "https://bootdey.com/img/Content/avatar/avatar4.png"},])
    return (
      <FlatList 
        enableEmptySections={true}
        data={data}
        keyExtractor= {(item) => {
          return item.id;
        }}
        renderItem={({item}) => {
          return (
            <View style={styles.box}>
              <Image style={styles.image} source={{uri : item.image}} />
              <View style={styles.boxContent}>
                <Text style={styles.title}>Name</Text>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, elit consectetur</Text>
                <View style={styles.buttons}>
                  <TouchableHighlight style={[styles.button, styles.view]} onPress={() => {navigation.navigate('message')}}>
                    <Image style={styles.icon}  source={{uri: 'http://cdn.onlinewebfonts.com/svg/img_381628.png'}}/>
                  </TouchableHighlight>
                  <TouchableHighlight style={[styles.button, styles.view]} onPress={() => {navigation.navigate('data')}}>
                    <Image style={styles.icon} source={{uri: 'https://icon-library.com/images/icon-data/icon-data-2.jpg'}}/>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          )
        }}/>
    );
  }

export default UserListView
const styles = StyleSheet.create({
  image: {
    width: 100,
    height:100,
  },
  box: {
    padding:20,
    marginTop:5,
    marginBottom:5,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  boxContent: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft:10,
  },
  title:{
    fontSize:18,
    color:"#151515",
  },
  description:{
    fontSize:15,
    color: "#646464",
  },
  buttons:{
    flexDirection: 'row',
  },
  button: {
    height:35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:5,
    width:75,
    marginRight:5,
    marginTop:5,
  },
  icon:{
    width:20,
    height:20,
  },
  view: {
    backgroundColor: "#eee",
  },
  profile: {
    backgroundColor: "#1E90FF",
  },
  message: {
    backgroundColor: "#228B22",
  },
});
