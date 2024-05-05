import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_USER, fetchUserFailure, fetchUserSuccess } from './actions';

function* fetchUserSaga() {
    try {

        const res = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');
        const users = yield res.json();
        yield put(fetchUserSuccess(users))
    } catch (error) {
        yield put(fetchUserFailure(error))
    }
}

export function* rootSage() {
    yield takeLatest(FETCH_USER, fetchUserSaga);
}