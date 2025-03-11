import React from 'react';
import { Text, View } from 'react-native';
import type { StyleguideFieldProps } from '../Styleguide-Specimen/Styleguide-Specimen';
import StyleguideSpecimen from '../Styleguide-Specimen/Styleguide-Specimen';

const StyleguideFieldUsageRichText: React.FC<StyleguideFieldProps> = ({ fields, rendering }) => (
  <StyleguideSpecimen fields={fields} rendering={rendering}>
    <View>
      <Text>111</Text>
    </View>
  </StyleguideSpecimen>
);

export default StyleguideFieldUsageRichText;
