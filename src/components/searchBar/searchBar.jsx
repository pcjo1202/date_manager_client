import React, { useState } from 'react';
import styles from './searchBar.module.css';
import axios from 'axios';

const SearchBar = ({ Search, setResultData }) => {
  const [param, setParam] = useState({ main: 'nature', sub: 'shopping' });

  async function getSearch() {
    const response = await Search.getSearch(param);
    const data = response.data[0];
    console.log(data);
    // setResultData(response.data)
  }

  return (
    <>
      {/* searchBar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getSearch();
        }}
        className={styles.searchBar}
      >
        <h1 className={styles.title}>찾아보기</h1>
        <ul className={styles.search_box}>
          {/* 인원선택 */}
          <li className={styles.search_category}>
            <h2 className={styles.members}>인원수</h2>
            <ul className={styles.item_list}>
              <li className={styles.item}>나 혼자</li>
              <li className={styles.item}>둘이서</li>
              <li className={styles.item}>여러명</li>
            </ul>
          </li>
          {/* 대표 키워드 선택 */}
          <li className={styles.search_category}>
            <h2 className={styles.members}>대표 키워드</h2>
            <ul className={styles.item_list}>
              <li className={styles.item}>카페</li>
              <li className={styles.item}>관광명소</li>
              <li className={styles.item}>자연휴양</li>
              <li className={styles.item}>맛집</li>
              <li className={styles.item}>쇼핑시설</li>
            </ul>
          </li>
          {/* 상세 키워드 선택 */}
          <li className={styles.search_category}>
            <h2 className={styles.members}>상세 키워드</h2>
            <ul className={styles.item_list}>
              <li className={styles.item}>장애인</li>
              <li className={styles.item}>어린이 문화시설</li>
              <li className={styles.item}>임산부</li>
              <li className={styles.item}>실내</li>
            </ul>
          </li>
        </ul>

        <button className={styles.submit_btn}>찾기</button>
      </form>
    </>
  );
};

export default SearchBar;
