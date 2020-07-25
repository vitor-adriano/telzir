import api from 'services/api'
import decode from 'jwt-decode'
import { pick } from 'lodash'

export const types = {
  LOGIN_REQUEST: '@user/LOGIN_REQUEST',
  LOGIN_SUCCESS: '@user/LOGIN_SUCCESS',
  LOGIN_FAILURE: '@user/LOGIN_FAILURE',
  LOGOUT_REQUEST: '@user/LOGOUT_REQUEST',
}

export const requestLogin = () => ({
  type: types.LOGIN_REQUEST,
})

export const receiveLogin = token => ({
  type: types.LOGIN_SUCCESS,
  payload: {
    user: pick(decode(token), ['id', 'name', 'email', 'plan_id', 'plan']),
  },
})

export const rejectLogin = message => ({
  type: types.LOGIN_FAILURE,
  payload: {
    message,
  },
})

export const requestLogout = () => ({
  type: types.LOGOUT_REQUEST,
})

export const loginUser = data => {
  return async dispatch => {
    dispatch(requestLogin())
    try {
      const { data: token } = await api.post('/login', data)

      localStorage.setItem('_token', JSON.stringify(token))

      dispatch(receiveLogin(token))
    } catch (e) {
      dispatch(rejectLogin(e.response.data.message))
    }
  }
}

export const logoutUser = () => {
  return dispatch => {
    localStorage.removeItem('_token')
    dispatch(requestLogout())
  }
}
