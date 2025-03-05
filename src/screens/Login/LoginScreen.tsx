import type { AuthState } from '@/redux/auth/authSlice';
import type { LoginFormInputs, RootScreenProps } from '@/types';

import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Keyboard, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Paths } from '@/navigation/paths';
import { StateStatus } from '@/config';
import { loginRequest, resetError } from '@/redux/auth/authSlice';

import { Input, SafeScreen } from '@/components';

import useTheme from '@/hook/useTheme';

function LoginScreen({ navigation }: RootScreenProps<Paths.Login>) {
  const { backgrounds, fonts, gutters, layout } = useTheme();
  const dispatch = useDispatch();
  const { error, status } = useSelector(
    (state: { auth: AuthState }) => state.auth,
  );
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    Keyboard.dismiss();
    dispatch(loginRequest(data));
  };

  const onCloseErrorModal = () => {
    dispatch(resetError());
  };

  useEffect(() => {
    if (status == StateStatus.SUCCESS) {
      navigation.navigate(Paths.Example);
    }
  }, [navigation, status]);

  return (
    <SafeScreen
      error={error}
      loading={status == StateStatus.LOADING}
      onCloseErrorModal={onCloseErrorModal}
    >
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
            defaultValue='emilys'
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                defaultValue='emilys'
                keyboardType="email-address"
                onChangeText={onChange}
                placeholder="Enter your email"
                value={value}
              />
            )}
            rules={{
              // pattern: {
              //   message: 'Invalid email format',
              //   value: /^[\w%+.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,4}$/,
              // },
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
                 defaultValue='emilyspass'
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                defaultValue='emilyspass'
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
