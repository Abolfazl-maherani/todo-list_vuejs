import Vue from "vue";
import App from "./App.vue";
import BaseIcon from "./components/BaseIcon";
import BaseButton from "./components/BaseButton";
import BaseInput from "./components/BaseInput";
import BaseLogo from "./components/BaseLogo";

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];

Vue.component("BaseButton", BaseButton);
Vue.component("BaseIcon", BaseIcon);
Vue.component("BaseInput", BaseInput);
Vue.component("BaseLogo", BaseLogo);

new Vue({
	render: (h) => h(App),
}).$mount("#app");
