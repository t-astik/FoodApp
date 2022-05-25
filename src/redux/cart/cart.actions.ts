import { CartActionType, IAddItemAction, IDecreaseItemQuantityAction, IRemoveItemAction } from './cart.types';

import { IProduct } from '../../data';

export const addItem = (item: IProduct): IAddItemAction => ({
  type: CartActionType.ADD_ITEM,
  payload: item
});

export const removeItem = (id: number): IRemoveItemAction => ({
  type: CartActionType.REMOVE_ITEM,
  payload: id
});


export const decreaseItemQuantity = (id: number): IDecreaseItemQuantityAction => ({
  type: CartActionType.DECREASE_ITEM_QUANTITY,
  payload: id
});
