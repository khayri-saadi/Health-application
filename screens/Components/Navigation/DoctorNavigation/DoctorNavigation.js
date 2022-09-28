import  React , {useContext} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  MainTabscreenDoc from './Maintabdoc'
import DrawerContentDoc from './DrawerContentdoc';
import UserListView from './Lspatients'
import ProfileView  from './Profiledoc'
import NotifcationDoc from './Notification';
const Drawer = createDrawerNavigator();
const DoctorNavigation = ()=> {
    return (
        <Drawer.Navigator screenOptions={{headerShown:false,drawerLabelStyle:{marginLeft:-25}}}
         drawerContent={props => <DrawerContentDoc {...props}   />}>
                <Drawer.Screen name="HomeDraw" component={MainTabscreenDoc}   />
                <Drawer.Screen name="Home" component={UserListView}  />
                <Drawer.Screen name="Profile" component={ProfileView}   />
                <Drawer.Screen name="notifications" component={NotifcationDoc} />
        </Drawer.Navigator>
    )
}
export default DoctorNavigation
 