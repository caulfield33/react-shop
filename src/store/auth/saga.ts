import {AuthActionTypes, AuthData} from "./types";
import {takeEvery, put, delay} from 'redux-saga/effects';
// import AuthService from "../../services/auth-service";
import {loginFailure, loginSuccess, logoutFailure, logoutSuccess} from "./actions";
import {IAuthCredential} from "../../models/IAuthCredential";

// const authService = new AuthService()

function* loginWorker(action: {type: string, payload: IAuthCredential}) {

    try {
        yield delay(1000)

        const authData: AuthData = {
            user: {
                name: 'test',
                email: 'test@test.test',
                id: 'sadasd',
                roles: ['admin'],
                orders: []
            },
            token: 'toke',
            refreshToken: 'refresh',
            expireToken: '10m'
        }

        yield put(loginSuccess(authData))
        localStorage.setItem('test-app-user', JSON.stringify(authData))

    } catch (e) {
        console.log(e)
        yield put(loginFailure(['error']))
    }

}

function* logoutWorker() {

    try {
        localStorage.removeItem('test-app-user')
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
