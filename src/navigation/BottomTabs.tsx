/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AppState } from '@/redux/app/appSlice';
import type {
  BottomTabItem,
  RootScreenProps,
  RootStackParamList,
} from '@/types';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { memo, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getRouteData } from '@/data/siteCoreTestService';
import { setListTab } from '@/redux/app/appSlice';

import { ExampleScreen, SiteCoreTestScreen } from '@/screens';

import useTheme from '@/hook/useTheme';

import { Paths } from './paths';

const Tab = createBottomTabNavigator<RootStackParamList>();

const screenMap: any= {
    Example: ExampleScreen,
    SiteCoreTest: SiteCoreTestScreen,
};

const screenName: any = {
  Example: Paths.Example,
  SiteCoreTest: Paths.SiteCoreTest,
};
// Define the BottomTabs Component
function BottomTabs({ navigation }: RootScreenProps<Paths.Main>) {
  const dispatch = useDispatch();
  const { listTab } = useSelector((state: { app: AppState }) => state.app);

  useEffect(() => {
    getRouteData('/', { language: 'en' })
      .then((data: any) => {
        const tabs = data.placeholders['jss-main'][0].fields.tabs;
        if (Array.isArray(tabs)) {
          dispatch(setListTab(tabs));
        }
      })
      .catch((error_) => {});
  }, [dispatch]);

  const { colors } = useTheme();
  if (!listTab || listTab.length === 0) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <Tab.Navigator
      screenOptions={(route: any): any => {
        return {
          headerShown: false, // Hide headers for tab screens
          tabBarActiveTintColor: 'red',
          tabBarHideOnKeyboard: true,

          tabBarInactiveTintColor: 'red',
          tabBarItemStyle: {
            alignItems: 'center',
            backgroundColor: colors.white,
            justifyContent: 'center',
          }, // Inactive tab color
          // tabBarLabelStyle: {
          //   display: 'none',
          // },

          tabBarStyle: {
            backgroundColor: colors.red500,
            borderTopWidth: 0,
            height: 50,
            margin: 0,
            paddingBottom: 0,
          },
        };
      }}
    >
      {listTab.map((tab: BottomTabItem) => {
        const title = tab.title as keyof typeof screenMap;
        return (
          <Tab.Screen
            component={screenMap[title]} // Gán đúng component
            key={tab.title}
            name={screenName[title]}
            options={{
              tabBarIcon: ({ color, size }) => <Text>*</Text>,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

export default memo(BottomTabs);
