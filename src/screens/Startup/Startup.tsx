import type { RootScreenProps } from '@/navigation/types';

import { Text, View } from 'react-native';

import type { Paths } from '@/navigation/paths';
import useTheme from '@/hook/useTheme';
import { AssetByVariant, SafeScreen } from '@/components';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserRequest } from '@/redux/app/appSlice';

function Startup({ navigation }: RootScreenProps<Paths.Startup>) {
  const { fonts, layout } = useTheme();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserRequest(''));
  }, [dispatch]);
  return (
    <SafeScreen>
      <View
        style={[
          layout.flex_1,
          layout.col,
          layout.itemsCenter,
          layout.justifyCenter,
        ]}
      >
        <AssetByVariant
          path={'tom'}
          resizeMode={'contain'}
          style={{ height: 300, width: 300 }}
        />
        <Text style={[fonts.red500]}> {t('screen_example.title')}</Text>
      </View>
    </SafeScreen>
  );
}

export default Startup;
