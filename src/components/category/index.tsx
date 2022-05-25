import { useState, useCallback} from 'react'
import { Link } from 'react-router-dom'

import { ICategory, products } from '../../data'
import { getCatagoryImagePath } from '../../utils'

import like from '../../assets/images/like.png'
import redLike from '../../assets/images/redLike.png'

import styles from './styles.module.css'

interface IProps {
    data: ICategory
    information: boolean
}

const Category = (props: IProps) => {
    const [liked, setLiked] = useState(false)

    const handleLiked = useCallback(() => {
        setLiked(!liked)
    }, [liked])

    const getProductsCountPluralText = (count: number): string => {
        if (count === 0 || count > 4) {
            return 'видов'
        } else if (count === 1) {
            return 'вид'
        } else return 'вида'
    }

    const productsCount = products
        .filter(product => product.categoryId === props.data.id)
        .length

    return (
        <div className={styles.root}>
            {props.information === true
                ? (
                    <div className={styles.like} onClick={handleLiked} >
                        {liked ? <img src={redLike}/> : <img src={like}/>}
                    </div>
                )
                : null
            }  

            <Link className={styles.linkSection} to={`/categories/${props.data.id}`}>
                <img className="categoryImg" src={ `${getCatagoryImagePath(props.data.id)}` }/>
                <span className={styles.title}>{props.data.title}</span>
                {props.information === true ? (
                    <span className={styles.varieties}>{`${productsCount} ${getProductsCountPluralText(productsCount)}`}</span>
                ) : null}
            </Link> 
        </div>
    )
}

export default Category