<template>
  <div id="index" class="box-center">
    <div class="left-box">
      <div class="l-top bg">
        <img src="@/image/myhead.jpg" />
        <p class="motto">人生的道路不会一帆风顺，事业的征途也充满崎岖艰险，只有奋斗，只有拼搏，才会达到成功的彼岸。</p>
        <p style="padding: 20px 0px 20px 40px;">公告：</p>
      </div>
      <div class="lately bg">
        <h4>近期文章</h4>
        <ul>
          <li v-for="(item,index) in info" :key="index">
            <router-link :to="{name:'detailed',params:{data:item}}">{{ item.a_name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="right-box">
      <div class="bg" v-for="(item,index) in info" :key="index" v-if="index<=2">
        <div class="r-top">
          <router-link :to="{name:'detailed',params:{data:item}}">
            <h3>{{ item.a_name }}</h3>
          </router-link>
        </div>
        <div class="content" v-html="item.a_content"></div>
        <div class="r-bottom">
          <span>{{ item.a_type }}</span>
          <span>{{ item.a_time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  props: ['info']
}
</script>

<style scoped>
.left-box {
  flex: 1;
  margin-right: 10px;
}

.right-box {
  flex: 2;
}

.l-top > img {
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: auto;
  padding: 20px;
}

.l-top > .motto {
  padding: 30px 20px;
  color: #ffffff;
  background: #00a3e1;
  text-indent: 32px;
}

#index h4 {
  background: #00a3e1;
  color: #ffffff;
  padding-left: 30px;
}

.lately li {
  border-bottom: 1px solid #ddd;
}

.lately a {
  margin: 10px 30px;
}

.r-top h3 {
  font-size: 28px;
  float: left;
}

.r-bottom span {
  float: right;
}

.r-bottom span:nth-child(1) {
  float: left;
  color: #ffffff;
  background: #12c9ff;
  padding: 2px 8px;
  border-radius: 5px;
}

.right-box > .bg {
  padding: 20px;
}

.content {
  height: 150px;
  overflow: hidden;
}

.r-top {
  overflow: hidden;
}

.r-bottom {
  overflow: hidden;
  padding-bottom: 0px;
  color: #046593;
}
</style>