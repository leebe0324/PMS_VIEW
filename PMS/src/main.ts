import { createApp } from "vue";
import App from "./App.vue";
import { initRouter } from "./router";
import { initStore } from "./store";

const app = createApp(App);
// app.use(router);
initRouter(app);
//初始化vuex
initStore(app);
app.mount("#app");
