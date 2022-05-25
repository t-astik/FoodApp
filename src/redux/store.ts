import {  legacy_createStore as createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReducer from './root-reducer'
import { ICartReducerState } from './cart/cart.types'

const LOCAL_STORAGE_STATE_KEY = 'LOCAL_STORAGE_STATE_KEY'

const middlewares = [logger]

interface IState {
    cart: ICartReducerState
}

const saveStateToLocalStorage = (state: IState) => {
    window.localStorage.setItem(LOCAL_STORAGE_STATE_KEY, JSON.stringify(state))
} 

const restoreStateFromLocalStorage = (): IState => {
    const getStateFromLocalStorage = window.localStorage.getItem(LOCAL_STORAGE_STATE_KEY)

    return getStateFromLocalStorage
        ? JSON.parse(getStateFromLocalStorage)
        : {}
} 

const INITIAL_STATE: IState = restoreStateFromLocalStorage()

const store = createStore(rootReducer, INITIAL_STATE, applyMiddleware(...middlewares))

store.subscribe(() => {
    const state = store.getState()

    saveStateToLocalStorage(state)
})

export default store
