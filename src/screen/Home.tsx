import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import {AppInput} from '../components/AppInput';
import {AppText} from '../components/AppText';
import {AppButton} from '../components/AppButton';
import {Screen} from '../components/Screen';
import {theme} from '../assets';
import {useAppContext} from '../context/Provider';

export const Home: React.FC = () => {
  const [sleepRange, setSleepRange] = useState<string | undefined>();
  const [skinRange, setSkinRange] = useState<string | undefined>();
  const {handleSelectedRange} = useAppContext();

  const submitFormHandler = () => {
    // if one of the inputs is empty
    if (!sleepRange || !skinRange) {
      return;
    }
    handleSelectedRange(+sleepRange, +skinRange);
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
            testID="sleepInput"
            value={sleepRange}
          />

          <AppText size={20}>How good is your skin condition?</AppText>
          <AppInput
            keyboardType="numeric"
            maxLength={2}
            onChangeText={val => setSkinRange(val)}
            placeholder="Please Select a Number From 0 - 10"
            style={styles.input}
            testID="skinInput"
            value={skinRange}
          />

          <AppButton
            style={styles.btn}
            testID="submitBtn"
            onPress={submitFormHandler}>
            <AppText size={18} style={styles.submitBtn}>
              Submit
            </AppText>
          </AppButton>
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
