import React from 'react';
import type { TextStyle} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import type { Fields } from '../Styleguide-Specimen/Styleguide-Specimen';
import StyleguideSpecimen from '../Styleguide-Specimen/Styleguide-Specimen';

// Define interfaces for fields and params


interface Params {
  columns?: string;
  cssClass?: string;
  useCallToAction?: string;
}

interface Rendering {
  componentName: string;
  fields: Fields;
  params: Params;
}

interface StyleguideComponentParamsProps {
  fields: Fields;
  params: Params;
  rendering: Rendering;
}

const StyleguideComponentParams = ({ fields, params, rendering }: StyleguideComponentParamsProps) => {
  const { columns, cssClass, useCallToAction } = params;

  const colsArr = columns ? [...Array(Number.parseInt(columns, 10))] : [];

  return (
    <StyleguideSpecimen fields={fields} rendering={rendering}>
      <Text style={styles[cssClass ?? '']}>
        The CSS class of this paragraph ({cssClass}) is set using a param
      </Text>
      <Text>
        {/* Note that all params come in as string values, like this boolean-like param here: */}
        useCallToAction param: {useCallToAction}
        {'\n'}param type: {typeof useCallToAction}
      </Text>
      {useCallToAction === 'true' && (
        <Text style={styles.callToAction}>the call to action is shown</Text>
      )}

      <Text>columns param: {columns}</Text>

      {colsArr.length > 0 && (
        <View style={styles.columns}>
          {colsArr.map((_, i) => (
            <Text key={`col-${i}`}>Column {i}</Text>
          ))}
        </View>
      )}
    </StyleguideSpecimen>
  );
};

export default StyleguideComponentParams;
const styles : { [key: string]: TextStyle }  = StyleSheet.create({
  callToAction: {
    backgroundColor: '#d1ecf1',
    borderColor: '#bee5eb',
    borderRadius: 5,
    borderWidth: 1,
    color: '#0c5460',
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  columns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstParagraph: {
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb',
    borderRadius: 5,
    borderWidth: 1,
    color: '#155724',
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
