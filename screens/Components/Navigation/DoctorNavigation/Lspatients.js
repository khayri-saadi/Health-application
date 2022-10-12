
import React, { Component, useState,useContext,useEffect } from 'react';
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
import { Context } from '../../../../Services/Context';
const UserListView = ({navigation}) =>{
  const {Data} = useContext(Context);
 //console.log(Data.lspatients,'inlss11')
  const [data, setData] = useState([{}])
  const FetchPatients = async()=> {
    return await setData(Data.lspatients)
  }
  useEffect(()=> {
    FetchPatients()
  },[Data.lspatients])
  //console.log(data,'inlss001')
    return (
      <FlatList 
        enableEmptySections={true}
        data={data}
        keyExtractor= {(item) => {
          return item.id;
        }}
        renderItem={({item,index}) => {
          return (
            <View style={styles.box}>
              <Image style={styles.image} source={{uri : 'https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/193452564_2908999485979695_509473682775650520_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cET9BuklMT4AX8giGjt&_nc_ht=scontent.ftun1-2.fna&oh=00_AT8d8Dtn6wxwNwCQ29u6IE_eVHEOJHNp9FDBv-2LEatc7w&oe=6369ECC2'}} />
              <View style={styles.boxContent}>
                <Text style={styles.title}>{data[index].name}</Text>
                <Text style={styles.description}>{data[index].email}</Text>
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
    width: 120,
    height:100,
    borderRadius:10
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
    fontSize:20,
    color:"#FF6347",
    fontWeight:'bold'
  },
  description:{
    fontSize:15,
    color: "#646464",
  },
  buttons:{
    flexDirection: 'row',
    margin : 5,
    padding:5
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
    width:25,
    height:25,
   
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
