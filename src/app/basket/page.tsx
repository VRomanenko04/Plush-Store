'use client'
import React from 'react';
import styles from './BasketPage.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Link from 'next/link';


const BasketPage = () => {
    const productsList = useSelector((state: RootState) => state.basket);
    const productsCount = productsList.reduce((accumulator, product) => {
        return accumulator + product.count;
    }, 0);

    const productName = `${productsCount > 0 && (
        (productsCount % 10 === 1 && productsCount % 100 !== 11) ? 'товар' :
        (productsCount % 10 >= 2 && productsCount % 10 <= 4 && (productsCount % 100 < 10 || productsCount % 100 >= 20)) ? 'товари' :
        'товарів'
    )}`;

    let productsPrice = 0;
    productsList.forEach(product => {
        productsPrice += parseFloat(product.price) * product.count
    });

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Ваш кошик</h1>
            <p className={styles.product_count}>
                {productsCount === 0 && (
                    <span>
                        Немає товарів у кошику, ви можете щось обрати у <Link className={styles.link} href='##'>каталозі</Link>
                    </span>
                )}
                {productsCount > 0 && (
                    <span>
                        {productsCount} {productName} / {productsPrice} грн
                    </span>
                )}
            </p>
            <div>
                <div>
                    {/* List Component */}
                    {/* Delivery component */}
                </div>
                <div>
                    {/* Price checkout component */}
                </div>
            </div>
            {/* Propositions Component */}
        </main>
    )
}

export default BasketPage;