import { Text as RNText, TextProps } from 'react-native';
import React from 'react';

const defaultFont = 'InterVariable, Inter, sans-serif';

const Text: React.FC<TextProps> = ({ style, ...props }) => {
  return <RNText {...props} style={[{ fontFamily: defaultFont }, style]} />;
};

export default Text;
