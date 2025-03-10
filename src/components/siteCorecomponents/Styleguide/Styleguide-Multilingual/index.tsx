/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { Fields } from '../Styleguide-Specimen/Styleguide-Specimen';
import StyleguideSpecimen from '../Styleguide-Specimen/Styleguide-Specimen';


// Define props for the component
interface StyleguideMultilingualProps {
  fields: Fields;
  rendering: any; // You may define a more specific type for rendering if needed
  switchLanguage: (language: string) => void;
}

const StyleguideMultilingual: React.FC<StyleguideMultilingualProps> = ({
  fields,
  rendering,
  switchLanguage,
}) => (
  <StyleguideSpecimen fields={fields} rendering={rendering}>
    <View>
      <Text onPress={() => switchLanguage('en')} style={styles.lang}>
        Switch to en
      </Text>
      <Text onPress={() => switchLanguage('vi')} style={styles.lang}>
        Switch to vi
      </Text>
    </View>
  </StyleguideSpecimen>
);

export default StyleguideMultilingual;
const styles = StyleSheet.create({
  lang: {
    borderColor: 'green',
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 15,
    marginBottom: 5,
    marginTop: 5,
    padding: 10,
    width: '50%',
  },
});
