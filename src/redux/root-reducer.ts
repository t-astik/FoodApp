import { combineReducers } from 'redux'

import cartReducer from './cart/cart.reducer'
import { ICartReducerState } from './cart/cart.types'

export interface IState {
  cart: ICartReducerState
}

export default combineReducers<IState>({
  cart: cartReducer
})
