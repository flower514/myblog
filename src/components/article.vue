<template>
  <div id="article" class="box-center bg">
    <div class="left">
      <ul class="content">
        <li v-for="(item,index) in info" :key="index" v-if="min<=index&&index<max">
          <i class="fa fa-diamond"></i>
          <router-link :to="{name:'detailed',params:{data:item}}">
            <a href="#">{{ item.a_name }}</a>
          </router-link>
          <span>{{ item.a_time }}</span>
        </li>
      </ul>
      <el-pagination
        style="text-align:center;"
        @current-change="handleCurrentChange"
        :current-page.sync="current"
        :page-size="page"
        layout="prev, pager, next, jumper"
        :total="info.length"
      ></el-pagination>
    </div>
    <div class="right">
      <div class="type-box">
        <h5 @click="type">分类</h5>
        <ul>
          <li>
            <a href="#">
              <span>前端</span>
              <span>({{ qd_num }})</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>后端</span>
              <span>({{ hd_num }})</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>美文</span>
              <span>({{ belles_lettres }})</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>未分类</span>
              <span>({{ unfiled }})</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      page: 10,
      current: 1,
      min: null,
      max: null,
      qd_num: 0,
      hd_num: 0,
      unfiled: 0,
      belles_lettres: 0
    }
  },
  props: ['info'],
  mounted() {
    this.count()
    this.type()
  },
  methods: {
    count() {
      this.min = (this.current - 1) * this.page
      this.max = this.current * this.page
    },
    handleCurrentChange() {
      this.count()
    },
    type() {
      for (let i = 0; i < this.info.length; i++) {
        if (this.info[i].a_type == '前端') {
          this.qd_num++
        }
        if (this.info[i].a_type == '后端') {
          this.hd_num++
        }
        if (this.info[i].a_type == '未分类') {
          this.unfiled++
        }
        if (this.info[i].a_type == '美文') {
          this.belles_lettres++
        }
      }
    }
  }
}
</script>

<style scoped>
.left {
  flex: 5;
}

.right {
  flex: 2;
}

.content {
  width: 100%;
}

.content > li {
  margin: 10px;
  border-bottom: 1px solid #ebebeb;
}

.content a {
  font-size: 18px;
  line-height: 24px;
}

.content span {
  color: #a5a5a5;
  font-size: 14px;
  line-height: 24px;
  float: right;
}

.content i {
  font-size: 12px;
  color: blue;
}

.right h5 {
  font-size: 20px;
}

.right ul {
  padding: 10px;
}

.right a {
  width: 100%;
  color: #26709a;
}

.type-box a > span:nth-child(1) {
  float: left;
}

.type-box a > span:nth-child(2) {
  float: right;
}
</style>