import { CartActionType, ICartReducerState, IAddItemAction, IRemoveItemAction, IDecreaseItemQuantityAction } from './cart.types';
import { addItemToCart, decreaseItemQuantityFromCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE: ICartReducerState = {
    cartItems: []
}

const cartReducer = (state: ICartReducerState = INITIAL_STATE, action: IAddItemAction | IRemoveItemAction | IDecreaseItemQuantityAction) => {
    switch (action.type) {
        case CartActionType.ADD_ITEM: 
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionType.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }

        case CartActionType.DECREASE_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: decreaseItemQuantityFromCart(state.cartItems, action.payload)
            }

        default: 
            return state
    }
}

export default cartReducer