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
 
 
  const {SignOut, ToggleTheme, Signin} = useContext(Context)
console.log(response.data.user,'uuuuuuuuuu')


    return(
            <View style={{flex :1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                  <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'row', marginTop : 15}}>
                      <Avatar.Image 
                        source = {{

                              uri:'https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/193452564_2908999485979695_509473682775650520_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=c4wU8K45VN0AX9WnvkD&_nc_ht=scontent.ftun1-2.fna&oh=00_AT84YkLAwts5P0dnzH1ViZVLMdYA_Vgf6fyg2WdXw6lCFQ&oe=62BFDB42'

                        }
                        }
                        size={50}
                      />
                      <View style={{marginLeft : 15 , flexDirection:'column'}}>
                        <Title style={styles.title}>khayri</Title>
                        <Caption style={styles.caption}>khayri  </Caption>
                      </View>
                    </View>
                    <View style={styles.row}>
                            <View style={styles.section}> 
                              <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                              <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                              <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                              <Caption style={styles.caption}>Followers</Caption>
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
                 <DrawerItem 
                    icon={({color, size}) => (
                        <Iconn 
                        name="notifications-none" 
                        color={color}
                        size={size}
                        onPress={()=> {
                          props.navigation.navigate('Notification')
                        }}
                        />
                    )}
                    label="Notifications"
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