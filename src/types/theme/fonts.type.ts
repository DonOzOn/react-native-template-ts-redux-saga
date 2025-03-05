import type {
  ArrayValue,
  RemoveBeforeSeparator,
} from './common.type';
import type { UnionConfiguration } from './config.type';
import type { config } from '@/config/theme/_config';
import type { staticFontStyles } from '@/config/theme/fonts';
export type FontFamily =
  | 'QuicksandBold'
  | 'QuicksandLight'
  | 'QuicksandMedium'
  | 'QuicksandRegular'
  | 'QuicksandSemiBold';
type FontStylesKeys = `size_${ArrayValue<typeof config.fonts.sizes>}_${FontFamily}`;

export type FontStyles = {
  [key in FontStylesKeys]: {
    fontFamily: string;
    fontSize: number;
  };
};

type FontColorsKeys = `${keyof UnionConfiguration['fonts']['colors']}`;

export type FontColors = {
  [key in FontColorsKeys]: RemoveBeforeSeparator<key> extends keyof UnionConfiguration['fonts']['colors']
    ? {
        color: UnionConfiguration['fonts']['colors'][RemoveBeforeSeparator<key>];
      }
    : never;
};

export type Fonts = FontColors & FontStyles & typeof staticFontStyles;
