import React from 'react';
import {TextProps, ViewStyle, TouchableOpacity} from 'react-native';

type AppButtonType = TextProps & {
  testID?: string;
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
};

export const AppButton: React.FC<AppButtonType> = ({
  children,
  testID,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity testID={testID} style={[style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};
