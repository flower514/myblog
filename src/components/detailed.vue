<template>
  <div id="detailed" class="box-center bg">
    <div class="top">
      <h3>{{ $route.params.data.a_name }}</h3>
      <span>{{ $route.params.data.a_time }}</span>
    </div>
    <div v-html="$route.params.data.a_content"></div>
  </div>
</template>

<script>
export default {
  name: 'detailed',
  data() {
    return {}
  }
}
</script>

<style scoped>
.box-center {
  display: block;
  padding: 20px;
}

.top {
  overflow: hidden;
}

.top h3 {
  font-size: 34px;
  line-height: 40px;
  float: left;
  margin-right: 50px;
}

.top span {
  float: left;
  line-height: 40px;
}
</style>