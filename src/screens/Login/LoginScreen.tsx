import type { RootScreenProps } from '@/navigation/types';
import type { LoginFormInputs } from '@/types';

import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { Paths } from '@/navigation/paths';
import { getUserRequest } from '@/redux/app/appSlice';

import { Input, SafeScreen } from '@/components';

import useTheme from '@/hook/useTheme';

function LoginScreen({ navigation }: RootScreenProps<Paths.Login>) {
  const { backgrounds, fonts, gutters, layout } = useTheme();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    navigation.navigate(Paths.Example);
  };

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
          backgrounds.gray50,
        ]}
      >
        <Text style={[fonts.size_20_QuicksandBold, gutters.marginBottom_8]}>
          Login
        </Text>
        <View style={[gutters.padding_16, layout.fullWidth, gutters.gap_12]}>
          <Text>Email</Text>
          <Controller
            control={control}
            defaultValue="abc@123.com"
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                defaultValue="abc@123.com"
                keyboardType="email-address"
                onChangeText={onChange}
                placeholder="Enter your email"
                value={value}
              />
            )}
            rules={{
              pattern: {
                message: 'Invalid email format',
                value: /^[\w%+.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,4}$/,
              },
              required: 'Email is required',
            }}
          />
          {errors.email && (
            <Text style={[fonts.red500, gutters.marginTop_4]}>
              {errors.email.message}
            </Text>
          )}

          <Text>Password</Text>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                onChangeText={onChange}
                placeholder="Enter your password"
                secureTextEntry
                value={value}
              />
            )}
            rules={{
              minLength: {
                message: 'Password must be at least 6 characters',
                value: 1,
              },
              required: 'Password is required',
            }}
          />
          {errors.password && (
            <Text style={[fonts.red500, gutters.marginTop_4]}>
              {errors.password.message}
            </Text>
          )}
          <View style={[gutters.marginTop_12]}>
            <Button onPress={handleSubmit(onSubmit)} title="Login" />
          </View>
        </View>
      </View>
    </SafeScreen>
  );
}

export default LoginScreen;
