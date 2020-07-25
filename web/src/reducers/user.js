import immer from 'immer'
import { pick } from 'lodash'
import decode from 'jwt-decode'

import { types } from '../actions/user'

const token = localStorage.getItem('_token')
const user = !!token
  ? pick(decode(token), ['id', 'name', 'email', 'plan_id', 'plan'])
  : {}

const initialState = {
  isFetching: false,
  isAuthenticated: !!token,
  errorMessage: '',
  user,
}

const reducer = immer((draft = initialState, action) => {
  const actions = {
    [types.LOGIN_REQUEST]: () => {
      draft.isFetching = true
      draft.isAuthenticated = false
      draft.errorMessage = ''
      draft.user = {}
    },

    [types.LOGIN_SUCCESS]: payload => {
      draft.isFetching = false
      draft.isAuthenticated = true
      draft.errorMessage = ''
      draft.user = payload.user
    },

    [types.LOGIN_FAILURE]: payload => {
      draft.isFetching = false
      draft.isAuthenticated = false
      draft.errorMessage = payload.message
      draft.user = {}
    },

    [types.LOGOUT_REQUEST]: () => {
      draft.isFetching = false
      draft.isAuthenticated = false
      draft.errorMessage = ''
      draft.user = {}
    },
  }

  if (action.type in actions) {
    actions[action.type](action.payload)
  }

  return draft
})

export default reducer
