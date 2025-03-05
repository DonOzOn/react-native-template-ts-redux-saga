import { all } from 'redux-saga/effects';
import { appSaga } from './app/appSaga';
import { authSaga } from './auth/authSaga';

export default function* rootSaga() {
  yield all([appSaga() , authSaga()]);
}
