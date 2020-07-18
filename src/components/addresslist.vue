<template>
  <div>
    <div>
      <ul>
        <li>
          <div class="left">
            <img class="hImg" src="../assets/新的朋友.png" alt />
          </div>
          <div class="right">新的朋友</div>
        </li>
        <li>
          <div class="left">
            <img class="hImg" src="../assets/群聊.png" alt />
          </div>
          <div class="right">群聊</div>
        </li>
        <li>
          <div class="left">
            <img class="hImg" src="../assets/标签.png" alt />
          </div>
          <div class="right">标签</div>
        </li>
        <li>
          <div class="left">
            <img class="hImg" src="../assets/公众号.png" alt />
          </div>
          <div class="right">公众号</div>
        </li>
      </ul>
    </div>
     <van-index-bar>
      <van-index-anchor class="indexBox" index="M" />
      <ul>
        <li>
          <div class="left">
            <img class="hImg" src="../assets/HeadImg/h1.jpg" alt />
          </div>
          <div class="right">马里奥</div>
        </li>
      </ul>
    </van-index-bar>
    <van-index-bar>
      <van-index-anchor class="indexBox" index="P" />
      <ul>
        <li>
          <div class="left">
            <img class="hImg" src="../assets/HeadImg/h2.jpg" alt />
          </div>
          <div class="right">皮卡丘</div>
        </li>
      </ul>
    </van-index-bar>
    <van-index-bar>
      <van-index-anchor class="indexBox" index="L" />
      <ul>
        <li>
          <div class="left">
            <img class="hImg" src="../assets/q.jpg" alt />
          </div>
          <div class="right">啦啦啦</div>
        </li>
      </ul>
    </van-index-bar>
    <div class="bottomBox">3位联系人</div>
  </div>
</template>
<script>
export default {
  name: "addresslist",
  data() {
    return {
      msg: ""
    };
  }
};
</script>
<style scoped>
li {
  height: 3.5rem;
  line-height: 3.5rem;
}
ul :active {
  background-color: #d5d5d5;
}
.right {
  height: 3.5rem;
  color: #191919;
  border-bottom: solid 1px #e5e5e5;
  margin-left: 4.5rem;
  /* background-color: red; */
}
.left {
  position: absolute;
}
.hImg {
  height: 2.6rem;
  margin-left: 1rem;
  vertical-align: middle;
  border-radius: 5px;
}
.indexBox {
  background-color: #ededed;
}
.bottomBox{
    margin-top: 1rem;
    text-align: center;
    color: #7f7f7f;
}
</style>