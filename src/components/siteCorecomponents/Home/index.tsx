/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Text as NativeText, StyleSheet, View } from 'react-native';
import type { Field } from '@sitecore-jss/sitecore-jss-react-native';
import { Text } from '@sitecore-jss/sitecore-jss-react-native';
import { Paths } from '@/navigation/paths';
import type { StackNavigationProp } from '@react-navigation/stack';

// Define the types for props
interface HomeProps {
  copyright?: string;
  fields: {
    styleguideLink?: Field;
    text?: Field;
    title?: Field;
  };
  navigation: StackNavigationProp<any, any>;
}

const Home: React.FC<HomeProps> = ({ copyright = 'Copyright Sitecore A/S', fields, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text field={fields.title} style={styles.title} />
        <Text
          field={fields.styleguideLink}
          onPress={() => navigation.navigate(Paths.Styleguide)}
          style={styles.styleguideLink}
        />
       
        {/* <RichText field={fields.text} stylesheet={richTextStyles}>
          {fields.text?.editable}
        </RichText> */}
      </View>
      <View style={styles.footer}>
        <NativeText>{copyright}</NativeText>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  body: {
    flex: 1,
    margin: 20,
  },
  container: {
    flex: 1,
  },
  footer: {
    borderTopColor: '#DCDCDC',
    borderTopWidth: 1,
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  styleguideLink: {
    color: '#1191db',
    fontSize: 18,
    marginVertical: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export const richTextStyles = StyleSheet.create({
  p: {
    fontSize: 17,
    marginBottom: 10,
  },
});