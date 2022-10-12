import React from 'react'
import {View,Text, StyleSheet,FlatList,TouchableOpacity,Image} from 'react-native';
import Messages from '../../../../assets/data/Messages';

const MessagesScreen = ({navigation})=> {
    return(
        <View style={styles.container}>
            <FlatList
                data={Messages}
                keyExtractor={item=>item.id}
            renderItem={({item})=> (
               
                <TouchableOpacity style={styles.Card} onPress={()=> {
                    navigation.navigate('message', {userName:item.userNam})
                }}>
                        <View style={styles.userInfo}>
                            <View style={styles.UserImageWrapper}>
                            <Image source={{uri: item.userImg}} style={styles.userImage} />
                        </View>
                            <View style={styles.textSelection}>
                                <View style={styles.userInfoText}>
                                    <Text style={styles.usrName}>{item.userNam}</Text>
                                    <Text style={styles.postTime}>{item.MessageTime}</Text>
                                </View>
                                    <Text style={styles.MessageText}>{item.messageText}</Text>
                                </View>
                            </View>
                </TouchableOpacity>
               
            )}
                
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex :1,
        paddingLeft:20,
        paddingRight:20,
        alignItems:'center',
        backgroundColor:'#ffff'
    },
    Card :{
        width:'100%',
    },
    userInfo :{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    UserImageWrapper:{
        paddingTop:15,
        paddingBottom:15
    },
    userImage:{
        width:50,
        height:50,
        borderRadius:25
    },
    textSelection:{
        flexDirection:'column',
        justifyContent:'center',
        padding:15,
        paddingLeft:0,
        marginLeft:10,
        width:300,
        borderBottomWidth:1,
        borderBottomColor:'#cccc'
    },
    userInfoText: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:5
    },
    usrName:{
        fontSize:14,
        fontWeight:'bold',
        fontFamily:'Lato-Regular'
    },
    MessageText:{
        fontSize:14,
        color:'#000'
    },
    postTime:{
        fontSize:12,
        color:'#666',
        fontFamily:'Lato-regular',
        marginRight:30
    }
})
export default MessagesScreen