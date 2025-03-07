import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Link } from '@sitecore-jss/sitecore-jss-react-native';

import type { Fields } from '../Styleguide-Specimen/Styleguide-Specimen';
import StyleguideSpecimen from '../Styleguide-Specimen/Styleguide-Specimen';


interface Rendering {
  componentName: string;
  fields: Fields;
}

interface StyleguideFieldUsageLinkProps {
  fields: Fields;
  rendering: Rendering;
}

const StyleguideFieldUsageLink: React.FC<StyleguideFieldUsageLinkProps> = ({ fields, rendering }) => (
  <StyleguideSpecimen fields={fields} rendering={rendering}>
    <View style={styles.field}>
      <Text>External link: </Text>
      {/* <Link textStyle={styles.link} field={fields.externalLink} /> */}
    </View>
    <View style={styles.field}>
      <Text>Email link: </Text>
      {/* <Link textStyle={styles.link} field={fields.emailLink} /> */}
    </View>
    <View style={styles.field}>
      <Text>The link component accepts params of its own:</Text>
      {/* <Link
        textStyle={styles.link}
        field={fields.externalLink}
        showLinkTextWithChildrenPresent
        data-otherattributes="pass-through-to-anchor-tag"
      >
        <Text>Another text...</Text>
      </Link> */}
    </View>
  </StyleguideSpecimen>
);

export default StyleguideFieldUsageLink;
const styles = StyleSheet.create({
  field: {
    marginBottom: 10,
  },
  link: {
    color: '#007bff',
  },
});
