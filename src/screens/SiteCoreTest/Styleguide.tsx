import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Route from '../Route/Route';
import Layout from '@/Layout';
import type { RootScreenProps } from '@/types';
import type { Paths } from '@/navigation/paths';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
});

function Styleguide({ navigation }: RootScreenProps<Paths.Styleguide>) {
  return <Route
    path="/styleguide"
    render={({ data, refreshControl, switchLanguage }: never) => (
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        refreshControl={refreshControl}
        style={styles.container}
      >
        <Layout navigation={navigation} rendering={data} switchLanguage={switchLanguage} />
      </ScrollView>
    )}
  />
  };

export default Styleguide;
