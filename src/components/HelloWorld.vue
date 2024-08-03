<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span id="spn1">表示用のテキスト</span>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <!-- <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>. -->
    </p>
    <h3>{{ data.title }}</h3>
    <ul>
      <!-- <li v-for="link in data.links" :key="link.text">
        <a :href="link.href">{{ link.text }}</a>
      </li> -->
    </ul>
    <button id="btn1" v-on:click="handleButtonClick" test="123">クリック1</button>
    <button id="btn2" v-on:click="handleButtonClick" test="456">クリック2</button>
    <template v-for="link in data.parVals2" :key="link.text">
      <button v-on:click="handleButtonClick" :test="link.text">{{ link.text }}</button>
    </template>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      data: {
        title: "Vue.js アプリケーションへようこそ！",
        links: [
          { text: "コア ドキュメント", href: "https://vuejs.org" },
          { text: "フォーラム", href: "https://forum.vuejs.org" },
          { text: "Community Chat", href: "https://chat.vuejs.org" }
        ],
        parVals2: []
      }
    };
  },
  mounted() {
    axios.get('https://script.google.com/macros/s/AKfycbzCSMZiatyG-DGQCba9p6ct_K-ncyaUIX0aPtAEC5E67uVh33qizhjIFq7G9ullO_Y/exec')
      .then(response => {
        Object.keys(response.data).forEach(key => {
          document.getElementById('spn1').textContent = '取得情報==>' + response.data[key];
        });
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  },
  methods: {
    handleButtonClick(event) {
      const buttonLabel = event.target.getAttribute('test');
      const outputText = `${buttonLabel}がクリックされました！`;
      console.log(outputText);
      document.getElementById('spn1').textContent = outputText;
    }
  }
};
</script>

<style scoped>
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
</style>
