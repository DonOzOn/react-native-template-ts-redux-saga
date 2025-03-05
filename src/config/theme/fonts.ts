import type { TextStyle } from 'react-native';

import type { FontColors, FontStyles, UnionConfiguration } from '@/types';
import { config } from './_config';
import { removeWhitespaceAndSymbols } from '@/utils';

export const generateFontColors = (configuration: UnionConfiguration) => {
  return Object.entries(configuration.fonts.colors ?? {}).reduce(
    (acc, [key, value]) => {
      return Object.assign(acc, {
        [`${key}`]: {
          color: value,
        },
      });
    },
    {} as FontColors,
  );
};

export const generateFontStyles = () => {
  return config.fonts.sizes.reduce((acc, size) => {
    config.fonts.fontFamily.forEach((fontName) => {
      Object.assign(acc, {
        [`size_${size}_${removeWhitespaceAndSymbols(fontName)}`]: {
          fontFamily: fontName,
          fontSize: size,
        },
      });
    });
    return acc;
  }, {} as FontStyles);
};

export const staticFontStyles = {
  alignCenter: {
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
} as const satisfies Record<string, TextStyle>;
