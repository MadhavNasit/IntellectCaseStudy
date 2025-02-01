import React, { useCallback } from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { DailyScreen, HomeScreen, SettingsScreen } from 'screen';
import { Icon } from 'component';
import {
  DiamondFilledIcon,
  DiamondIcon,
  HomeFilledIcon,
  HomeIcon,
  SettingsFilledIcon,
  SettingsIcon,
} from 'asset/svgs';

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
  /**
   * Generate screen options for tab navigator
   *
   * @param title - string: Title of the screen.
   * @param icon - JSX.Element | IconTypes: Icon element or icon type.
   */
  const generateScreenOptions = useCallback(
    ({
      title,
      icon,
      iconFilled,
    }: {
      title: string;
      icon: JSX.Element;
      iconFilled: JSX.Element;
    }): BottomTabNavigationOptions => ({
      title: title,
      tabBarIcon: ({ focused, color, size }) => (
        <Icon icon={focused ? iconFilled : icon} size={size} color={color} />
      ),
    }),
    [],
  );

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={generateScreenOptions({
          title: 'Home',
          icon: <HomeIcon />,
          iconFilled: <HomeFilledIcon />,
        })}
      />
      <Tab.Screen
        name="daily"
        component={DailyScreen}
        options={generateScreenOptions({
          title: 'Daily',
          icon: <DiamondIcon />,
          iconFilled: <DiamondFilledIcon />,
        })}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={generateScreenOptions({
          title: 'Home',
          icon: <SettingsIcon />,
          iconFilled: <SettingsFilledIcon />,
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
