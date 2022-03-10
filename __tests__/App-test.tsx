/**
 * @format
 */

import React from 'react';

import {render, fireEvent} from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AppButton} from '../src/components/AppButton';
import {AppInput} from '../src/components/AppInput';
import {getAppData} from '../src/context/Provider';

describe('AsyncStorage', () => {
  beforeEach(async () => {
    await AsyncStorage.clear();
  });
  it('should run getItem with our key from AsyncStorage ', async () => {
    await getAppData();
    expect(AsyncStorage.getItem).toBeCalledWith('healthRecord');
  });
});

describe('<Input />', () => {
  it('checks if the input is found', async () => {
    const inputTestID = 'sleepInput';

    const {getByTestId} = await render(<AppInput testID="sleepInput" />);

    const textInput = getByTestId(inputTestID);

    expect(textInput).toBeDefined();
  });

  it('types in the sleep range input', () => {
    const inputTestID = 'sleepInput';
    const onSelect = jest.fn();

    const {getByTestId} = render(
      <AppInput onChangeText={onSelect} testID="sleepInput" />,
    );
    fireEvent.changeText(getByTestId(inputTestID), '8');
    expect(onSelect).toHaveBeenCalled();
  });

  it('types in the skin range input', () => {
    const inputTestID = 'skinInput';
    const onSelect = jest.fn();

    const {getByTestId} = render(
      <AppInput onChangeText={onSelect} testID="skinInput" />,
    );
    fireEvent.changeText(getByTestId(inputTestID), '7');
    expect(onSelect).toHaveBeenCalled();
  });
});

describe('<Button />', () => {
  it('Calls onPress', async () => {
    const onPress = jest.fn();

    const testID = 'submitBtn';
    const {getByTestId} = await render(
      <AppButton testID={testID} onPress={onPress} />,
    );
    const button = getByTestId(testID);
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
