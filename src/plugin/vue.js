import tracker from "../utils/tracker";

const vuePlugin = function (_Vue) {
  if (!_Vue || !_Vue.config) {
    return;
  }
  let nativeOnError = _Vue.config.errorHandler;
  _Vue.config.errorHandler = function (err, vm, info) {
    console.log(err);
    tracker.send({
      catorage: "exception",
      function: "vue",
      type: "errorHandler",
      message: err,
    });
    if (typeof nativeOnError === "function") {
      nativeOnError.call(this, err, vm, info);
    }
  };
};

export const getVue = () => {
  return {
    install(Vue) {
      vuePlugin(Vue);
    },
  };
};
