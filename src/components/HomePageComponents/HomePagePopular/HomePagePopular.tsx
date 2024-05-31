'use client'
import React, { useState } from 'react';
import styles from './HomePagePopular.module.scss';
import Image from 'next/image';
import hugCat from '@/assets/hug_cat.jpg';
import rainbowOctopus from '@/assets/rainbow_octopus.jpg';
import changelingCat from '@/assets/changeling_cat.jpg';
import Bag_icon from '@/assets/icons/bag_icon.svg';
import LinkButton from '@/components/ui/LinkButton/LinkButton';
import OrderPopup from '@/components/ui/Popup/OrderPopup/OrderPopup';

const offers = [
    {
        title: 'Котик для обіймашок',
        image: hugCat,
        price: '500'
    },
    {
        title: 'Різнокольоровий восьминіжок',
        image: rainbowOctopus,
        price: '200'
    },
    {
        title: 'Коричневий котик-перекрут',
        image: changelingCat,
        price: '180'
    }
];

const HomePagePopular = () => {
    const [isItemChosen, setIsItemChosen] = useState(false);
    const [getItemTitle, setGetItemTitle] = useState('');

    const handleItemChoose = (itemTitle: string) => {
        setIsItemChosen(prev => !prev);
        setGetItemTitle(itemTitle);
    }

    return (
        <>
            <section className={styles.container}>
                <h2 className={styles.title}>Трендовий плюш</h2>
                <div className={styles.offers_list}>
                    {offers.map((offer) => (
                        <div key={offer.title} className={styles.list_item}>
                            <Image className={styles.image} src={offer.image} alt={offer.title}/>
                            <h6>{offer.title}</h6>
                            <div className={styles.price_block}>
                                <p className={styles.price}>{offer.price} грн</p>
                                <div className={styles.btn} onClick={() => handleItemChoose(offer.title)}>
                                    <Image src={Bag_icon} alt='bag icon'/>
                                    <p>У корзину</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <LinkButton editionalClass={styles.link_btn} link='##' btnText='Всі пропозиції'/>
            </section>
            <OrderPopup 
                isOpen={isItemChosen}
                setisOpen={setIsItemChosen}
                itemTitle={getItemTitle}
            />
        </>
    )
}

export default HomePagePopular;