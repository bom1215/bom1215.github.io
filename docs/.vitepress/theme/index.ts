import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import MyComponent from "../MyComponent.vue";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "home-features-after": () => h(MyComponent),
    });
  },
};
