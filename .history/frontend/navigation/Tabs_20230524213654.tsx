import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled from "styled-components/native";
import { Daily } from "../screens/Daily";
import { Logs } from "../screens/Logs";
import { Settings  from "../screens/Settings";

const Tab = createBottomTabNavigator();
const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Daily" component={Daily} />
    <Tab.Screen name="Logs" component={Logs} />
    <Tab.Screen name="Search" component={Settings} />
  </Tab.Navigator>
);

export default Tabs;
