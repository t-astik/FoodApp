import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { ICartItem } from '../../redux/cart/cart.types';
import { IState } from '../../redux/root-reducer';

import Menu from '../../components/menu'

import menuButton from '../../assets/images/menu.png' 
import shoppingCart from '../../assets/images/shopping-cart.png'
import vector from '../../assets/images/Vector.png' 

import styles from './styles.module.css'

const Navbar = () => {
  const location = useLocation()
  const [isOpened, setIsOpen] = useState(false)

  const toggleMenu = (active: boolean) => setIsOpen(active)

  const cartItems = useSelector((state: IState): ICartItem[] => state.cart.cartItems)

  const totalPrice = cartItems.reduce((acc, item: ICartItem) => {
      return acc += item.product.price * item.quantity
  }, 0)

  const totalQuantity = cartItems.reduce((acc, item: ICartItem) => {
    return acc += item.quantity
  }, 0)

  useEffect(() => {
	  toggleMenu(false)
  }, [location.pathname])

  return (
      <div className={styles.root}>
        <div className={styles.root__left}>
          <div className={styles.button}>
            {
              isOpened 
                ? <div onClick={() => toggleMenu(false)}><img className={styles.img} src={vector}/></div>
                : <div onClick={() => toggleMenu(true)}><img className={styles.img} src={menuButton}/></div>
            }
          </div>
        </div>

        <div className={styles.root__right}>
          <div className={styles.cart}>
            <div className={styles.cart__totalPrice}>{totalPrice} ₽</div>
            <div className={styles.cart__totalQuantity}>
              <Link className={styles.cart__link} to="/shopping-cart">
                <img className={styles.cart__img} src={shoppingCart}/>
                <div className={styles.cart__count}>{totalQuantity}</div>
              </Link>
            </div>
          </div>
        </div>

        <div className={isOpened ? `${styles.menu} ${styles.menu_opened}` : styles.menu}>
          <Menu/>
        </div>
      </div>
   )
  }
  
export default Navbar
