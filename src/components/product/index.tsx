import React from 'react'
import { useDispatch } from 'react-redux'

import { IProduct } from '../../data'
import { addItem } from '../../redux/cart/cart.actions'

import { getProductImagePath } from '../../utils'

import buyButton from '../../assets/images/buy.png'
import styles from './styles.module.css'


export interface IProps {
    data: IProduct
}

const Product = (props: IProps) => {
    const dispatch = useDispatch();

    const handleAddItem = (product: IProduct) => (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(addItem(product))
    }

    return (
        <div className={styles.productCard}>
            <div className={styles.imgSection}>
                    <div className={styles.img} style={{'backgroundImage': `url(${getProductImagePath(props.data.id)})`}}/>
                <div className={styles.buyButton}><img className={styles.buttonImg} onClick={handleAddItem(props.data)} src={buyButton}/></div>
            </div>
            <div className={styles.informationSection}>
                <span className={styles.name}>{props.data.name}</span>
                <span className={styles.description}>{props.data.description}</span>
                <span className={styles.price}>{props.data.price} ₽</span>
            </div>
        </div>
    )
}

export default Product