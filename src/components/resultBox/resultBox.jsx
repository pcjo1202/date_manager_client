import React from 'react';
import styles from './resultBox.module.css';

const ResultBox = () => {
  return (
    <>
      {/* result_box */}
      {/* 
    1. 검색 후 데이터를 받아오고 나서만 목록이 뜨도록한다.
    2. 숨김표시 누르면 숨겨지기 가능
    */}
      <div className={styles.result_box}>
        <h1 className={styles.title}>추천 결과</h1>
        <p className={styles.result_count}>검색 결과 3건</p>
        <ul className={styles.result_list}>
          <li className={styles.result_item}>
            <h1 className={styles.item_title}>광진정보도서관</h1>
            <p className={styles.item_adress}>
              서울특별시 광진구 아차산로78길 90
            </p>
          </li>
          <li className={styles.result_item}>
            <h1 className={styles.item_title}>중곡문화체육센터도서관</h1>
            <p className={styles.item_adress}>서울특별시 광진구 능동로 433</p>
          </li>
          <li className={styles.result_item}>
            <h1 className={styles.item_title}>자양 제4동 도서관</h1>
            <p className={styles.item_adress}>
              서울특별시 광진구 뚝섬로26길 58
            </p>
          </li>
        </ul>
        <button className={styles.onoff_btn}>숨기기</button>
      </div>
    </>
  );
};

export default ResultBox;
