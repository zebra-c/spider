import lastEvent from "../utils/lastEvent";
import selector from "../utils/selector";
import stack from "../utils/stack";
import tracker from "../utils/tracker";

/**
 * 监控统计之 js 错误 和 请求资源
 */
export function onerror() {
  window.addEventListener(
    "error",
    function (event) {
      const { target } = event;
      if (target.src || target.href) {
        tracker.send(handlerErrorResource(event));
      } else {
        tracker.send(handlerErrorJS(event));
      }
    },
    true
  );
}

function handlerErrorJS(data) {
  let lastEventValue = lastEvent();
  const { message, colno, lineno, filename, error } = data;
  let log = {
    catorage: "exception",
    function: "onerror",
    type: "js",
    message,
    filename,
    stack: stack((error && error.stack) || ""),
    position: `${lineno}:${colno}`,
    selector: lastEventValue ? selector(lastEventValue.path) : "",
  };
  return log;
}

function handlerErrorResource(data) {
  const { target } = data;
  let log = {
    catorage: "exception",
    function: "onerror",
    type: "resource",
    tagName: target.tagName,
    filename: target.src || target.href,
    selector: selector(target),
  };
  return log;
}
