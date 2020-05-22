import {AuthActionTypes} from "./types";
import {takeEvery, put, delay} from 'redux-saga/effects';
// import AuthService from "../../services/auth-service";
import {loginFailure, loginSuccess, logoutFailure, logoutSuccess} from "./actions";
import {IAuthCredential} from "../../models/IAuthCredential";

// const authService = new AuthService()

function* loginWorker(action: {type: string, payload: IAuthCredential}) {

    try {
        yield delay(1000)

        const authData = {
            user: {
                name: 'test',
                email: 'test@test.test',
                id: 'sadasd',
                roles: ['user']
            },
            token: 'toke',
            refreshToken: 'refresh',
            expireToken: '10m'
        }

        yield put(loginSuccess(authData))
        localStorage.setItem('react-test-app', JSON.stringify(authData))

    } catch (e) {
        console.log(e)
        yield put(loginFailure(['error']))
    }

}

function* logoutWorker() {

    try {
        localStorage.removeItem('react-test-app')
        yield put(logoutSuccess())
    } catch (e) {
        yield put(logoutFailure())
    }

}


export function* watchAuth() {
    yield takeEvery(AuthActionTypes.LOGIN_REQUEST, loginWorker)
    yield takeEvery(AuthActionTypes.LOGOUT_REQUEST, logoutWorker)
}

const authWatchers = [
    watchAuth()
]

export default authWatchers