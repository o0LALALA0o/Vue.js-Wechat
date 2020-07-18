<template>
  <div class="box">
    <div class="cbox"></div>
    <ul>
      <li @click="onc">
        <img class="hImg" src="../assets/朋友圈.png" alt />
        <span class="title">朋友圈</span>
        <span class="s">
          <img class="jImg" src="../assets/箭头.png" alt />
        </span>
      </li>
      <li>
        <img class="hImg" src="../assets/视频号.png" alt />
        <span class="title">视频号</span>
        <span class="s">
          <img class="jImg" src="../assets/箭头.png" alt />
        </span>
      </li>
      <li>
        <img class="hImg" src="../assets/扫一扫.png" alt />
        <span class="title">扫一扫</span>
        <span class="s">
          <img class="jImg" src="../assets/箭头.png" alt />
        </span>
      </li>
      <li>
        <img class="hImg" src="../assets/搜一搜.png" alt />
        <span class="title">搜一搜</span>
        <span class="s">
          <img class="jImg" src="../assets/箭头.png" alt />
        </span>
      </li>
      <li>
        <img class="hImg" src="../assets/小程序.png" alt />
        <span class="title">小程序</span>
        <span class="s">
          <img class="jImg" src="../assets/箭头.png" alt />
        </span>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "find",
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    onc() {
      this.$router.push({ path: "/find/moments" });
    }
  }
};
</script>
<style scoped>
.cbox {
  background-color: #ededed;
  position:absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  z-index: 3;
  /* position: relative; */
  /* height: 100%;
  position: fixed; */
}
li {
  background-color: #ffffff;
  height: 3.4rem;
  margin-bottom: 0.8rem;
  line-height: 3.4rem;
}
li:active {
  background-color: #d5d5d5;
}
.hImg {
  height: 1.4rem;
  vertical-align: middle;
  margin-left: 0.8rem;
  margin-right: 0.7rem;
}
.jImg {
  height: 1rem;
  vertical-align: middle;
}
.s {
  position: absolute;
  right: 1rem;
}
</style>