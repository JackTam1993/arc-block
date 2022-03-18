<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <router-link to="/about">About page</router-link>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div :style="{ display: 'flex', justifyContent: 'center' }">
      <pre :style="{ textAlign: 'left' }">
<code>{{ JSON.stringify(window.blocklet, null, 2) }}</code>
    </pre>
    </div>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import { getTxsData } from '../libs/http';

export default {
  components: {
    HelloWorld,
  },
  methods: {
    async getData() {
      let txsData = await getTxsData()
      console.log(txsData)
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style></style>
