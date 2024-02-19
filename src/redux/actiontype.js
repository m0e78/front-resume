import { LOGIN_USER, LOGOUT_USER, AUTH_USER, REGISTER_USER } from "./constant"
import axios from "axios"
export function RegisterUser(data) {
    console.log('type',data)
  const request = axios
    .post(`http://localhost:4000/api/v1/user/register`, data)
    .then((res) => res.data)
  return { type: REGISTER_USER, payload: request }
}
