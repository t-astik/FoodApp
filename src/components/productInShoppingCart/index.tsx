import React from 'react'
import { useDispatch } from 'react-redux'

import { decreaseItemQuantity, removeItem } from '../../redux/cart/cart.actions'
import { addItem } from '../../redux/cart/cart.actions'

import { getProductImagePath } from '../../utils'

import { IProduct } from '../../data'
import garbage from '../../assets/images/garbage.png'

import styles from './styles.module.css'

interface IProps {
    data: IProduct
    quantity: number
    className: string
}

const ProductInShoppingCart = (props: IProps) => {
    const dispatch = useDispatch()

    const handleRemove = (product: IProduct) => (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(removeItem(product.id))
    }

    const handleDecreaseQuantity = (product: IProduct) => (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(decreaseItemQuantity(product.id))
    }

    const handleAddItem = (product: IProduct) => (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(addItem(product))
    }

    return (
        <div className={props.className}>
            <div className={styles.imgSection}>
                <img className={styles.imgSection_img} src={`${getProductImagePath(props.data.id)}`}/>
            </div>
            <div className={styles.nameSection}>
                <span className={styles.title}>{props.data.name}</span>
                <div className={styles.buttonSection}>
                    <div className={styles.deleteButton} onClick={handleDecreaseQuantity(props.data)}>-</div>
                    <div className={styles.addButton} onClick={handleAddItem(props.data)}>+</div>
                </div>
            </div>
            <div className={styles.priceSection}>
                <div className={styles.priceSection__garbage} onClick={handleRemove(props.data)}>
                    <img src={garbage}/>
                </div>
                <div className={styles.priceSection__price}>
                    <p className={styles.priceSection__quantityNumber}>{props.quantity} ×</p>
                    <p className={styles.priceSection__priceNumber}>{props.data.price} ₽</p>
                </div>
            </div>
        </div>
    )
}

export default ProductInShoppingCart