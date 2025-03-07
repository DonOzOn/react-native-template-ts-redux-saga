import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@sitecore-jss/sitecore-jss-react-native';
import type { Fields } from '../Styleguide-Specimen/Styleguide-Specimen';
import StyleguideSpecimen from '../Styleguide-Specimen/Styleguide-Specimen';

interface Rendering {
  componentName: string;
  fields: Fields;
}

interface StyleguideFieldUsageTextProps {
  fields: Fields;
  rendering: Rendering;
}

const StyleguideFieldUsageText= ({ fields, rendering }: StyleguideFieldUsageTextProps) => (
  <StyleguideSpecimen fields={fields} rendering={rendering}>
    <View>
      {fields.sample && <Text field={fields.sample} style={styles.text} />}
      {fields.sample2 && <Text field={fields.sample2} style={styles.text} />}
    </View>
  </StyleguideSpecimen>
);

export default StyleguideFieldUsageText;
const styles =  StyleSheet.create({
  text: {
    fontSize: 16,
  },
});
