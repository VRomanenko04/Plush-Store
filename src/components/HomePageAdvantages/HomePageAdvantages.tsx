import React from 'react';
import styles from './HomePageAdvantages.module.scss';
import Packaging from '@/assets/pretty_boxes.jpg';
import FastDelivery from '@/assets/fast_delivery.jpg';
import AnonymDeliery from '@/assets/anonim_delivery.jpg';
import Image from 'next/image';

const advantages = [
    {
        image: Packaging,
        title: 'Пакування',
        description: 'Щось про суперкоробочки та бантики та бла бла бла'
    },
    {
        image: FastDelivery,
        title: 'Отримання у день замовлення',
        description: "У день замовлення доставка кур'єром по місту чи самовивіз"
    },
    {
        image: AnonymDeliery,
        title: 'Анонімна доставка',
        description: 'Можемо зробити Ваше замовлення як анонімний подарунок'
    }
];

const HomePageAdvantages = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Ми про все похвилювались</h2>
            <div className={styles.advantage_list}>
                {advantages.map((advantage) => (
                    <div key={advantage.title} className={styles.advantage}>
                        <Image className={styles.image} src={advantage.image} alt={advantage.title}/>
                        <h6 className={styles.advantage_title}>{advantage.title}</h6>
                        <p className={styles.advantage_description}>{advantage.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HomePageAdvantages;