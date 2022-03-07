import React, {useMemo} from 'react';
import {Text, TextProps, TextStyle} from 'react-native';

import {fonts} from '../assets';

type AppTextType = TextProps & {
  size?: number;
  fontFamily?: 'bold' | 'regular';
  style?: TextStyle | TextStyle[];
};

export const AppText: React.FC<AppTextType> = ({
  children,
  fontFamily = 'regular',
  style,
  size = 16,
  ...props
}) => {
  //func to configure which font family to use

  const fontStyle = useMemo(() => {
    if (fontFamily === 'bold') {
      return {fontFamily: fonts.fontBold};
    }
    return {fontFamily: fonts.fontRegular};
  }, [fontFamily]);

  return (
    <Text style={[style, fontStyle, {fontSize: size}]} {...props}>
      {children}
    </Text>
  );
};
