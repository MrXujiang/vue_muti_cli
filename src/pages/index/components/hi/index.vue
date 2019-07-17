<template>
  <div class="hello">
    <ul>
      <li><a href="https://github.com/MrXujiang" target="_blank" rel="noopener">VUE+VUEX+ElementUI</a></li>
      <li><a href="https://element.eleme.cn/#/zh-CN/component/layout" target="_blank">element文档参考</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'openCoder',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin: 40px 0 0;

ul
  list-style-type: none;
  padding: 0;

li
  display: inline-block;
  margin: 0 10px;

a
  color: #42b983;

</style>
