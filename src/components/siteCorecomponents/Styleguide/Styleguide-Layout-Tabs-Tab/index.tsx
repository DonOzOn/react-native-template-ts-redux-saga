import React from 'react';
import { Text, View } from 'react-native';
import type { StyleguideFieldProps } from '../Styleguide-Specimen/Styleguide-Specimen';
import type { Field } from '@sitecore-jss/sitecore-jss-react-native';

const StyleguideLayoutTabsTab: React.FC<StyleguideFieldProps> = ({ fields }) => (
  <View>
    <Text>{(fields.content as Field)?.value.toString()}</Text>
  </View>
);

export default StyleguideLayoutTabsTab;
