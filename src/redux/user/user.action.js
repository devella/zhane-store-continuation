import { UserConstant } from './user.constant'

export const setCurrentUser = user => ({
    type: UserConstant.SET_CURRENT_USER,
    payload: user
});