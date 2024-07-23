<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- ここに <span> タグを追加 -->
      <span id="spn1">表示用のテキスト</span>
    <p>
      xFor a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>{{ data.title }}</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li v-for="link in data.links" :key="link.text">
          <a :href="link.href">{{ link.text }}</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <!-- ボタンを追加 -->
    <button id="btn1" v-on:click="handleButtonClick" test="123">クリック1</button>
    <button id="btn2" v-on:click="handleButtonClick" test="456">クリック2</button>
    <template v-for="link in data.parVals" :key="link.text">
      <button v-on:click="handleButtonClick" :test="link.text">{{ link.text }}がクリックされました！</button>
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
          {
            text: "コア ドキュメント",
            href: "https://vuejs.org"
          },
          {
            text: "フォーラム",
            href: "https://forum.vuejs.org"
          },
          {
            text: "Community Chat",
            href: "https://chat.vuejs.org"
          },
          ],
        parVals: [
          {
            text: "123パラメータ1",
            value: "値1"
          },
          {
            text: "456パラメータ2",
            value: "値2"
          },
        ]
      }
    }
  },  
  mounted() {
    // JSONデータのフェッチ処理
    // fetch('https://vuetest1.netlify.app/test2.json')
    //   .then(response => response.json())
    //   .then(jsonData => {
    //     this.data.parVals = jsonData;
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    // JSONデータのフェッチ処理
    // axios.get('https://vuetest1.netlify.app/test2.json')
    axios.get('/test2.json')
      .then(response => {
        // this.data.parVals = response.data;
        const jsonData = JSON.parse(response.data);
        this.data.parVals = jsonData;
        console.log('this.data.parVals=>'+this.data.parVals);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });

    // FileReader APIを使用してローカルファイルを読み込む
    const file = new File([''], 'ykptest.json'); // 空の文字列を渡す
    const reader = new FileReader();

    reader.onload = () => {
      console.log('this.data.parVals-=->'+this.data.parVals);
      const jsonData = JSON.parse(this.data.parVals);
      this.data.parVals = jsonData;
    };
    reader.onerror = (error) => {
      console.error(error);
    };
    reader.readAsText(file);
  },
  methods: {
    handleButtonClick(event) {
      const buttonLabel = event.target.getAttribute('test');
      const outputText = `${buttonLabel}がクリックされました！`;
      console.log(outputText);
      document.getElementById('spn1').textContent = outputText;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
