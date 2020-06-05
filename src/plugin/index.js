import "../exception/index";
import tracker from "../utils/tracker";
import { getReact } from "./react";
import { getVue } from "./vue";

let _GLobal_Module;

export const getPlugin = (plugin) => {
  if (plugin === "react") {
    return getReact(_GLobal_Module);
  } else if (plugin === "vue") {
    return getVue();
  }
};

export const use = (mode) => {
  _GLobal_Module = mode;
};

export default tracker;
