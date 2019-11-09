import Vue from "vue";
import {
  Dialog,
  Loading,
  MessageBox,
  Message,
  Pagination,
  Collapse,
  CollapseItem
} from "element-ui";
// import "./assets/element-variables.scss";
Vue.use(Dialog);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
Vue.use(Pagination);
Vue.use(Loading.directive);
Vue.use(Collapse);
Vue.use(CollapseItem);
