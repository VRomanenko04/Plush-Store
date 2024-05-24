import React from 'react';
import styles from './Footer.module.scss';
import FastDeliveryIcon from '@/assets/icons/fast_delivery_icon.png';
import BestQualityIcon from '@/assets/icons/best_quality_icon.png';
import StocksIcon from '@/assets/icons/stocks_icon.png';
import InstaIcon from '@/assets/icons/inst_icon.svg';
import TgIcon from '@/assets/icons/tg_icon.svg';
import Image from 'next/image';
import Link from 'next/link';


const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.first_column}>
                <div className={styles.icons}>
                    <div>
                        <Image className={styles.icon} src={FastDeliveryIcon} alt='Fast Delivery Icon'/>
                        <p>Доставимо у день замовлення</p>
                    </div>
                    <div>
                        <Image className={styles.icon} src={BestQualityIcon} alt='Best Quality Icon'/>
                        <p>Кращі постачальники</p>
                    </div>
                    <div>
                        <Image className={styles.icon} src={StocksIcon} alt='Stocks Icon'/>
                        <p>Багато акційних пропозицій</p>
                    </div>
                </div>
                <p className={styles.copyright}>© 2024 PlushShop</p>
            </div>
            <div className={styles.links}>
                <div className={styles.second_column}>
                    <h6>Інформація</h6>
                    <Link className={styles.link} href='**'>Про компанію</Link>
                    <Link className={styles.link} href='**'>Доставка та оплата</Link>
                    <Link className={styles.link} href='**'>Контакти</Link>
                    <Link className={styles.link} href='**'>Компаніям</Link>
                </div>
                <div className={styles.third_column}>
                    <h6>Каталог</h6>
                    <Link className={styles.link} href='**'>Повний каталог</Link>
                    <Link className={styles.link} href='**'>Акції</Link>
                </div>
            </div>
            <div className={styles.firth_column}>
                <div className={styles.phone_container}>
                    <a className={styles.number} href='tel:0662916690'>+38 (066) 291 66 90</a>
                    <p>з 9:00 до 21:00</p>
                </div>
                <div className={styles.social_container}>
                    <a className={styles.icon_btn} href="**">
                        <Image className={styles.inst_icon} src={InstaIcon} alt='Instagram Icon'/>
                    </a>
                    <a className={styles.icon_btn} href="**">
                        <Image className={styles.tg_icon} src={TgIcon} alt='telegram Icon'/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;