import type { AuthState } from '@/redux/auth/authSlice';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import useTheme from '@/hook/useTheme';

import { AppNavigator } from './AppNavigator';
import { AuthNavigator } from './AuthNavigator';

function ApplicationNavigator() {
  const { navigationTheme } = useTheme();
  const authInfor = useSelector(
    (state: { auth: AuthState }) => state.auth.authInfor,
  );

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        {authInfor ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default ApplicationNavigator;
