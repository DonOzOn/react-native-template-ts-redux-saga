import type { config } from '@/config/theme/_config';
import type { ArrayValue, RemoveBeforeSeparator, ToNumber } from './common.type';
import type { UnionConfiguration } from './config.type';
import type { staticFontStyles } from '@/config/theme/fonts';

type FontSizesKeys = `size_${ArrayValue<typeof config.fonts.sizes>}`;

export type FontSizes = {
  [key in FontSizesKeys]: {
    fontSize: ToNumber<RemoveBeforeSeparator<key>>;
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

export type Fonts = FontColors & FontSizes & typeof staticFontStyles;
