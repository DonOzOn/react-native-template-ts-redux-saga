import type {RootStackParamList} from '@/navigation/types';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Paths} from '@/navigation/paths';
import {Example, Startup} from '@/screens';
import useTheme from '@/hook/useTheme';

const Stack = createStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
  const {navigationTheme, variant} = useTheme();

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator key={variant} screenOptions={{headerShown: false}}>
        <Stack.Screen component={Example} name={Paths.Example} />
          <Stack.Screen component={Startup} name={Paths.Startup} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default ApplicationNavigator;
