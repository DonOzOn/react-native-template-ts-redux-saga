import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StyleguideSpecimen from '../Styleguide-Specimen/Styleguide-Specimen';
import type { ComponentFields, ComponentRendering, Field } from '@sitecore-jss/sitecore-jss-react-native';


interface StyleguideFieldUsageDateProps {
  fields: ComponentFields;
  rendering: ComponentRendering;
}

const StyleguideFieldUsageDate: React.FC<StyleguideFieldUsageDateProps> = ({ fields, rendering }) => {
  return (
    <StyleguideSpecimen fields={fields} rendering={rendering}>
      <View style={styles.field}>
        <Text>Date helper: </Text>
        <Text> {(fields.date as Field)?.value.toString()}</Text>
      </View>
      <View style={styles.field}>
        <Text>Date helper (datetime): </Text>
        <Text>{(fields.date as Field)?.value.toString()}</Text>
      </View>
      <View style={styles.field}>
        <Text>UTC Date string: </Text>
        <Text>{(fields.date as Field)?.value.toString()}</Text>
      </View>
      <View style={styles.field}>
        <Text>Localized Date string (local timezone): </Text>
        <Text>{(fields.date as Field)?.value.toString()}</Text>
      </View>
      <View style={styles.field}>
        <Text>Localized DateTime string (local timezone): </Text>
        <Text>{(fields.date as Field)?.value.toString()}</Text>
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
