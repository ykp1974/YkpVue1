<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span id="spn1">
      <img v-if="loading" src="/loading-37-1.gif" alt="Loading..." />
      <span v-else>{{ fetchedText }}</span>
    </span>
    <h3>{{ data.title }}</h3>
    <button id="btn1" v-on:click="handleButtonClick" test="123">本日のオーダー（直近以外）</button>
    <template v-for="link in data.parVals2" :key="link.text">
      <button v-on:click="handleButtonClick" :test="link.text">{{ link.text }}</button>
    </template>
    <!-- 新しい領域を追加 -->
    <div id="order-info">
      <span v-if="orderLoading">
        <img src="/loading-37-1.gif" alt="Loading..." />
      </span>
      <span v-else v-html="orderInfo"></span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'OrderList',
  props: {
    msg: String
  },
  data() {
    return {
      data: {
        title: "Plz check the list above, and focus on your work.",
        links: [
          { text: "コア ドキュメント", href: "https://vuejs.org" },
          { text: "フォーラム", href: "https://forum.vuejs.org" },
          { text: "Community Chat", href: "https://chat.vuejs.org" }
        ],
        parVals2: []
      },
      loading: true,
      fetchedText: '',
      orderLoading: false,
      orderInfo: ''
    };
  },
  mounted() {
    axios.get('https://script.google.com/macros/s/AKfycbyznFLfW2Gi4H8mURzT7vrx0fD-xz4iSBAGPeUXOfAtxAgwwRhC6ffgl4YM4TM7F5M/exec')
      .then(response => {
        this.fetchedText = Object.values(response.data).join(' ');
        this.loading = false;
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        this.loading = false;
      });
  },
  methods: {
  handleButtonClick() {
    this.orderLoading = true;
    axios.get('https://script.google.com/macros/s/AKfycbyfNO4Id7uY1_NSaLDiGJzAXY-lKwk7zmDCMxq85l9bi9JAIstDMu7_gk4MRedfMso/exec')
      .then(response => {
        // JSONを日付で降順にソート
        const sortedData = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // テーブル形式でデータをフォーマット
        this.orderInfo = `
          <table>
            <tr><th>Date</th><th>Order</th></tr>
            ${sortedData.map(item => `<tr><td>${item.date}</td><td>${item.order}</td></tr>`).join('')}
          </table>
        `;
        
        this.orderLoading = false;
      })
      .catch(error => {
        console.error('Error fetching order info: ', error);
        this.orderLoading = false;
      });
  }
}
};
</script>

<style type="text/css">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#order-info {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh; /* 必要に応じて調整 */
}
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left; /* ここで左揃えにしていますが、必要に応じて変更可能 */
}

td {
  white-space: nowrap; /* テキストを折り返さないようにする */
}
</style>
