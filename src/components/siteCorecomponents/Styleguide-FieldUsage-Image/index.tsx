import React, { FC } from 'react';
import { Text } from 'react-native';
import { Image } from '@sitecore-jss/sitecore-jss-react-native';
import type { Fields } from '../Styleguide-Specimen/Styleguide-Specimen';
import StyleguideSpecimen from '../Styleguide-Specimen/Styleguide-Specimen';

// Định nghĩa kiểu dữ liệu cho hình ảnh
interface FieldImage {
  value: {
    alt?: string;
    src: number | string;
  };
}
interface Rendering {
  componentName: string;
  fields: Fields;
}

interface StyleguideFieldUsageImageProps {
  fields: Fields;
  rendering: Rendering;
}

// Component chính
const StyleguideFieldUsageImage = ({ fields, rendering }: StyleguideFieldUsageImageProps) => {
  console.log('fields', fields)
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
