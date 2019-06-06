import { saveData } from './actions';
import { put, takeLatest } from 'redux-saga/effects';
import { GET_DATA } from './consts'

export function* getDataFromMockServer(action) {
  try {
    // const firstCall = yield call(fetch, `http://localhost:9001/person/$${action.payload}$`);
    // const secondCall = yield call(fetch, `http://localhost:9001/facility/$${firstCall.val1}$`);
    // const thirdCall = yield call(fetch, `http://localhost:9001/exposure$${secondCall.val2}$`);
    // const allCalls = {
    //   val3: secondCall.val2,
    //   val5: thirdCall.val5,
    // }
      const allCalls = {
        val3: 333,
        val5: 555
      }
    yield put(saveData(allCalls));
  } catch (error) {

  }
}
export default function* saga() {
  yield takeLatest(GET_DATA, getDataFromMockServer);
}