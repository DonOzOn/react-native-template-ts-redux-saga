import type { RootStackParamList } from '@/types';
import { createNavigationContainerRef } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';


// Create a navigation ref
export const navigationRef = createNavigationContainerRef<RootStackParamList>();

/**
 * Navigate to a specific screen.
 * @param {keyof RootStackParamList} name - The screen name to navigate to.
 * @param {RootStackParamList[keyof RootStackParamList]} params - (Optional) Parameters to pass to the screen.
 */
export function navigate<RouteName extends keyof RootStackParamList>(
  name: RouteName,
  params?: RootStackParamList[RouteName]
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

/**
 * Go back to the previous screen.
 */
export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

/**
 * Replace the current screen with a new one.
 * @param {keyof RootStackParamList} name - The screen name to replace with.
 * @param {RootStackParamList[keyof RootStackParamList]} params - (Optional) Parameters to pass to the screen.
 */
export function replace<RouteName extends keyof RootStackParamList>(
  name: RouteName,
  params?: RootStackParamList[RouteName]
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name as string, params));
  }
}

/**
 * Reset the navigation stack to a new state.
 * @param {Array<NavigationRoute>} routes - An array of routes to reset to.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function reset(routes: Array<any>) {
    if (navigationRef.isReady()) {
      navigationRef.reset({
        index: 0,
        routes ,
      });
    }
  }