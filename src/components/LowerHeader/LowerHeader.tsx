import React from 'react';
import styles from './LowerHeader.module.scss';
import PromotionIcon from '@/assets/icons/promotion_icon.svg';
import Logo from '@/assets/plush_logo.png';
import Image from 'next/image';
import Link from 'next/link';


const LowerHeader = () => {
    return (
        <div className={styles.second_header}>
            <nav>
                <ul className={styles.menu}>
                    <li>
                        <Link className={styles.link} href='**'><p>Акції <Image src={PromotionIcon} alt='Promotion icon'/></p></Link>
                    </li>
                    <li>
                        <Link className={styles.link} href='**'><p>До свят</p></Link>
                    </li>
                    <li>
                        <Link className={styles.link} href='/'><Image className={styles.logo} src={Logo} alt='Plush logo'/></Link>
                    </li>
                    <li>
                        <Link className={styles.link} href='**'><p>Весь каталог</p></Link>
                    </li>
                    <li>
                        <Link className={styles.link} href='**'><p>Компаніям</p></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default LowerHeader;