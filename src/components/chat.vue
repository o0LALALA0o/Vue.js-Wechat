<template>
  <div class="box">
    <div class="cbox"></div>
    <div class="barD">
      <div class="bLeft" @click="onCli">
        <img class="hImg" src="../assets/箭头3.png" alt />
      </div>
      <div class="bright">
        <img class="hImg2" src="../assets/更多2.png" alt />
      </div>
    </div>

    <div class="tool">
      <van-row>
        <van-col span="3">
          <img src="../assets/语音.png" alt />
        </van-col>
        <van-col span="15">
          <van-cell-group>
            <van-field placeholder />
          </van-cell-group>
        </van-col>
        <van-col span="6">
          <img style="margin-right: .5rem;" src="../assets/表情.png" alt />
          <img  src="../assets/加号.png" alt />
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "chat",
  methods: {
    onCli() {
      // history.back();
      this.$router.back();
    }
  }
};
</script>
<style scoped>
.cbox {
  background-image: url("../assets/bg2.jpg");
  background-position: 0;
  /* background-repeat: no-repeat; */
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;  
}
.barD {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  background-color: #ffffff;
}
.bLeft,
.bright {
  position: absolute;
  width: 3rem;
  text-align: center;
}
.bLeft:active,
.bright:active {
  background-color: #978e8e;
  opacity: 0.4;
}
.bLeft {
  left: 0;
}
.bright {
  right: 0;
}
.hImg {
  height: 1.2rem;
}
.hImg2 {
  height: 0.2rem;
}
.tool {
  padding-top: .5rem;
  position: fixed;
  bottom: 0;
  height: 3rem;
  width: 100%;
  z-index: 16;
  line-height: 3rem;
  background-color: #f7f7f7;
  text-align: center;
}
.tool img {
  height: 1.7rem;
}
</style>