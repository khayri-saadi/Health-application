import React from 'react'
import  {View, Text} from 'react-native'
import {useTheme} from 'react-native-paper'

const HomeScreen = ({navigation})=> {
  const {colors} = useTheme()
  return(
    <View style={{alignItems:'center'}} >
      <Text style={{color:colors.text}}>Data User</Text>
    </View>
  )
}

export default HomeScreen