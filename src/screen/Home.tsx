import React from 'react';
import {View, StyleSheet} from 'react-native';
import {theme} from '../assets';
import {AppText} from '../components/AppText';
import {Screen} from '../components/Screen';

export const Home: React.FC = () => {
  return (
    <Screen style={{flex: 1}}>
      <AppText fontFamily="bold" style={styles.headLine} size={25}>
        Health Survey
      </AppText>
    </Screen>
  );
};

const styles = StyleSheet.create({
  headLine: {
    alignSelf: 'center',
    marginVertical: 25,
    color: theme.colorBlue,
  },
});
