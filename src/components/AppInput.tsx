import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

interface AppInputType extends TextInputProps {
  testID?: string;
}

export const AppInput: React.FC<AppInputType> = ({style, testID, ...props}) => {
  return <TextInput {...props} style={style} testID={testID} />;
};
