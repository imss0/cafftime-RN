import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
<Tab.Navigator>
  <Tab.Screen name="Daily" component={Daily} />
  <Tab.Screen name="Logs" component={Logs} />
  <Tab.Screen name="Settings" component={Home} />
</Tab.Navigator>;
