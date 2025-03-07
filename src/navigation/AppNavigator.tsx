import type { RootStackParamList } from '@/types';

import { createStackNavigator } from '@react-navigation/stack';

import { Paths } from '@/navigation/paths';

import { ExampleScreen, SiteCoreTestScreen, StartupScreen } from '@/screens';

import useTheme from '@/hook/useTheme';
import Styleguide from '@/screens/SiteCoreTest/Styleguide';

const Stack = createStackNavigator<RootStackParamList>();

export function AppNavigator() {
  const { variant } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName={Paths.SiteCoreTestScreen}
      key={variant}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={ExampleScreen} name={Paths.Example} />
      <Stack.Screen component={StartupScreen} name={Paths.Startup} />
      <Stack.Screen component={SiteCoreTestScreen} name={Paths.SiteCoreTestScreen} />
      <Stack.Screen component={Styleguide} name={Paths.Styleguide} />
    </Stack.Navigator>
  );
}
