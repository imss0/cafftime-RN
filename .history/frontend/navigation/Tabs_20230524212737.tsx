import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Daily from '../screens/Daily';
import Logs from '../screens/Logs';

const Tab = createBottomTabNavigator();
const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Daily" component={} />
    <Tab.Screen name="Logs" component={} />
    <Tab.Screen name="Search" component={} />
  </Tab.Navigator>
);

export default Tabs;