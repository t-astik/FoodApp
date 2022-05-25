import { useDispatch } from 'react-redux'

import { addItem } from '../../redux/cart/cart.actions'
import { IProduct, products, popularProductsIds } from '../../data'
import { getProductImagePath } from '../../utils'

import styles from './styles.module.css'

const PopularProducts = () => {
    const dispatch = useDispatch()

    const handleAddItem = (product: IProduct) => (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(addItem(product))
    }

    const popularProducts: IProduct[] = popularProductsIds.reduce<IProduct[]>((acc, id) => {
        const product = products.find((product) => {
            return product.id === id 
        })

        if (product) {
            return [...acc, product]
        } 

        return acc;
    }, [])
    
    return (
        <div className={styles.root}>
            {popularProducts.map((product) => (
                <div key={product.id} className={styles.product}>
                    <div className={styles.imgSection}>
                        <div className={styles.img} style={{ 'backgroundImage': `url(${getProductImagePath(product.id)})` }}/>
                    </div>
                    <div className={styles.info}>
                        <span className={styles.info__name}>{product.name}</span>
                        <span className={styles.info__size}>{product.size}</span>
                        <div className={styles.info__price} onClick={handleAddItem(product)} >{product.price} ₽</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PopularProducts