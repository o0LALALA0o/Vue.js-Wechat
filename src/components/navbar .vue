<template>
  <van-sticky>
    <div class="bar">
      <span class="s1" slot="left">{{title}}</span>
      <div class="btn" id="search">
        <van-icon name="search" color="#000000" size="1.6rem" />
      </div>
      <div class="btn" id="o">
        <van-icon name="add-o" color="#000000" size="1.6rem" />
      </div>
    </div>
  </van-sticky>
</template>
<script>
export default {
  name: "navbar",
  props: ["title"], //接收父组件传来的值
  data() {
    return {};
  }
};
</script>
<style scoped>
.s1 {
  float: left;
  font-weight: 700;
  font-size: 1.1rem;
  margin-left: 1rem;
}
.bar {
  background-color: #ededed;
  height: 3.5rem;
  line-height: 3.5rem;
}

.btn {
  float: left;
  width: 4rem;
  height: 3.5rem;
  vertical-align: middle;
  position: absolute;
  text-align: center;
  line-height: 4.1rem;
  right: 0;
}
#search {
  margin-right: 4rem;
}

.btn:active {
  background-color: #b2b2b2;
}
</style>