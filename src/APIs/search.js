import axios from 'axios';

class SearchAPI {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  // 서버에 넘겨줘야 하는 값
  // 1. 현재 위치를 알려주는.. 00시 00구까지
  // 2. 카테고리 내용 (LCLAS_NM의 내용 : 자연, 쇼핑시설, 무장애장소)
  async getSearch(category) {
    //{ main: 'nature', sub: 'shopping' }
    try {
      const query = category
        ? `?main=${category.main}&sub=${category.sub}`
        : '';
      const url = `${this.baseURL}/search/${query}`;
      const config = {
        headers: { 'Content-Type': 'application/json', charset: 'utf-8' },
      };

      const data = await axios.get(url, config);

      // console.log(data);

      // if (response.status !== 200) {
      //   throw new Error(data.message);
      // }

      return data;
    } catch (err) {
      console.error(err);
    }
  }
}

export default SearchAPI;
