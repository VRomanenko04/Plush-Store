'use client'
import React, { useState } from 'react';
import styles from './MobileHeader.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/plush_logo.png';
import Bag_icon from '@/assets/icons/bag_icon.svg';
import PromotionIcon from '@/assets/icons/promotion_icon.svg';
import Phone_icon from '@/assets/icons/phone_icon.svg';
import Local_icon from '@/assets/icons/location_icon.svg';
import InstaIcon from '@/assets/icons/inst_icon.svg';
import TgIcon from '@/assets/icons/tg_icon.svg';


const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsOpen(prev => !prev)
    }

    const menu = `${styles.dropdown_menu} ${isOpen ? styles.open : styles.close}`;

    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <input className={styles.menu_btn} onClick={handleOpenMenu} type="checkbox" id="menu_btn" />
                <label className={styles.menu_icon} htmlFor="menu_btn">
                    <span className={styles.navicon}></span>
                </label>
                <Image className={styles.logo} src={Logo} alt='Plush octopus'/>
                <Link className={styles.link} href='##'>
                    <Image className={styles.icon} src={Bag_icon} alt='bag icon'/>
                </Link>
            </div>
            <nav className={menu}>
                <ul className={styles.first_block}>
                    <li className={`${styles.menu_item} ${styles.bolt}`}><Image className={styles.icon} src={Local_icon} alt='location icon'/> Харків</li>
                    <li className={styles.menu_item}><Link className={styles.link} href='**'>Акції <Image src={PromotionIcon} alt='Promotion icon'/></Link></li>
                    <li className={styles.menu_item}><Link className={styles.link} href='**'>До свят</Link></li>
                    <li className={styles.menu_item}><Link className={styles.link} href='**'>Весь каталог</Link></li>
                    <li className={styles.menu_item}><Link className={styles.link} href='**'>Компаніям</Link></li>
                </ul>
                <ul className={styles.second_block}>
                    <li className={styles.menu_item}><Link className={styles.link} href='**'>Гарантія якості</Link></li>
                    <li className={styles.menu_item}><Link className={styles.link} href='**'>Доставка та оплата</Link></li>
                    <li className={styles.menu_item}><Link className={styles.link} href='**'>Оптові поставки</Link></li>
                    <li className={styles.menu_item}><Link className={styles.link} href='**'>Контакти</Link></li>
                </ul>
                <ul className={styles.third_block}>
                    <li className={styles.menu_item}><a className={`${styles.number} ${styles.bolt}`} href='tel:0662916690'><Image className={styles.icon} src={Phone_icon} alt='phone icon'/> +38 (066) 291 66 90</a></li>
                    <li className={styles.socials}>
                        <a href="**">
                            <Image className={styles.icon} src={InstaIcon} alt='Instagram Icon'/>
                        </a>
                        <a href="**">
                            <Image className={styles.icon} src={TgIcon} alt='telegram Icon'/>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MobileHeader;