import React from 'react';
import Image from 'next/image';
import styles from './HomePageHolidays.module.scss';
import octopus1 from '@/assets/octopus1.png';
import octopus2 from '@/assets/octopus2.png';
import octopus3 from '@/assets/octopus3.png';
import octopus4 from '@/assets/octopus4.png';
import octopus5 from '@/assets/octopus5.png';


const HomePageHolidays = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Найближчі свята</h2>
            <div className={styles.holidays_block}>
                <div className={styles.line}></div>
                <div className={styles.holiday1}>
                    <Image className={styles.img} src={octopus1} alt='octopus'/>
                    <p className={styles.holiday_text}>День народження близької людини</p>
                </div>
                <div className={styles.holiday2}>
                    <Image className={styles.img} src={octopus2} alt='octopus'/>
                    <p className={styles.holiday_text}>1 січня <br/> Новий Рік</p>
                </div>
                <div className={styles.holiday3}>
                    <Image className={styles.img} src={octopus3} alt='octopus'/>
                    <p className={styles.holiday_text}>14 лютого <br/> День Святого Валентина</p>
                </div>
                <div className={styles.holiday4}>
                    <Image className={styles.img} src={octopus4} alt='octopus'/>
                    <p className={styles.holiday_text}>8 березня <br/> Міжнародний Жіночий день</p>
                </div>
                <div className={styles.holiday5}>
                    <Image className={styles.img} src={octopus5} alt='octopus'/>
                    <p className={styles.holiday_text}>12 травня <br/> День Матері</p>
                </div>
            </div>
        </section>
    )
}

export default HomePageHolidays