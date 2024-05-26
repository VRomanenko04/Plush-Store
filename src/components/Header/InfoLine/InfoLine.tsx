'use client'
import React, { useEffect, useState } from 'react';
import styles from './InfoLine.module.scss';
import Arrow from '@/assets/icons/arrow.svg';
import Image from 'next/image';

const Phrases = ['КРАЩІ ЦІНИ НА РИНКУ', 'ДОСТАВКА У ДЕНЬ ЗАМОВЛЕННЯ', 'ОПТОВІ ПОСТАВКИ ВІД ВИРОБНИКА'];

const InfoLine = () => {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % Phrases.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % Phrases.length);
    };

    const handlePrev = () => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex - 1 + Phrases.length) % Phrases.length);
    };

    return (
        <section className={styles.container}>
            <div className={styles.slider}>
                <button className={styles.btn} onClick={handlePrev}>
                    <Image className={styles.left_arrow} src={Arrow} alt='left arrow'/>
                </button>
                <p className={styles.text}>{Phrases[currentPhraseIndex]}</p>
                <button className={styles.btn} onClick={handleNext}>
                    <Image className={styles.right_arrow} src={Arrow} alt='right arrow'/>
                </button>
            </div>
        </section>
    )
}

export default InfoLine;