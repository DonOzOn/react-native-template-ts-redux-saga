import type { RootStackParamList } from '@/navigation/types';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Paths } from '@/navigation/paths';

import { ExampleScreen, LoginScreen, StartupScreen } from '@/screens';

import useTheme from '@/hook/useTheme';

const Stack = createStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
  const { navigationTheme, variant } = useTheme();

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator
          initialRouteName={Paths.Login}
          key={variant}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen component={ExampleScreen} name={Paths.Example} />
          <Stack.Screen component={StartupScreen} name={Paths.Startup} />
          <Stack.Screen component={LoginScreen} name={Paths.Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default ApplicationNavigator;
