import type { StackScreenProps } from '@react-navigation/stack';
import type { Paths } from '@/navigation/paths';

export type RootStackParamList = {
  [Paths.Auth]: undefined;
  [Paths.Example]: undefined;
  [Paths.Login]: undefined;
  [Paths.Main]: undefined;
  [Paths.SiteCoreTest]: undefined;
  [Paths.Startup]: undefined;
  [Paths.Styleguide]: undefined;
};

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;
