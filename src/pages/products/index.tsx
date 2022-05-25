import { useParams } from 'react-router'
import { useMemo } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';

import Product from '../../components/product'
import Category from '../../components/category'
import { products, categories } from '../../data'

import productsPlaceholderImage from '../../assets/images/products-placeholder.png'

import styles from './styles.module.css'

export interface IParams {
    id: string
}

const Products = () => {
    const params = useParams<IParams>()

    const categoryProducts = useMemo(() => products.filter((product) => 
        product.categoryId === params.id
    ), [params.id])

    const currentCategory = useMemo(() => categories.filter((product) => 
         product.id === params.id
    ), [params.id])

    return (
        <div className={styles.root}>
            <div className={styles.categoriesSection}>
                <div className={styles.categoriesSection__title}>Категории</div>

                <Scrollbars style={{ height: 115 }}>
                    <div className={styles.categoriesSection__content}>
                        {categories.map((category) => {
                            return (
                                <div className={styles.categoryCardWrapper} key={category.id}>
                                    <Category data={category} information={false}/>
                                </div> 
                            )
                        })}
                    </div>
                </Scrollbars>
            </div>

            <div className={styles.productsSection}>
                <div className={styles.productsSection_title}>{currentCategory[0].title}</div>

                {
                    categoryProducts.length === 0
                        ? <img src={productsPlaceholderImage}/>
                        : (
                            <div className={styles.productContent}>
                                {categoryProducts.map((product) => (
                                    <Product key={product.id} data={product}/>
                                ))}
                            </div>
                )}
            </div>
        </div>
    )
}

export default Products