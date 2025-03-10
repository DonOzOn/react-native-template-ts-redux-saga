import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react-native';
import type { Fields } from '../Styleguide-Specimen/Styleguide-Specimen';
import StyleguideSpecimen from '../Styleguide-Specimen/Styleguide-Specimen';

interface Rendering {
  componentName: string;
  fields: Fields;
}

interface StyleguideFieldUsageCustomProps {
  fields: Fields;
  rendering: Rendering; 
}

const StyleguideFieldUsageCustom = ({ fields, rendering }: StyleguideFieldUsageCustomProps) => (
  <StyleguideSpecimen fields={fields} rendering={rendering}>
    {/* Ensure customIntField exists before rendering */}
    {fields.customIntField && <Text field={fields.customIntField} />}
  </StyleguideSpecimen>
);

export default StyleguideFieldUsageCustom;
