import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Tabs = () => (<Tab.Navigator>
  <Tab.Screen name="Daily" />
  <Tab.Screen name="Logs" />
  <Tab.Screen name="Daily" />
</Tab.Navigator>)