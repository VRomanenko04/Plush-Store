import HomePageHead from '@/components/HomePageComponents/HomePageHead/HomePageHead';
import React from 'react';
import styles from '@/styles/mainpage.module.scss';
import HomePagePopular from '@/components/HomePageComponents/HomePagePopular/HomePagePopular';
import HomePageHolidays from '@/components/HomePageComponents/HomePageHolidays/HomePageHolidays';
import HomePageAdvantages from '@/components/HomePageComponents/HomePageAdvantages/HomePageAdvantages';

export default function MainPage() {
  return (
    <main className={styles.container}>
      <HomePageHead />
      <HomePagePopular />
      <HomePageHolidays />
      <HomePageAdvantages />
    </main>
  );
}