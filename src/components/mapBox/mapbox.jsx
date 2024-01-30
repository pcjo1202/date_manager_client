import React, { useEffect } from 'react';
import styles from './mapBox.module.css';

const MapBox = () => {
  useEffect(() => {
    // 카카오 맵을 생성하고 설정
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(37.5665, 126.978), // 서울의 위도, 경도
      level: 3, // 확대 수준
    };

    const map = new window.kakao.maps.Map(container, options);

    // 기타 마커, 인포윈도우 등의 설정
    const marker = new window.kakao.maps.Marker({
      position: map.getCenter(),
    });

    marker.setMap(map);
  }, []); // 컴포넌트가 처음 마운트될 때만 실행

  return (
    <>
      {/* map_box */}
      <article className={styles.map_box}>
        <div className={styles.map} id='map'>
          여기에 지도
        </div>
      </article>
    </>
  );
};

export default MapBox;
