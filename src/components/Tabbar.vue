<template>
  <div>
    <van-tabbar
      class="ta"
      style="background-color: #f7f7f7;border-top: solid #d2d2d2 0.3px ;height:3.5rem;"
      active-color="#1ec66f"
      v-model="active"
    >
      <van-tabbar-item v-for="(n,i) in tabbars" :to="n.name" :key="i" icon="home-o">
        <span>{{n.title}}</span>
        <img
          slot="icon"
          slot-scope="props"
          style="height:1.6rem;"
          :src="props.active ? n.icon.active : n.icon.inactive"
        />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  data() {
    return {
      active: 0,
      tabbars: [
        {
          name: "/",
          title: "微信",
          icon: {
            active: require("../assets/msg1.png"),
            inactive: require("../assets/msg.png")
          }
        },
        {
          name: "/addresslist",
          title: "通讯录",
          icon: {
            active: require("../assets/t1.png"),
            inactive: require("../assets/t.png")
          }
        },
        {
          name: "/find",
          title: "发现",
          icon: {
            active: require("../assets/find1.png"),
            inactive: require("../assets/find.png")
          }
        },
        {
          name: "/my",
          title: "我",
          icon: {
            active: require("../assets/my1.png"),
            inactive: require("../assets/my.png")
          }
        }
      ]
    };
  }
};
</script>

<style scoped>
/* div{
border-top: red solid;
} */
</style>