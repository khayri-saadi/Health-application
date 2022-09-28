import React from 'react'
import {View , Text, Button } from 'react-native'



const ExploreScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Home')}
          title="button"
        />
      </View>
    );
  }


  export default ExploreScreen;