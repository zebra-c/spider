import lastEvent from "../utils/lastEvent";
import selector from "../utils/selector";
import tracker from "../utils/tracker";
import stack, { getStackInfo } from "../utils/stack";

/**
 * 监控统计之 promise 错误
 */
export function unhandledrejection() {
  window.addEventListener("unhandledrejection", function (event) {
    tracker.send(handlerUnhandledrejection(event));
  });
}

function handlerUnhandledrejection(event) {
  let lastEventValue = lastEvent();
  const { reason } = event;
  let log = {
    catorage: "exception",
    function: "unhandledrejection",
    type: "promise",
    selector: lastEventValue ? selector(lastEventValue.path) : "",
    ...getReason(reason),
  };
  return log;
}

function getReason(reason) {
  let message = "";
  if (typeof reason === "string") {
    message = reason;
    return {
      message,
      stack: "",
      position: "0:0",
    };
  } else if (typeof reason === "object") {
    message = reason.message || reason;
    return {
      ...getStackInfo(reason.stack),
      message,
      stack: stack(reason.stack),
    };
  }
}
