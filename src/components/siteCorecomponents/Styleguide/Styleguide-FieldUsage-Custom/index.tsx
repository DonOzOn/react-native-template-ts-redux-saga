import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react-native';
import type { StyleguideFieldProps } from '../Styleguide-Specimen/Styleguide-Specimen';
import StyleguideSpecimen from '../Styleguide-Specimen/Styleguide-Specimen';


const StyleguideFieldUsageCustom = ({ fields, rendering }: StyleguideFieldProps) => (
  <StyleguideSpecimen fields={fields} rendering={rendering}>
    {/* Ensure customIntField exists before rendering */}
    {fields.customIntField && <Text field={fields.customIntField} />}
  </StyleguideSpecimen>
);

export default StyleguideFieldUsageCustom;
