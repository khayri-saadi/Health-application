import {Text,View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import MessageScreen from './MessageScreen';
import MessagesScreen from './MessagesScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';

const Msg = createStackNavigator()

const MessageStack = ({navigation})=> {

    const route = useRoute()
    return(
        <Msg.Navigator screenOptions={{headerStyle:{
            backgroundColor : '#fff',
            shadowColor: ('#000'),
          },
          headerTintColor : '#000',
          headerBackTitleStyle : {
            fontWeight : 'bold',
            textAlign : 'center',
            },
            }} >
            <Msg.Screen name='messages' component={MessagesScreen} options={{
        title:'Messages',
        headerTitleAlign:'center',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={30} backgroundColor="#fff" color='#000' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
            <Msg.Screen name='message' component={MessageScreen}
            options={({route})=> ({
                title:route.params.userName,
                headerBackTitleStyle:false
            })}
            
             />

        </Msg.Navigator>
    )
}
export default MessageStack