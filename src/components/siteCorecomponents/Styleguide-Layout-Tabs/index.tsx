/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Field, Fields } from '../Styleguide-Specimen/Styleguide-Specimen';
import type { TextStyle } from 'react-native';

import { Placeholder, Text } from '@sitecore-jss/sitecore-jss-react-native';
import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import StyleguideSpecimen from '../Styleguide-Specimen/Styleguide-Specimen';

// Define types for fields

interface TabFields {
  content: Field;
  title: Field;
}

interface TabRendering {
  fields: TabFields;
}

interface Rendering {
  componentName: string;
  fields: Fields;
}

interface StyleguideLayoutTabsProps {
  fields: Fields;
  rendering: Rendering;
}

const StyleguideLayoutTabs = ({
  fields,
  rendering,
}: StyleguideLayoutTabsProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const renderTab = (tab: TabRendering, index: number) => {
    const style: TextStyle =
      index === activeTabIndex ? styles.tabTitleActive : styles.tabTitle;

    return (
      <TouchableWithoutFeedback
        key={index}
        onPress={() => setActiveTabIndex(index)}
      >
        <Text field={tab.fields.title} style={style} />
      </TouchableWithoutFeedback>
    );
  };

  const render = (components: any, data: TabRendering[], props: any) => (
    <>
      <View style={styles.tabs}>{data.map(renderTab)}</View>
      <Text
        field={data[activeTabIndex]?.fields.content}
        style={styles.content}
      />
    </>
  );

  const renderEmpty = (components: any) => <View>{components}</View>;
  return (
    <StyleguideSpecimen fields={fields} rendering={rendering}>
      <Placeholder
        name="jss-tabs"
        render={render}
        renderEmpty={renderEmpty}
        rendering={rendering}
      />
    </StyleguideSpecimen>
  );
};

export default StyleguideLayoutTabs;
import { StyleSheet } from 'react-native';

const tabCommonStyles = {
  borderWidth: 1,
  padding: 10,
  top: 1,
};

const styles =  StyleSheet.create({
  content: {
    borderColor: '#dee2e6',
    borderWidth: 1,
    fontSize: 15,
    padding: 15,
    paddingBottom: 15,
  },
  tabs: {
    flexDirection: 'row',
  },
  tabTitle: {
    borderColor: '#fff',
    color: '#007bff',
    ...tabCommonStyles,
  },
  tabTitleActive: {
    borderBottomColor: '#fff',
    borderColor: '#dee2e6',
    color: '#007bff',
    zIndex: 1,
    ...tabCommonStyles,
  },
});
