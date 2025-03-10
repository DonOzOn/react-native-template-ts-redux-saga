import React from 'react';
import { Text, View } from 'react-native';

// Define types for fields
interface Field {
  editable?: string;
  value?: string;
}

interface Fields {
  content?: Field;
  title?: Field;
}

// Define types for rendering prop
interface Rendering {
  componentName: string;
  fields: Fields;
}

// Define props for the component
interface StyleguideLayoutTabsTabProps {
  fields: Fields;
  rendering: Rendering;
}

const StyleguideLayoutTabsTab: React.FC<StyleguideLayoutTabsTabProps> = ({ fields }) => (
  <View>
    <Text>{fields.content?.value}</Text>
  </View>
);

export default StyleguideLayoutTabsTab;
