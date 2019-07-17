<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/img/logo.png">
    <Hi :msg="title"/>
    <!-- 测试上传图片 -->
    
    <upload action="123" ref="upload" :imgUrl="img"></upload>
    <br>
    <el-button @click="upload">上传</el-button>
    <el-button @click="add({num: 1})" type="primary">vuex-total: <em>{{total}}</em></el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import Hi from '../components/hi'
import Upload from '../components/upload/index'
import { mapState, mapMutations, mapActions } from 'vuex'
import { isIe } from 'utils/common'

export default {
  name: 'home',
  components: {
    Hi,
    Upload
  },

  data() {
    return {
      title: 'Vue+Vuex+Element',
      img: 'https://img3.mukewang.com/59964eb600012d9a06400640-100-100.jpg',
    }
  },

  computed: {
    ...mapState(['total'])
  },

  created() {
    console.log(isIe);
    this.upload();
  },

  methods: {
    ...mapMutations([
      'add'
    ]),
    deleteRow(index, rows) {
        rows.splice(index, 1);
      },
    upload() {
      this.img = '';
      this.$refs.upload.submitUpload()
    }
  }
}
</script>

<style lang="stylus">
  .box
    border-radius(6px)
    font-size: fs14
    width: 100px
    color: #fff
    background-color: #000
</style>

