import type { RootStackParamList } from '@/types';

import { createStackNavigator } from '@react-navigation/stack';

import { Paths } from '@/navigation/paths';

import { ExampleScreen, StartupScreen } from '@/screens';

import useTheme from '@/hook/useTheme';

const Stack = createStackNavigator<RootStackParamList>();

export function AppNavigator() {
  const { variant } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName={Paths.Example}
      key={variant}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={ExampleScreen} name={Paths.Example} />
      <Stack.Screen component={StartupScreen} name={Paths.Startup} />
    </Stack.Navigator>
  );
}
