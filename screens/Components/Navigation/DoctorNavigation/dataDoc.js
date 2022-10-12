
import React from 'react';

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet

} from 'react-native';


const  DataDoc = () => {
  return (
        <View style={styles.container}>
          <View>
            <Text>Hello from user data</Text>
          </View>
        </View>
    
)};

export default DataDoc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});
