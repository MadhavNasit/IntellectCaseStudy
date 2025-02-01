import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from 'navigation/BottomTab';

const AppContainer = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

export default AppContainer;
