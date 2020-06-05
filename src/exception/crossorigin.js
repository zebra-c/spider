import lastEvent from "../utils/lastEvent";
import selector from "../utils/selector";
import stack, { getStackInfo } from "../utils/stack";
import tracker from "../utils/tracker";

// 跨域脚本错误 Script error
export function crossorigin() {
  const nativeAddEventListener = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function (type, listener, options) {
    const wrappedListener = (...args) => {
      let lastEventValue = lastEvent();
      try {
        return listener.apply(this, args);
      } catch (e) {
        const { message } = e;
        let log = {
          catorage: "exception",
          function: "crossorigin",
          type: "crossorigin",
          message,
          stack: stack(e.stack || (e.error && e.error.stack) || ""),
          ...getStackInfo(e.stack),
          selector: lastEventValue ? selector(lastEventValue.path) : "",
        };
        tracker.send(log);
      }
    };
    return nativeAddEventListener.call(this, type, wrappedListener, options);
  };
}
