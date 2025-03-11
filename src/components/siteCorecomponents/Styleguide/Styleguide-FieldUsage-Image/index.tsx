import React from 'react';
import { Text } from 'react-native';
import StyleguideSpecimen from '../Styleguide-Specimen/Styleguide-Specimen';
import { type ComponentFields, type ComponentRendering, Image } from '@sitecore-jss/sitecore-jss-react-native';

interface StyleguideFieldUsageImageProps {
  fields: ComponentFields;
  rendering: ComponentRendering;
}

// Component chính
const StyleguideFieldUsageImage = ({ fields, rendering }: StyleguideFieldUsageImageProps) => {
  return(
  <StyleguideSpecimen fields={fields} rendering={rendering}>
    <Text>Plain image</Text>
    {fields.sample1 && <Image height="51" media={fields.sample1} width="204" />}
    
    <Text>Advanced image</Text>
    {fields.sample2 && (
      <Image height="50" imageUrlParams={{ mh: 50, mw: 100 }} media={fields.sample2} width="92" />
    )}
  </StyleguideSpecimen>
)};

export default StyleguideFieldUsageImage;
