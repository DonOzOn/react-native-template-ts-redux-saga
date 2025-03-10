import type { ReactNode } from 'react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



// Define types for props
export interface Fields {
  checkbox?: CheckboxField | Field;
  checkbox2?: CheckboxField | Field;
  customIntField?: Field 
  date: Field;
  dateTime: Field;
  description?: Field;
  emailLink?: Field | LinkField;
  externalLink?: Field | LinkField;
  heading?: Field;
  sample?: Field;
  sample1?: Field;
  sample2?: Field;
}
// Define types for fields
export interface Field {
  editable?: string;
  value: string;
}
// Define types for field structures
interface CheckboxField {
  value: boolean;
}
interface Rendering {
  componentName: string;
}

interface LinkField {
  href?: string;
  text?: string;
}


interface StyleguideSpecimenProps {
  children: ReactNode;
  fields: Fields;
  rendering: Rendering;
}

const StyleguideSpecimen= ({ children, fields, rendering } : StyleguideSpecimenProps) => (
  <View style={styles.wrapper}>
    {/* <Text style={styles.heading} field={fields.heading} /> */}

    <Text style={styles.section}>
      Implementation:{' '}
      {/* <Text style={styles.filepath}>/src/components/{rendering.componentName}/index.tsx</Text> */}
    </Text>
    <Text style={styles.section}>
      Definition:{' '}
      <Text style={styles.filepath}>
        {/* /sitecore/definitions/components/{rendering.componentName}.sitecore.ts */}  
      </Text>
    </Text>

    <View style={styles.example}>{children}</View>
  </View>
);

export default StyleguideSpecimen;

const styles = StyleSheet.create({
  example: {
    borderColor: '#dee2e6',
    borderWidth: 1,
    padding: 10,
  },
  filepath: {
    color: '#e83e8c',
  },
  heading: {
    fontSize: 23,
    marginBottom: 10,
  },
  section: {
    fontSize: 15,
    marginBottom: 8,
  },
  wrapper: {
    flex: 1,
    margin: 10,
    marginBottom: 15,
  },
});

