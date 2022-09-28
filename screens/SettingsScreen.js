import React from 'react'
import {View , Text, Button } from 'react-native'




function SettingsS({ navigation, route}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Home')}
          title="button"
        />
        <Text>hello</Text>
        <Text>helllo</Text>
      </View>
    );
  }

  export default SettingsS;