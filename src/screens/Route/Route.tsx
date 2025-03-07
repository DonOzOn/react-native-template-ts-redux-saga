/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from 'react';
import { RefreshControl, Text, View } from 'react-native';
import { SitecoreContext } from '@sitecore-jss/sitecore-jss-react-native';
import { getRouteData } from '@/data/siteCoreTestService';
import componentFactory from '@/components/componentFactory';

type RouterProps = {
  path: string,
  render: any
}

const Route = ({ path, render }:RouterProps) => {
  const [lang, setLang] = useState('en');
  const [loading, setLoading] = useState(true);
  const [route, setRoute] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  // Fetch data
  const loadData = useCallback(() => {
    setLoading(true);
    setError(null);

    getRouteData(path, { language: lang })
      .then((data) => {
        setRoute(data);
        setLoading(false);
      })
      .catch((error_) => {
        setError(error_);
        setLoading(false);
      });
  }, [path, lang]);

  // Initial fetch on mount & when language changes
  useEffect(() => {
    if (path) {loadData();}
  }, [path, lang, loadData]);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>{error.toString()}</Text>
      </View>
    );
  }

  const refreshControl = <RefreshControl onRefresh={loadData} refreshing={loading} />;
  return (
    <SitecoreContext componentFactory={componentFactory}>
      {render({ data: route, refreshControl, switchLanguage: setLang })}
    </SitecoreContext>
  );
};

export default Route;
