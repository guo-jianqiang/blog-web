/** @format */

import {auth} from '../api/login'
import {getItem, removeItem, setItem} from './localStorage'
import {ACCOUNT_INFO} from '../constant'

export interface UserInterface {
  username?: string
  token: string
}

export const getUserData = () => getItem(ACCOUNT_INFO)

export const setUserData = (data: UserInterface) => setItem(ACCOUNT_INFO, data)

export const removeUserData = () => removeItem(ACCOUNT_INFO)

export const getAuthInfo = async () => {
  const res = (await auth()).data
  if (res.code === 200) {
    setUserData({...getUserData(), ...res})
  }
  return res
}
