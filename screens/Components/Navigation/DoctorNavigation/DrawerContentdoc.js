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
import ICON from 'react-native-vector-icons/FontAwesome5'
import Iconn from 'react-native-vector-icons/MaterialIcons'

import { Context } from '../../../../Services/Context';


const DrawerContentDoc = (props ) => {


  const paperTheme = useTheme()
 
  const {SignOut, ToggleTheme, Data} = useContext(Context)
  console.log(Data.lspatients.length)
    return(
            <View style={{flex :1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                  <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'row', marginTop : 15}}>
                      <Avatar.Image 
                        source = {{

                              uri:'https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/255997299_4272261089567564_7204045446881231043_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nTFrPHraAFoAX_1VP_b&_nc_ht=scontent.ftun1-2.fna&oh=00_AT8ALTlxcgUmqy7_1_AlUKPYPuPeFQZmT2vZoA9o6LVFtg&oe=6348B76C'

                        }
                        }
                        size={50}
                      />
                      <View style={{marginLeft : 15 , flexDirection:'column'}}>
                        <Title style={styles.title}>{Data.nom}</Title>
                      </View>
                    </View>
                    <View style={styles.row}>
                            <View style={styles.section}> 
                              <Paragraph style={[styles.paragraph, styles.caption]}>Number of patients</Paragraph>
                            </View>
                            <View style={styles.section}>
                              <Caption style={[styles.caption,{fontWeight:'bold', color:'#000'}]}>{Data.lspatients.length}</Caption>
                            </View>
                            
                    </View>
                      
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem 
                    icon={({color, size}) => (
                        <ICON
                        name="users" 
                        color={color}
                        size={size}
                        onPress={()=> {
                          props.navigation.navigate('Home')
                        }}
                        />
                    )}
                    label="patient list"
                   
                />
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

  export default DrawerContentDoc 