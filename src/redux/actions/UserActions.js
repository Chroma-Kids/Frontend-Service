import { database, auth, googleProvider } from '../../firebase'
import * as types from './ActionTypes';

export function getUser(redirect) {
  return dispatch => {
    dispatch({
      type: types.USER_STATUS,
      payload: true
    });
    auth.onAuthStateChanged(user => {
      dispatch({
        type: types.GET_USER,
        payload: user
      });
      dispatch({
        type: types.USER_STATUS,
        payload: false
      });
      redirect();
    });
  };
}

export function createUser(uid, email, name){
  return {
    type: types.CREATE_USER,
    payload: database.ref(`users/${uid}`).set({ name, email }),
  };
}

export function login(email, password) {
  return {
    type: types.LOGIN,
    payload: auth.signInWithEmailAndPassword(email, password),
  };
}

export function logout() {
  return {
    type: types.LOGOUT,
    payload: auth.signOut(),
  };
}

export function createAccount(email, password) {
  return {
    type: types.CREATE_ACCOUNT,
    payload: auth.createUserWithEmailAndPassword(email, password),
  };
}

export function googleLogin() {
  return {
    type: types.GOOGLE_LOGIN,
    payload: auth.signInWithPopup(googleProvider),
  };
}
