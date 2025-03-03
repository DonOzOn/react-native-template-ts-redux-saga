import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MMKV } from 'react-native-mmkv';
import ApplicationNavigator from '@/navigation/Application';
import '@/translations';
import NetInfo from '@react-native-community/netinfo';
import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NetworkBanner } from './components';
import ThemeProvider from './config/theme/ThemeProvider/ThemeProvider';
import { setNetworkStatus } from './redux/network/networkSlice';
import { persistor, store } from './redux/store';

export const storage = new MMKV();
const NetworkListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if(state.isConnected && state.isInternetReachable ){
      dispatch(setNetworkStatus(true));
      }else{
        dispatch(setNetworkStatus(false));

      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return null;
};
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView>
          <ThemeProvider storage={storage}>
            <NetworkListener />
            <NetworkBanner />
            <ApplicationNavigator />
          </ThemeProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}

export default App;
