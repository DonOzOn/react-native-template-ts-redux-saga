import type { Paths } from '@/navigation/paths';
import type { HomeState } from '@/redux/home/homeSlice';
import type { RootScreenProps } from '@/types';

import { useTranslation } from 'react-i18next';
import { Button, FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Config from 'react-native-config';
import { useDispatch, useSelector } from 'react-redux';

import { StateStatus } from '@/config';
import { logout } from '@/redux/auth/authSlice';
import { fetchCountry, fetchUser, resetError } from '@/redux/home/homeSlice';

import {
  AssetByVariant,
  IconByVariant,
  SafeScreen,
  Skeleton,
} from '@/components';

import { useI18n } from '@/hook';
import useTheme from '@/hook/useTheme';
import { useEffect } from 'react';

function ExampleScreen({ navigation }: RootScreenProps<Paths.Example>) {
  const { t } = useTranslation();
  const { toggleLanguage } = useI18n();

  const dispatch = useDispatch();
  const { countries, error , status } = useSelector(
    (state: { home: HomeState }) => state.home,
  );
  const {
    backgrounds,
    changeTheme,
    colors,
    components,
    fonts,
    gutters,
    layout,
    variant,
  } = useTheme();
  const onChangeTheme = () => {
    changeTheme(variant === 'default' ? 'dark' : 'default');
  };
  const onCloseErrorModal = () => {
    dispatch(resetError());
  };

  useEffect(() => {
    dispatch(fetchCountry());

  }, [dispatch])
  

  return (
    <SafeScreen
      error={error}
      loading={status == StateStatus.LOADING}
      onCloseErrorModal={onCloseErrorModal}
    >
      <ScrollView>
        <View
          style={[
            layout.justifyCenter,
            layout.itemsCenter,
            gutters.marginTop_80,
          ]}
        >
          <View
            style={[layout.relative, backgrounds.gray100, components.circle250]}
          />

          <View style={[layout.absolute, gutters.paddingTop_80]}>
            <AssetByVariant
              path={'tom'}
              resizeMode={'contain'}
              style={{ height: 300, width: 300 }}
            />
          </View>
        </View>

        <View style={[gutters.paddingHorizontal_32, gutters.marginTop_40]}>
          <View style={[gutters.marginTop_40]}>
            <Text style={[fonts.gray800, fonts.size_28_QuicksandBold]}>
              {t('screen_example.title')}
            </Text>
            <Text
              style={[
                fonts.gray200,
                gutters.marginBottom_40,
                fonts.size_14_QuicksandRegular,
              ]}
            >
              {t('screen_example.description')}
            </Text>
          </View>
          <TouchableOpacity
          onPress={() => {
              dispatch(fetchUser());
            }}
            style={[gutters.marginBottom_16]}
          >
            <Text>{Config.API_BASE_URL}</Text>
          
          </TouchableOpacity>
          <Button
            onPress={() => {
              dispatch(logout());
            }}
            title="Logout"
          />
          <View
            style={[
              layout.row,
              layout.justifyBetween,
              layout.fullWidth,
              gutters.marginTop_16,
            ]}
          >
            <Skeleton
              height={64}
              style={{ borderRadius: components.buttonCircle.borderRadius }}
              width={64}
            >
              <TouchableOpacity
                style={[components.buttonCircle, gutters.marginBottom_16]}
                testID="fetch-user-button"
              >
                <IconByVariant path={'send'} stroke={colors.purple500} />
              </TouchableOpacity>
            </Skeleton>

            <TouchableOpacity
              onPress={onChangeTheme}
              style={[components.buttonCircle, gutters.marginBottom_16]}
              testID="change-theme-button"
            >
              <IconByVariant path={'theme'} stroke={colors.purple500} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={toggleLanguage}
              style={[components.buttonCircle, gutters.marginBottom_16]}
              testID="change-language-button"
            >
              <IconByVariant path={'language'} stroke={colors.purple500} />
            </TouchableOpacity>
          </View>
          <FlatList
        data={countries.slice(0, 5)}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => (
          <Text>{item.emoji} {item.name} ({item.code})</Text>
        )}
        scrollEnabled={false}
      />
        </View>
      </ScrollView>
    </SafeScreen>
  );
}

export default ExampleScreen;
