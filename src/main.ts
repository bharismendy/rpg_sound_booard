import { createApp } from "vue";
import { createPinia } from "pinia";
import "@fortawesome/fontawesome-free/css/all.css";
import App from "./App.vue";
import router from "./router";
import "@/assets/reset.scss";
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
