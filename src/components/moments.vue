<template>
  <div class="box">
    <div class="barD">
      <div class="bLeft" @click="onCli">
        <img class="hImg" src="../assets/m箭头.png" alt />
      </div>
      <div class="bright">
        <img class="hImg" src="../assets/m拍摄.png" alt />
      </div>
    </div>
    <div class="bgD">
      <div class="bottomD">
        <div class="MyName">啦啦啦</div>
        <div class="MyImg">
          <img src="../assets/q.jpg" alt />
        </div>
      </div>
    </div>

    <ul>
      <li>
        <div class="lLeft">
          <img class="hImg" src='../assets/HeadImg/h1.jpg' alt />
        </div>
        <div class="lRight">
          <div class="lTitle">马里奥</div>
          <div class="lContent">去吃蘑菇啦！！</div>
          <div class="lImg">
            <img src="../assets/HeadImg/p1.jpg" alt="">
          </div>
          <div class="lDate">2小时前</div>
        </div>
        <div class="lMore">
          <img src="../assets/更多.png" alt="">
        </div>
      </li>

      <li>
        <div class="lLeft">
          <img class="hImg" src='../assets/HeadImg/h2.jpg' alt />
        </div>
        <div class="lRight">
          <div class="lTitle">皮卡丘</div>
          <div class="lContent">皮卡皮卡</div>
          <div class="lImg">
            <img src="../assets/HeadImg/p2.jpg" alt="">
          </div>
          <div class="lDate">2小时前</div>
        </div>
        <div class="lMore">
          <img src="../assets/更多.png" alt="">
        </div>
      </li>

      <li>
        <div class="lLeft">
          <img class="hImg" src='../assets/q.jpg' alt />
        </div>
        <div class="lRight">
          <div class="lTitle">啦啦啦</div>
          <div class="lContent">哈哈哈哈</div>
          <div class="lImg">
            <img src="../assets/mbg.jpg" alt="">
          </div>
          <div class="lDate">2小时前</div>
        </div>
        <div class="lMore">
          <img src="../assets/更多.png" alt="">
        </div>
      </li>
    </ul>
    
  </div>
</template>
<script>
export default {
  name: "moments",
  data() {
    return {};
  },
  methods: {
    onCli() {
      // history.back();
      this.$router.back();
    }
  },
};
</script>
<style scoped>
.box {
  /* width: 100%; */
  position: absolute;
  left: 0px;
  top: 0px;
  background-color: #ffffff;
}
.barD {
  position: fixed;
  z-index: 8;
}
.bgD {
  background-image: url("../assets/mbg.jpg");
  height: 15rem;
  background-position: 0;
  background-repeat: no-repeat;
  position: relative;
  background-size: 100%;
  margin-bottom: 2rem;
}
.barD {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
}
.bLeft,
.bright {
  position: absolute;
  width: 3rem;
  text-align: center;
}
.bLeft:active,
.bright:active {
  background-color: #ffffff;
  opacity: 0.4;
}
.bLeft {
  left: 0;
}
.bright {
  right: 0;
}
.barD img {
  height: 1.2rem;
}
.bottomD {
  position: absolute;
  bottom: -1rem;
  right: 1rem;
  height: 4rem;
  line-height: 4rem;
  color: #ffffff;
  text-shadow: 1px 1px 2px #000;
  font-weight: bold;
  /* font-size: 1rem; */
}
.MyImg,
.MyName {
  float: left;
}
.MyName {
  bottom: 0;
}

.MyImg img {
  height: 4rem;
  margin-left: 1.5rem;
  border-radius: 8px;
}
li{
  width: 100%;
  float: left;
  border-bottom: 1px solid #e5e5e5;
  position: relative;
  padding-top: 1rem;
}
li div{
  margin-bottom: 4px;
}
.lLeft,
.lRight {
  /* border: 1px solid; */
  float: left;
}
.lLeft{
  width: 4rem;
  text-align: center;
}
.hImg{
  height: 2.5rem;
  border-radius: 5px;
}
.lTitle{
  color: #586b95;
  font-weight: bold;
}
.lImg img{
  width: 16rem; ;
}
.lDate{
  margin-top: .7rem;
  margin-bottom: .7rem;
  font-size: .8rem;
  color: #7e7e7e;
}
.lMore{
  position:absolute;
  bottom: .5rem;
  right: 1.5rem;
}
.lMore img{
  height: 1.2rem;
}
</style>