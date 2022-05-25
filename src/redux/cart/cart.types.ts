import { IProduct } from '../../data';

export interface ICartReducerState {
  cartItems: ICartItem[]
}

export interface IAddItemAction {
  type: CartActionType.ADD_ITEM,
  payload: IProduct
}

export interface IRemoveItemAction {
  type: CartActionType.REMOVE_ITEM,
  payload: number
}

export interface IDecreaseItemQuantityAction {
  type: CartActionType.DECREASE_ITEM_QUANTITY,
  payload: number
}

export interface ICartItem {
  product: IProduct,
  quantity: number
}

export enum CartActionType {
  'ADD_ITEM' = 'ADD_ITEM',
  'REMOVE_ITEM' = 'REMOVE_ITEM',
  'DECREASE_ITEM_QUANTITY' = 'DECREASE_ITEM_QUANTITY'
}