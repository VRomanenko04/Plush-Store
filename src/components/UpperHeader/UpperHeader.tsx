import React from 'react';
import styles from './UpperHeader.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Insta_icon from '@/assets/icons/inst_icon.svg';
import Local_icon from '@/assets/icons/location_icon.svg';
import Phone_icon from '@/assets/icons/phone_icon.svg';
import Bag_icon from '@/assets/icons/bag_icon.svg';


const UpperHeader = () => {
    return (
            <div className={styles.first_header}>
            <nav className={styles.first_header_block}>
                <ul className={styles.menu}>
                    <li className={styles.list_item}>
                        <Link className={styles.link} href='**'>Гарантія якості</Link>
                    </li>
                    <li className={styles.list_item}>
                        <Link className={styles.link} href='**'>Доставка та оплата</Link>
                    </li>
                    <li className={styles.list_item}>
                        <Link className={styles.link} href='**'>Оптові поставки</Link>
                    </li>
                    <li className={styles.list_item}>
                        <Link className={styles.link} href='**'>Контакти</Link>
                    </li>
                </ul>
                <ul className={styles.second_menu}>
                    <li className={styles.list_item}>
                        <Image className={styles.icon} src={Local_icon} alt='location icon'/>
                        <p>Харків</p>
                    </li>
                    <li className={styles.list_item}>
                        <a className={styles.link} href='tel:0662916690'><Image className={styles.icon} src={Phone_icon} alt='phone icon'/> 0662916690</a>
                    </li>
                    <li className={styles.list_item}>
                        <Link className={styles.link} href='**'>
                            <Image className={styles.icon} src={Bag_icon} alt='bag icon'/>
                            <p>Корзина</p>
                        </Link>
                    </li>
                    <li className={styles.list_item}>
                        <a href="https://www.instagram.com/plush.funmood.ukr?igsh=NTc4MTIwNjQ2YQ==" target='_blank' className={styles.link}>
                            <Image className={styles.icon} src={Insta_icon} alt='instagram icon'/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default UpperHeader