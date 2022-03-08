import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

import {AppInput} from '../components/AppInput';
import {AppText} from '../components/AppText';
import {Screen} from '../components/Screen';
import {theme} from '../assets';

export const Home: React.FC = () => {
  const [sleepRange, setSleepRange] = useState<string | undefined>();
  const [skinRange, setSkinRange] = useState<string | undefined>();

  const submitFormHandler = () => {
    // if one of the inputs is empty
    if (!sleepRange || !skinRange) {
      return;
    }

    setSkinRange('');
    setSleepRange('');
  };
  return (
    <Screen style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flex: 1}}
        keyboardShouldPersistTaps="never">
        <AppText fontFamily="bold" style={styles.headLine} size={25}>
          Health Survey
        </AppText>
        <View style={styles.form}>
          <AppText size={20}>How was your sleep last night?</AppText>
          <AppInput
            keyboardType="numeric"
            maxLength={2}
            onChangeText={val => setSleepRange(val)}
            placeholder="Please Select a Number From 0 - 10"
            style={styles.input}
            value={sleepRange}
          />

          <AppText size={20}>How good is your skin condition?</AppText>
          <AppInput
            keyboardType="numeric"
            maxLength={2}
            onChangeText={val => setSkinRange(val)}
            placeholder="Please Select a Number From 0 - 10"
            style={styles.input}
            value={skinRange}
          />
          <TouchableOpacity style={styles.btn} onPress={submitFormHandler}>
            <AppText size={18} style={styles.submitBtn}>
              Submit
            </AppText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: theme.colorGreen,
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    width: '90%',
  },
  form: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headLine: {
    alignSelf: 'center',
    marginVertical: 25,
    color: theme.colorBlue,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    height: 40,
    marginVertical: 12,
    paddingHorizontal: 12,
    width: '90%',
  },
  submitBtn: {
    alignSelf: 'center',
    color: theme.colorWhite,
  },
});
