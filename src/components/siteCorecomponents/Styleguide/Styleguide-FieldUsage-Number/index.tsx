import React from 'react';
import { Text as NText } from 'react-native';
import { getFieldValue, Text } from '@sitecore-jss/sitecore-jss-react-native';
import type { StyleguideFieldProps } from '../Styleguide-Specimen/Styleguide-Specimen';
import StyleguideSpecimen from '../Styleguide-Specimen/Styleguide-Specimen';

const StyleguideFieldUsageNumber: React.FC<StyleguideFieldProps> = ({ fields, rendering }) => {
  const fieldValue = getFieldValue(fields, 'sample1') as number | undefined;

  return (
    <StyleguideSpecimen fields={fields} rendering={rendering}>
      {fields.sample1 && <Text field={fields.sample1} />}
      {fields.sample2 && <Text field={fields.sample2} />}

      <NText>JS value type: {typeof fieldValue}</NText>
      <NText>JS value: {fieldValue}</NText>
    </StyleguideSpecimen>
  );
};

export default StyleguideFieldUsageNumber;
