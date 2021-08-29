import Vue from "vue";
import SnackbarQueue from "vuejs-snackbar-queue";
import App from "./App.vue";

Vue.use(SnackbarQueue, { maxSnacks: 5, mobileBreakpoint: 600 });
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
