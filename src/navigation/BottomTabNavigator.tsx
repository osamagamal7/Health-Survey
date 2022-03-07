import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {History} from '../screen/History';
import {Home} from '../screen/Home';
import {MainBottomTabParamList} from '../types';

const Tab = createBottomTabNavigator<MainBottomTabParamList>();

export const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
};
