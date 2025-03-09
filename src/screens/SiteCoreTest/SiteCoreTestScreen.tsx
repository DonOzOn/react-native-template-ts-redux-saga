import type { Paths } from '@/navigation/paths';
import type { RootScreenProps } from '@/types';

import React from 'react';

import Layout from '@/Layout';
import Route from '../Route/Route';

function SiteCoreTestScreen({ navigation }: RootScreenProps<Paths.SiteCoreTest>) {
  return (
    <Route
      path="/home"
      render={({ data }: never) => <Layout navigation={navigation} rendering={data} />}
    />
  );
}

export default SiteCoreTestScreen;
