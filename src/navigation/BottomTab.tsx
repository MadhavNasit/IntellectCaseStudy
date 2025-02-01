import React, { useCallback } from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';

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
import { useTranslation } from 'react-i18next';

/**
 * Type definition for the Bottom Tab Navigator params.
 */
export type TabParamsList = {
  home: undefined;
  daily: undefined;
  settings: undefined;
};

/**
 * Tab Navigator Instance
 */
const Tab = createBottomTabNavigator<TabParamsList>();

const useScreenOptions = () => {
  const { colors } = useTheme();

  return {
    headerShown: false,
    tabBarStyle: {
      backgroundColor: colors.primary,
    },
    tabBarActiveTintColor: colors.tab_active,
    tabBarInactiveTintColor: colors.tab_inactive,
  };
};

/**
 * BottomTab Component - Handles bottom navigation between screens.
 */
const BottomTab = () => {
  const screenOptions = useScreenOptions();

  // Translation hook
  const { t } = useTranslation();

  /**
   * Generates screen options for each tab.
   *
   * @param title - Title of the screen.
   * @param icon - Default icon component.
   * @param iconFilled - Icon component when the tab is active.
   * @returns Configuration object for the tab screen.
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
      title,
      tabBarIcon: ({ focused, color, size }) => (
        <Icon icon={focused ? iconFilled : icon} size={size} color={color} />
      ),
    }),
    [],
  );

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={generateScreenOptions({
          title: t('home.title'),
          icon: <HomeIcon />,
          iconFilled: <HomeFilledIcon />,
        })}
      />
      <Tab.Screen
        name="daily"
        component={DailyScreen}
        options={generateScreenOptions({
          title: t('daily.title'),
          icon: <DiamondIcon />,
          iconFilled: <DiamondFilledIcon />,
        })}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={generateScreenOptions({
          title: t('settings.title'),
          icon: <SettingsIcon />,
          iconFilled: <SettingsFilledIcon />,
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
