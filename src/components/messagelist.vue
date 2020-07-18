<template>
  <div class="box">
    <div class="cbox"></div>
    <van-cell to='/chat' style="height:4.5rem;">
      <div class="left">
        <img class="hImg" src="../assets/HeadImg/h1.jpg" style="width:3rem;height:3rem;" />
      </div>
      <div class="co">
        <div class="title">马里奥</div>
        <div class="msg">哈哈哈哈</div>
        <div class="date">下午5:30</div>
      </div>
    </van-cell>
    <van-cell to='/chat' style="height:4.5rem;">
      <div class="left">
        <img class="hImg" src="../assets/HeadImg/h2.jpg" style="width:3rem;height:3rem;" />
      </div>
      <div class="co">
        <div class="title">皮卡丘</div>
        <div class="msg">哈哈哈哈</div>
        <div class="date">下午5:30</div>
      </div>
    </van-cell>
    <van-cell to='/chat' style="height:4.5rem;">
      <div class="left">
        <img class="hImg" src="../assets/q.jpg" style="width:3rem;height:3rem;" />
      </div>
      <div class="co">
        <div class="title">啦啦啦</div>
        <div class="msg">啦啦啦啦啦啦啦啦啦啦</div>
        <div class="date">下午5:30</div>
      </div>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: "messagelist",
  data() {
    return {
      msg: ""
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cbox {
  background-color: #ededed;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
}
.co {
  padding-left: 4rem;
}
.co .title {
  font-weight: 650;
  font-size: 18px;
  color: #191919;
}
.co .msg {
  font-size: 0.8rem;
  color: #b2b2b2;
}
.co .date {
  position: absolute;
  font-size: 0.8rem;
  right: 0.3rem;
  top: 0.2rem;
  color: #b2b2b2;
}
.left {
  position: absolute;
}
.hImg {
  border-radius: 5px;
}
.van-cell:active {
  background-color: #ededed;
}
</style>
