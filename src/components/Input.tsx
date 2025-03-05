import type { TextInputProps } from 'react-native';

import React from 'react';
import { TextInput } from 'react-native';

import useTheme from '@/hook/useTheme';

interface CustomTextInputProps extends TextInputProps {}

const Input = (props: CustomTextInputProps) => {
  const { borders, gutters } = useTheme();
  return (
    <TextInput
      style={[
        borders.rounded_4,
        gutters.padding_8,
        borders.gray100,
        borders.w_1,
      ]}
      {...props}
    />
  );
};

export default Input;
