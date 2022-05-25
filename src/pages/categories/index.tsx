import { Scrollbars } from 'react-custom-scrollbars';

import Category from '../../components/category'
import PopularProducts from '../../components/popularProducts'

import { categories } from '../../data'

import styles from './styles.module.css'

const Categories = () => {
    return (
        <div className={styles.root}>
            <div className={styles.categoriesSection}>
                <div className={styles.categoriesSection__title}>Категории</div>
                <div className={styles.categoriesSection__content}>
                    {categories.map(category => (
                        <Category key={category.id} data={category} information={true}/>
                    ))}
                </div>
            </div>
            
            <div className={styles.popularProducts}>
                <div className={styles.popularProducts__title}>Частые заказы</div>

                <Scrollbars style={{ height: 130 }}>
                    <PopularProducts />
                </Scrollbars>
            </div>
        </div>
    )
}

export default Categories