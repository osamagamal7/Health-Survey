import React, {FC} from 'react';

import {SafeAreaView, StyleSheet, StatusBar, ViewStyle} from 'react-native';

type ScreenType = {
  style?: ViewStyle | ViewStyle[];
  children: React.ReactNode;
};

export const Screen: FC<ScreenType> = ({children, style}) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
});
