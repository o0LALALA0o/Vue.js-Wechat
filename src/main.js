// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Tabbar, TabbarItem } from 'vant';
import { Icon } from 'vant';
import { NavBar } from 'vant';
import { List } from 'vant';
import { Cell, CellGroup } from 'vant';
import { IndexBar, IndexAnchor } from 'vant';
import { Sticky } from 'vant';
import { ImagePreview } from 'vant';
import { Field } from 'vant';
import { Col, Row } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(List);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Sticky);
Vue.use(ImagePreview);
Vue.use(Field);
Vue.use(Col);
Vue.use(Row);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
