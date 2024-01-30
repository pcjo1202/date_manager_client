import React, { useState } from 'react';
import styles from './main.module.css';
import SearchBar from '../searchBar/searchBar';
import ResultBox from '../resultBox/resultBox';
import MapBox from '../mapBox/mapbox';

const Main = ({ Search }) => {
  const [resultData, setResultData] = useState([]);

  return (
    <>
      <main className={styles.main_wrapper}>
        <SearchBar Search={Search} setResultData={setResultData} />
        <MapBox />
        <ResultBox Search={Search} resultData={resultData} />
      </main>
    </>
  );
};

export default Main;
