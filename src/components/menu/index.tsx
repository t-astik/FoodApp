import { NavLink } from 'react-router-dom'

import home from '../../assets/images/home.png'
import user from '../../assets/images/user.png'
import voucher from '../../assets/images/voucher.png'
import truck from '../../assets/images/truck.png'
import shoppingBag from '../../assets/images/shopping-bag.png'
import phoneCall from '../../assets/images/phone-call.png'
import newspaper from '../../assets/images/newspaper.png'
import headset from '../../assets/images/headset.png'
import twitter from '../../assets/images/twitter.png'
import facebook from '../../assets/images/facebook.png'
import telegram from '../../assets/images/telegram.png'

import styles from './styles.module.css'

const Menu = () => {
    return (
        <div className={styles.root}>
            <div className={styles.timeSection}>
                <span className={styles.workingDays}>Ежедневно</span>
                <span className={styles.workingHours}>c 9:00 до 21:00</span>
            </div>

            <div className={styles.links}>
                <div className={styles.link}>
                    <img className={styles.link__img} src={home}/>
                    <NavLink className={styles.link} activeClassName={styles.link_active} to="/categories"><p className={styles.link__text}>Главная</p></NavLink>
                </div>
                <div className={styles.link}>
                    <img className={styles.link__img} src={user}/>
                    <span><p className={styles.link__text}>Личный кабинет</p></span>
                </div>
                <div className={styles.link}>
                    <img className={styles.link__img} src={shoppingBag}/>
                    <NavLink className={styles.link} activeClassName={styles.link_active} to="/shopping-cart"><p className={styles.link__text}>Мои заказы</p></NavLink>
                </div>
                <div className={styles.link}>
                    <img className={styles.link__img} src={voucher}/>
                    <span><p className={styles.link__text}>Промокоды</p></span>
                </div>
                <div className={styles.link}>
                    <img className={styles.link__img} src={truck}/>
                    <span><p className={styles.link__text}>Доставка</p></span>
                </div>
                <div className={styles.link}>
                    <img className={styles.link__img} src={newspaper}/>
                    <span><p className={styles.link__text}>Новости</p></span>
                </div>
                <div className={styles.link}>
                    <img className={styles.link__img} src={phoneCall}/>
                    <span><p className={styles.link__text}>Контакты</p></span>
                </div>

                <div className={styles.callButton}>
                    <img className={styles.callButton__img} src={headset}/>
                    <span className={styles.callButton__text}>Звонок оператору</span>
                </div>

                <div className={styles.socialmedia}>
                    <span className={styles.socialmedia__title}>Мы в социальных сетях</span>
                    <div>
                        <img className={styles.socialmedia__item} src={facebook} />
                        <img className={styles.socialmedia__item} src={telegram} />
                        <img className={styles.socialmedia__item} src={twitter} />
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Menu
