<template>
  <div class="box">
    <div class="camera">
      <div class="hright">
        <img class="hImg" src="../assets/拍摄.png" alt />
      </div>
    </div>

    <div class="personal">
      <div class="pleft">
        <img class="pImg" src="../assets/q.jpg" alt />
      </div>
      <div class="pcenter">
        <div class="name">啦啦啦</div>
        <div class="num">微信号：qwer123456789</div>
      </div>
      <div class="pright">
        <span>
          <img src="../assets/码.png" alt />
          <img src="../assets/箭头.png" alt />
        </span>
      </div>
    </div>

    <div class="list">
      <ul>
        <li style="margin-bottom: 0.5rem;">
          <div class="lleft">
            <img class="hImg" src="../assets/支付.png" alt />
          </div>
          <div class="lright">
            支付
            <span class="s">
              <img class="jImg" src="../assets/箭头.png" alt />
            </span>
          </div>
        </li>
        <li>
          <div class="lleft">
            <img class="hImg" src="../assets/收藏.png" alt />
          </div>
          <div class="lright">
            收藏
            <span class="s">
              <img class="jImg" src="../assets/箭头.png" alt />
            </span>
          </div>
        </li>
        <li>
          <div class="lleft">
            <img class="hImg" src="../assets/相册.png" alt />
          </div>
          <div class="lright">
            相册
            <span class="s">
              <img class="jImg" src="../assets/箭头.png" alt />
            </span>
          </div>
        </li>
        <li>
          <div class="lleft">
            <img class="hImg" src="../assets/卡包.png" alt />
          </div>
          <div class="lright">
            卡包
            <span class="s">
              <img class="jImg" src="../assets/箭头.png" alt />
            </span>
          </div>
        </li>
        <li style="margin-bottom: 0.5rem;">
          <div class="lleft">
            <img class="hImg" src="../assets/表情.png" alt />
          </div>
          <div class="lright">
            表情
            <span class="s">
              <img class="jImg" src="../assets/箭头.png" alt />
            </span>
          </div>
        </li>
        <li>
          <div class="lleft">
            <img class="hImg" src="../assets/设置.png" alt />
          </div>
          <div class="lright">
            设置
            <span class="s">
              <img class="jImg" src="../assets/箭头.png" alt />
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "find",
  data() {
    return {
      msg: ""
    };
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #ededed;
}
.camera {
  width: 100%;
  height: 2.8rem;
  line-height: 3rem;
  background-color: #ffffff;
  /* border: 1px solid; */
}
.hright {
  width: 3rem;
  height: 2.8rem;
  position: absolute;
  right: 0;
  text-align: center;
}
.hright:active {
  background-color: #ededed;
}
.hImg {
  height: 1.2rem;
  /* vertical-align: middle; */
}
.personal {
  background-color: #ffffff;
  height: 6rem;
  margin-bottom: 0.5rem;
}
.pleft,
.pcenter {
  float: left;
}
.pleft {
  margin-left: 1.8rem;
  margin-right: 1rem;
}
.pright {
  float: right;
  line-height: 5.5rem;
}
.pright img {
  margin-right: 1rem;
  height: 0.8rem;
}
.name {
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 0.7rem;
}
.num {
  color: #7f7f7f;
  font-size: 0.9rem;
}
.pImg {
  height: 4rem;
  vertical-align: middle;
  border-radius: 7px;
}

li {
  height: 3.5rem;
  line-height: 3.5rem;
  background-color: #ffffff;
}
ul :active {
  background-color: #d5d5d5;
}
.lright {
  height: 3.5rem;
  color: #191919;
  border-bottom: solid 1px #e5e5e5;
  margin-left: 4rem;
  /* background-color: red; */
}
.lleft {
  position: absolute;
}
.list .hImg {
  margin-left: 1.5rem;
  vertical-align: middle;
  border-radius: 5px;
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