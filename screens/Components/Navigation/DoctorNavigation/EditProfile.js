import { useContext } from 'react';
import {Text,View,TouchableOpacity,ImageBackground,TextInput,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import fontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather';
import { Context } from '../../../../Services/Context';
import CustomInput from '../../Input'
import { FontAwesome } from '@expo/vector-icons';
import CustomButton from '../../Button'


const EditProfile = ()=> {

    const {Data} = useContext(Context)
    return(
        <View style={styles.container}>
            <View style={{margin:20}}>
            <View style={{alignItems:'center'}}>
            <TouchableOpacity onPress={()=> {}}>
            <View style={{height:100,width:100,borderRadius:15,justifyContent:'center',alignItems:'center'}}>
                <ImageBackground source={{uri:'https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/255997299_4272261089567564_7204045446881231043_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nTFrPHraAFoAX_1VP_b&_nc_ht=scontent.ftun1-2.fna&oh=00_AT8ALTlxcgUmqy7_1_AlUKPYPuPeFQZmT2vZoA9o6LVFtg&oe=6348B76C'}} 
                    style={{height:100,width:100}}
                    imageStyle={{borderRadius:15}}
                   
                >
                    <View style={{
                        alignItems:'center',
                        flex:1,
                        justifyContent:'center'
                    }}>
                        <Icon name='camera' size={35} color='#fff' 
                        style={{opacity:0.7,alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:'#fff',borderRadius:10}}/>
                    </View>
                </ImageBackground>
            </View>

            </TouchableOpacity>
            <Text style={{marginTop:10,fontSize:18,fontWeight:'bold'}}>{Data.nom}</Text>
            </View>
            </View>
           <View style={styles.iconView}>
                    <FontAwesome name="user-o" size={24} style={{marginRight: 10}} />
                    <CustomInput placeholder='Full Name'
                    />
            </View>
            <View style={styles.iconView}>
            <FontAwesome name="envelope-o" size={24} style={{marginRight: 10}} />
            <CustomInput placeholder="Email" keyType={'email-address'} />
            </View>
            <View style={styles.iconView}>
                <Feather name="phone" size={24} style={{marginRight: 10}} />
                <CustomInput placeholder="phone number" keyType={'number-pad'} />
            </View>
           <TouchableOpacity style={styles.commandButton} onPress={()=> {}}>
                     <Text style={styles.panelButtonTitle}>Submit</Text>
           </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    container : {
        flex:1

    },
    commandButton:{
        width:'90%',
        marginLeft:10,
        padding:12,
        borderRadius:10,
        backgroundColor:'#FF6347',
        alignItems:'center',
        marginTop:15,

    },
    panel:{
        padding:20,
        backgroundColor:'#FFFF',
        paddingTop:20
    },
    header:{
        backgroundColor:'#ffff',
        shadowColor:'#3333',
        shadowOffset:{width:-1,height:-3},
        shadowRadius:2,
        shadowOpacity:0.4,
        paddingTop:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    panelHeader:{
        alignItems:'center'
    },
    panelHandle:{
        width:40,
        height:8,
        borderRadius:4,
        backgroundColor:'#0000',
        marginBottom:10
    },
    panelTitle:{
        fontSize:27,
        height:35
    },
    panelSubTitle:{
        fontSize:14,
        color:'grey',
        height:30,
        marginBottom:10
    },
    panelButton:{
        padding:13,
        borderRadius:10,
        backgroundColor:'#ff6347',
        alignItems:'center',
        marginVertical:7
    },
    panelButtonTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    },
    action:{
        flexDirection:'row',
        marginTop:10,
        marginBottom:15,
        borderWidth:0.5,
        borderBottomColor:'#f2f2f2',
        paddingBottom:15
    },
    actionError:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#ff0000',
        paddingBottom:5
    }, 
    TextInput:{
        flex:1,
        marginTop:-12,
        paddingLeft:10,
        color:'#05375a'
    },
     iconView: {
        width : '90%',
             flexDirection:'row',
            alignItems :'center',
            backgroundColor:'#f9fbfc',
            borderColor:'#AEB6BF',
            borderWidth : 0.5,
            borderRadius : 5,
            marginVertical : 10,
            padding:10 ,
            marginLeft:10

}

})
export default EditProfile