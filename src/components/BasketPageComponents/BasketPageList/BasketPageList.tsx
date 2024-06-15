'use client'
import React from 'react';
import styles from './BasketPageList.module.scss';
import { Order } from '@/redux/features/basket.slice';
import Image from 'next/image';

type ListProps = {
    productsPrice: number
    productsList: Order[]
}

const BasketPageList = ({ productsPrice, productsList }: ListProps) => {
    return (
        <section className={styles.container}>
            <div className={styles.products_list}>
                {productsList.map((product) => (
                    <div key={product.title} className={styles.product}>
                        <div className={styles.title_container}>
                            <Image className={styles.image} src={product.image} alt={product.title}/>
                            <p className={styles.product_title}>{product.title}</p>
                        </div>
                        <div className={styles.counter}>
                            <button>-</button>
                            <p>{product.count}</p>
                            <button>+</button>
                        </div>
                        <p className={styles.product_price}>Ціна: <span>{parseFloat(product.price) * product.count} грн</span></p>
                    </div>
                ))}
            </div>
            <div className={styles.total}>
                <p className={styles.total_text}>Загальна ціна вашого замовлення без врахування доставки становить:</p>
                <p className={styles.total_price}>{productsPrice} грн</p>
            </div>
        </section>
    )
}

export default BasketPageList;