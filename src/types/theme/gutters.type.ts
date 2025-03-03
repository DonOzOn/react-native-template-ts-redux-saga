import type { config } from '@/config/theme/_config';
import type {
  ArrayValue,
  RemoveAfterSeparator,
  RemoveBeforeSeparator,
  ToNumber,
} from './common.type';
import type { staticGutterStyles } from '@/config/theme/gutters';

type Margins =
  | 'margin'
  | 'marginBottom'
  | 'marginHorizontal'
  | 'marginLeft'
  | 'marginRight'
  | 'marginTop'
  | 'marginVertical';

type MarginKeys = `${Margins}_${ArrayValue<typeof config.gutters>}`;

type MarginGutters = {
  [key in MarginKeys]: {
    [K in Extract<RemoveAfterSeparator<key>, Margins>]: ToNumber<
      RemoveBeforeSeparator<key>
    >;
  };
};

type Paddings =
  | 'padding'
  | 'paddingBottom'
  | 'paddingHorizontal'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingTop'
  | 'paddingVertical';

type PaddingKeys = `${Paddings}_${ArrayValue<typeof config.gutters>}`;

type PaddingGutters = {
  [key in PaddingKeys]: {
    [K in Extract<RemoveAfterSeparator<key>, Paddings>]: ToNumber<
      RemoveBeforeSeparator<key>
    >;
  };
};

type Gaps = `gap_${ArrayValue<typeof config.gutters>}`;

type GapGutters = {
  [key in Gaps]: {
    gap: ToNumber<RemoveBeforeSeparator<key>>;
  };
};

export type Gutters = GapGutters &
  MarginGutters &
  PaddingGutters &
  typeof staticGutterStyles;
