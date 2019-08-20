<template>
  <div id="app" :style="bg">
    <MyHead />
    <router-view :info="info" />
  </div>
</template>

<script>
import MyHead from '@/components/part/MyHead'

export default {
  name: 'App',
  components: {
    MyHead
  },
  data() {
    return {
      info: '',
      bg: {
        backgroundImage: 'url(' + require('@/image/bg.jpg') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        backgroundAttachment: 'fixed'
      }
    }
  },
  mounted() {
    this.axios
      // .get('http://www.zflower.cn/app.php')
      .get('http://localhost:8081/phpvue/app.php')
      .then(response => (this.info = response.data))
      .catch(function(error) {
        // 请求失败处理
        console.log(error)
      })
  }
}
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}

html {
  min-height: 100%;
  display: flex;
  width: 100%;
}

body {
  width: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  display: inline-block;
  color: #000000;
}

.box-center {
  max-width: 1080px;
  margin: auto;
  display: flex;
  box-sizing: border-box;
}

.bg {
  background: #ffffff91;
  margin-top: 10px;
}

.bg > * {
  padding: 10px;
}

a:hover {
  color: red;
  text-decoration: underline;
}

/*ElementUI Timeline 时间线样式 */
.course .is-top {
  color: #000000;
  font-size: 18px;
}
</style>
