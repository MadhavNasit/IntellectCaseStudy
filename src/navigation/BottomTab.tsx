import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DailyScreen, HomeScreen, SettingsScreen } from 'screen';

export type TabParamsList = {
  home: undefined;
  daily: undefined;
  settings: undefined;
};

/**
 * Tab Navigator Instance
 */
const Tab = createBottomTabNavigator<TabParamsList>();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="daily" component={DailyScreen} />
      <Tab.Screen name="settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
