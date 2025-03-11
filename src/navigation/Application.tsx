import type { AuthState } from '@/redux/auth/authSlice';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import useTheme from '@/hook/useTheme';

import { AuthNavigator } from './AuthNavigator';
import { AppNavigator } from './AppNavigator';

function ApplicationNavigator() {
  const { navigationTheme } = useTheme();
  const authInfor = useSelector(
    (state: { auth: AuthState }) => state.auth.authInfor,
  );
  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={{
          ...navigationTheme,
          fonts: {
            bold: {
              fontFamily: 'DMSans-Bold',
              fontWeight: 'bold',
            },
            heavy: {
              fontFamily: 'DMSans-ExtraBold',
              fontWeight: 'bold',
            },
            medium: { fontFamily: 'DMSans-Medium', fontWeight: '500' },
            regular: { fontFamily: 'DMSans-Regular', fontWeight: 'normal' },
          },
        }}
      >
        {authInfor ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default ApplicationNavigator;
