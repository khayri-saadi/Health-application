import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat,Send} from 'react-native-gifted-chat';
import {View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/FontAwesome'




const MessageScreen = ()=> {
    const [messages, setMessages] = useState ([]);

useEffect (() => {
  setMessages ([
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date (),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
  ]);
}, []);

const renderSend = (props)=> {
    return(
        <Send {...props}>
                <View>
                    <Icon name="send-circle" size={32} color='#2e64e5' style={{marginBottom:5,marginRight:5}} />
                </View>


        </Send>
       

    )
}
const ScrollBottomComponent =()=> {
    return(
        <Icon1 name='angle-double-down' size={22} color='#333'/>
    )
}
const onSend = useCallback ((messages = []) => {
  setMessages (previousMessages =>
    GiftedChat.append (previousMessages, messages)
  );
}, []);

    
    return (
        <GiftedChat
  messages={messages}
  onSend={messages => onSend (messages)}
  user={{
    _id: 1,
  }}
  alwaysShowSend
  renderSend={renderSend}
  scrollToBottom
  scrollToBottomComponent={ScrollBottomComponent}
/>
    )
}

export default MessageScreen