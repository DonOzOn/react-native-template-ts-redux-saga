import { all } from 'redux-saga/effects';
import { appSaga } from './app/appSaga';
import { authSaga } from './auth/authSaga';
import { homeSaga } from './home/homeSaga';


export default function* rootSaga() {
  yield all([appSaga() , authSaga() , homeSaga()]);
}
