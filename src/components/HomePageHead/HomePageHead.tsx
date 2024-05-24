import React from 'react';
import styles from './HomePageHead.module.scss';
import Plush from '@/assets/main_plush_photo.png';
import Image from 'next/image';


const HomePageHead = () => {
    return (
        <section className={styles.container}>
            <div className={styles.image_block}>
                <Image className={styles.image} src={Plush} alt='plush octopus'/>
                <div className={styles.blur1}></div>
                <div className={styles.blur2}></div>
                <div className={styles.blur3}></div>
                <div className={styles.blur4}></div>
            </div>
            <div className={styles.text_block}>
                <div className={styles.interesting_text}>
                    <h3 className={styles.semibold} style={{fontWeight: 600}}>PLUSHSHOP</h3>
                    <div className={styles.lined_text}>
                        <div className={styles.line}></div>
                        <h5>since 2020</h5>
                        <div className={styles.line}></div>
                    </div>
                </div>
                <h1 className={styles.head_title}>Справжній плюш</h1>
                <p className={styles.head_text}>Найкращі трендові плюшеві іграшки на ринку</p>
                <div className={styles.blur5}></div>
                <div className={styles.blur6}></div>
                <div className={styles.blur7}></div>
            </div>
        </section>
    )
}

export default HomePageHead;