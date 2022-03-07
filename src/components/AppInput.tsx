import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

export const AppInput: React.FC<TextInputProps> = ({style, ...props}) => {
  return <TextInput {...props} style={style} />;
};
