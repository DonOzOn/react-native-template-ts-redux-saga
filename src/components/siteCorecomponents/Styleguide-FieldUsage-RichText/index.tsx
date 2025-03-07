import React from 'react';
import { Text, View } from 'react-native';
import type { Fields } from '../Styleguide-Specimen/Styleguide-Specimen';
import StyleguideSpecimen from '../Styleguide-Specimen/Styleguide-Specimen';


interface Rendering {
  componentName: string;
  fields: Fields;
}

interface StyleguideFieldUsageRichTextProps {
  fields: Fields;
  rendering: Rendering;
}

const StyleguideFieldUsageRichText: React.FC<StyleguideFieldUsageRichTextProps> = ({ fields, rendering }) => (
  <StyleguideSpecimen fields={fields} rendering={rendering}>
    <View>
      <Text>111</Text>
    </View>
  </StyleguideSpecimen>
);

export default StyleguideFieldUsageRichText;
