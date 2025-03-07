import React from 'react';
import { Text } from 'react-native';
import type {  Fields } from '../Styleguide-Specimen/Styleguide-Specimen';
import StyleguideSpecimen from '../Styleguide-Specimen/Styleguide-Specimen';

interface Rendering {
  componentName: string;
  fields: Fields;
}

interface StyleguideFieldUsageCheckboxProps {
  fields: Fields;
  rendering: Rendering;
}

const StyleguideFieldUsageCheckbox = ({ fields, rendering }: StyleguideFieldUsageCheckboxProps) => {
  const showState = (field: keyof Fields) => {
    const fieldData = fields[field];
  
    if (fieldData && "value" in fieldData) {
      return <Text>{field} is {fieldData.value.toString()}</Text>;
    }
  
    return <Text></Text>;
  };

  return (
    <StyleguideSpecimen fields={fields} rendering={rendering}>
      {showState('checkbox')}
      {showState('checkbox2')}
    </StyleguideSpecimen>
  );
};

export default StyleguideFieldUsageCheckbox;
