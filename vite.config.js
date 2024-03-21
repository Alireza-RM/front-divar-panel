import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import paths from "constants/paths.js";

const paths = [
  "src",
  "assets",
  "components",
  "configs",
  "constants",
  "pages",
  "router",
  "services",
  "styles",
  "utils",
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  port: {},
  resolve: {
    alias: {
      // ...paths.reduce((acc, cur) => ({
      //   ...acc,
      //   [cur]: `/${cur === "src" ? cur : "src/" + cur})`,
      // })),

      services:"/src/services",
      assets:"/src/assets",
      components:"/src/components",
      configs:"/src/configs",
      constants:"/src/constants",
      pages:"/src/pages",
      router:"/src/router",
      styles:"/src/styles",
      utils:"/src/utils",

    },
  },
});
