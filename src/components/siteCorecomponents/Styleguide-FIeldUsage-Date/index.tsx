import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { Fields } from '../Styleguide-Specimen/Styleguide-Specimen';
import StyleguideSpecimen from '../Styleguide-Specimen/Styleguide-Specimen';

interface Rendering {
  componentName: string;
  fields: Fields;
}

interface StyleguideFieldUsageDateProps {
  fields: Fields;
  rendering: Rendering;
}

const StyleguideFieldUsageDate: React.FC<StyleguideFieldUsageDateProps> = ({ fields, rendering }) => {
  return (
    <StyleguideSpecimen fields={fields} rendering={rendering}>
      <View style={styles.field}>
        <Text>Date helper: </Text>
        <Text>{fields.date.value}</Text>
      </View>
      <View style={styles.field}>
        <Text>Date helper (datetime): </Text>
        <Text>{fields.date.value}</Text>
      </View>
      <View style={styles.field}>
        <Text>UTC Date string: </Text>
        <Text>{fields.date.value}</Text>
      </View>
      <View style={styles.field}>
        <Text>Localized Date string (local timezone): </Text>
        <Text>{fields.date.value}</Text>
      </View>
      <View style={styles.field}>
        <Text>Localized DateTime string (local timezone): </Text>
        <Text>{fields.dateTime.value}</Text>
      </View>
    </StyleguideSpecimen>
  );
};

export default StyleguideFieldUsageDate;
const styles = StyleSheet.create({
  field: {
    marginBottom: 8,
  },
});
