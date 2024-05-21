import HomePageHead from '@/components/HomePageHead/HomePageHead';
import React from 'react';
import styles from '@/styles/mainpage.module.scss';

export default function MainPage() {
  return (
    <main className={styles.container}>
      <HomePageHead />
    </main>
  );
}