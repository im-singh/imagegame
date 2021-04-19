import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getRandomImage } from "../Api/api";
import imageTypes from "../Images/types";

// worker Saga: will be fired on FETCH_IMAGE actions
function* fetchImage(action) {
  try {
    const resObj = yield call(getRandomImage);
    yield put({ type: imageTypes.FETCH_IMAGE_SUCCESS, imgUrl: resObj.imgUrl });
  } catch (e) {
    yield put({ type: imageTypes.FETCH_IMAGE_FAIL, message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `FETCH_IMAGE` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery(imageTypes.FETCH_IMAGE, fetchImage);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "FETCH_IMAGE" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest(imageTypes.FETCH_IMAGE, fetchImage);
// }

export default mySaga;
