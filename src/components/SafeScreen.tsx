import type { PropsWithChildren } from 'react';
import type { SafeAreaViewProps } from 'react-native-safe-area-context';

import { ActivityIndicator, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import useTheme from '@/hook/useTheme';

import DefaultError from './DefaultError';
import ErrorBoundary from './ErrorBoundary';
import ErrorModal from './ErrorModal';

type Props = PropsWithChildren<
  {
    error?: string;
    isError?: boolean;
    loading?: boolean;
    onCloseErrorModal?: () => void;
    onResetError?: () => void;
  } & Omit<SafeAreaViewProps, 'mode'>
>;

function SafeScreen({
  children = undefined,
  error = undefined,
  isError = false,
  loading = false,
  onCloseErrorModal = undefined,
  onResetError = undefined,
  style,
  ...props
}: Props) {
  const { layout, navigationTheme, variant } = useTheme();




  return (
    <SafeAreaView {...props} mode="padding" style={[layout.flex_1, style]}>
      <StatusBar
        backgroundColor={navigationTheme.colors.background}
        barStyle={variant === 'dark' ? 'light-content' : 'dark-content'}
      />
      <ErrorBoundary onReset={onResetError}>
        {isError ? <DefaultError onReset={onResetError} /> : children}
      </ErrorBoundary>
      {loading && (
        <View
          style={[
            layout.absolute,
            layout.itemsCenter,
            layout.justifyCenter,
            layout.fullWidth,
            layout.fullHeight,
            { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
          ]}
        >
          <ActivityIndicator color={'white'} size="large" />
        </View>
      )}

      <ErrorModal
        errorMessage={error}
        onClose={onCloseErrorModal}
        visible={!!error}
      />
    </SafeAreaView>
  );
}

export default SafeScreen;
