import type { PropsWithChildren } from 'react';
import type { SafeAreaViewProps } from 'react-native-safe-area-context';

import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ErrorBoundary from './ErrorBoundary';
import DefaultError from './DefaultError';
import useTheme from '@/hook/useTheme';



type Props = PropsWithChildren<
  {
    isError?: boolean;
    onResetError?: () => void;
  } & Omit<SafeAreaViewProps, 'mode'>
>;

function SafeScreen({
  children = undefined,
  isError = false,
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
    </SafeAreaView>
  );
}

export default SafeScreen;
