import  React , {useContext} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabscreen from '../../MainTabScreen';
import DrawerContent from '../../Drawcontent';
import Chat from '../../Bookmark';
import SettingsS from  '../../SettingsScreen'
import SupportS from '../../supportScreen';
import Profile from '../../ProfileScreen'
import { Context } from '../../../Services/Context';

const Drawer = createDrawerNavigator();
const UserNavigation = ({route,navigation})=> {
const {Signin} = useContext(Context)

    return (
        <Drawer.Navigator screenOptions={{headerShown:false,drawerLabelStyle:{marginLeft:-25}}}
         drawerContent={props => <DrawerContent {...props}  />}>
                <Drawer.Screen name="HomeDraw" component={MainTabscreen}   />
                <Drawer.Screen name="Messages" component={Chat}  />
                <Drawer.Screen name="Profile" component={Profile}  />
                <Drawer.Screen name="Settings" component={SettingsS} />
                <Drawer.Screen name="Support" component={SupportS}   />
        </Drawer.Navigator>
    )
}
export default UserNavigation
 