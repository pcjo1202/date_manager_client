import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header_wrapper}>
      <div className={styles.weather_box}>
        {/* 오늘의 날씨 */}
        <div className={styles.today_weather}>
          <h2>오늘의 날씨</h2>
          <span className={styles.weather}>날맑음</span>
          <div className={styles.dust_condition}>
            <span>미세먼지 높음</span>
          </div>
        </div>
      </div>

      <div className={styles.logo} href='#'>
        <h1>여가생활추천 웹 서비스</h1>
      </div>

      <div className={styles.empty}></div>
    </header>
  );
};

export default Header;
