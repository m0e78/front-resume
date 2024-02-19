import srcproducts from "../source/products"
import { REGISTER_USER } from "./constant"
const initialState = {
  products: srcproducts,
  user: { userName: "", email: "", password: "" },
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state.user, register: action.payload }
    default:
      return state
  }
}
export default reducer
