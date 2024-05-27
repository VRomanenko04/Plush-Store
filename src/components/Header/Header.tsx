'use client';
import React from 'react';
import UpperHeader from './UpperHeader/UpperHeader';
import LowerHeader from './LowerHeader/LowerHeader';
import InfoLine from './InfoLine/InfoLine';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';


const Header = () => {

    const location = usePathname();
    const isHomePage = location === '/'

    return (
        <header className={styles.header_container}>
            {isHomePage && <InfoLine />}
            <UpperHeader />
            <LowerHeader />
        </header>
    )
}

export default Header;