import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabNavigator} from './BottomTabNavigator';

export const AppNavContainer: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
