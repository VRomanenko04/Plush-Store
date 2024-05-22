import HomePageHead from '@/components/HomePageHead/HomePageHead';
import React from 'react';
import styles from '@/styles/mainpage.module.scss';
import HomePagePopular from '@/components/HomePagePopular/HomePagePopular';

export default function MainPage() {
  return (
    <main className={styles.container}>
      <HomePageHead />
      <HomePagePopular />
    </main>
  );
}