import React , {useState, useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Context } from '../Services/Context';
const DrawerContent = ( {route,...props} ) => {

  const paperTheme = useTheme()
 
 
  const {SignOut, ToggleTheme, Signin} = useContext(Context)
  
const {Data} = useContext(Context)
console.log(Data.nom_Capteur)

    return(

            <View style={{flex :1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                  <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'row', marginTop : 15}}>
                      <Avatar.Image 
                        source = {{

                              uri:'https://media-exp1.licdn.com/dms/image/C5603AQHyQBO_S2Viog/profile-displayphoto-shrink_800_800/0/1605011466512?e=1670457600&v=beta&t=1cEmTJBFWUTBT9zYaj_IYYux5psd-Peo2eYxB5iGb3I'

                        }

                        }
                        size={50}
                      />
                      <View style={{marginLeft : 15 , flexDirection:'column'}}>
                        <Title style={[styles.title, {}]}>{Data.nom}</Title>
                      </View>
                    </View> 
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="account-outline" 
                        color={color}
                        size={size}
                        onPress={()=> {
                          props.navigation.navigate('Profile')
                        }}
                        />
                    )}
                    label="Profile"
                   
                />
                 <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="android-messages" 
                        color={color}
                        size={size}
                        onPress={()=> {
                          props.navigation.navigate('Messages')
                        }}
                        />
                    )}
                    label="Discussion"
                   
                />
                    </Drawer.Section>

                    <Drawer.Section title='Preferences'>
                      <TouchableRipple onPress={()=> {ToggleTheme()}}>
                      <View style={styles.preference}>
                        <Text>Dark theme</Text>
                        <View pointerEvents='none'>
                          <Switch value={paperTheme.dark}  />
                        </View>
                        
                      </View>

                      </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section  style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    onPress={()=> {
                      SignOut()
                    }}
                    label="Sign Out"
                   
                />
            </Drawer.Section>
                
            </View>   
            
        
    )}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
        
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

  export default DrawerContent