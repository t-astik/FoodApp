import { useSelector } from 'react-redux'

import { ICartItem } from '../../redux/cart/cart.types';
import { IState } from '../../redux/root-reducer';

import ProductInShoppingCart from '../../components/productInShoppingCart'
import emptyCartPlaceholderImage from '../../assets/images/empty-cart-placeholder.png'

import styles from './styles.module.css'

const ShoppingCart = () => {
    const cartItems = useSelector((state: IState): ICartItem[] => state.cart.cartItems)

    return (     
        <div className={styles.root}>
            <div className={styles.productsSection}>
                <div className={styles.productsSection__title}>Мои заказы</div>
                <div className={styles.productsSection__content}>
                    {cartItems.length > 0
                        ? (
                            <div className={styles.cartItems}> 
                                {cartItems.map((product) => (
                                    <ProductInShoppingCart
                                        key={product.product.id}
                                        data={product.product}
                                        quantity={product.quantity}
                                        className={styles.cartItem}
                                    />
                                ))}
                            </div>                   
                        )
                        : (
                            <div className={styles.emptyCartPlaceholderImage}>
                                <img className={styles.img} src={emptyCartPlaceholderImage}/>
                            </div>
                        )} 

                    {cartItems.length > 0 ? <div className={styles.button}>Оформить заказ</div> : null}
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart