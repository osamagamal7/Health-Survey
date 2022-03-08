import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HistoryIcon, HomeIcon} from '../components/icons';
import {History} from '../screen/History';
import {Home} from '../screen/Home';
import {MainBottomTabParamList} from '../types';
import {theme} from '../assets';

const Tab = createBottomTabNavigator<MainBottomTabParamList>();

export const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'Home') {
            return <HomeIcon color={focused ? theme.colorBlue : '#8E9AAF'} />;
          }
          if (route.name === 'History') {
            return (
              <HistoryIcon color={focused ? theme.colorBlue : '#8E9AAF'} />
            );
          }
          return null;
        },
      })}
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
};
