<template>
  <div id="wangeditor">
    <vue-wangeditor id="editor" style="width:100%;" width="100%"></vue-wangeditor>
    <div style="margin-top:10px;">
      <button id="btnHtml" @click="aa">查看html</button>
      <button id="btnText" @click="bb">查看text</button>
      <button id="btnHide">隐藏</button>
      <textarea id="textarea" style="width:100%; height:100px; margin-top:10px;"></textarea>
    </div>
  </div>
</template>

<script>
import vueWangeditor from 'vue-wangeditor'
export default {
  name: '',
  components: {
    vueWangeditor
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {
    aa() {
      $('#textarea').val($('#editor').html())
    },
    bb() {
      $('#textarea').val($('#editor img').attr('src'))
    },
    cc() {}
  }
}
</script>

<style scoped>
#editor {
  width: 100%;
}
</style>