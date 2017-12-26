import { combineReducers } from 'redux'
import { active } from './common'
import course from './course'
import courseTemplate from './courseTemplate'
// ADDED AUTH REDUCER
import auth from '../auth_module/auth_reducer'
import giphy from './giphy'



const appReducer = combineReducers({
  giphy,
  auth,
  courseTemplate,
  course,
  active,
})

const rootReducer = (state, action) => {
  if (action.type === 'SIGN_OFF_SUCCESS') {
    state = undefined
  }
  return appReducer(state, action)
}
export default rootReducer
