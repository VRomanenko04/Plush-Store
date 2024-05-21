'use client';
import React from 'react';
import UpperHeader from '../UpperHeader/UpperHeader';
import LowerHeader from '../LowerHeader/LowerHeader';
import InfoLine from '../InfoLine/InfoLine';
import { usePathname } from 'next/navigation';


const Header = () => {

    const location = usePathname();
    const isHomePage = location === '/'

    return (
        <header>
            {isHomePage && <InfoLine />}
            <UpperHeader />
            <LowerHeader />
        </header>
    )
}

export default Header;