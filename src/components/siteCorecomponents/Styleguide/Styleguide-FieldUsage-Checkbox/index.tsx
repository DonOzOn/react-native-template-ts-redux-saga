import React from 'react';
import { Text } from 'react-native';
import type { StyleguideFieldProps } from '../Styleguide-Specimen/Styleguide-Specimen';
import StyleguideSpecimen from '../Styleguide-Specimen/Styleguide-Specimen';


const StyleguideFieldUsageCheckbox = ({ fields, rendering }: StyleguideFieldProps) => {
  const showState = (field: string) => {
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
