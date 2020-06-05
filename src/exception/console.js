import tracker from "../utils/tracker";

/**
 * 监控统计之 console.error 错误
 */
export function instrumentConsole() {
  const wrapConsoleMethod = (console, level, callback) => {
    console[level] = (...args) => {
      const msg = [...args];
      callback && callback(msg, level);
    };
  };
  const consoleMethodCallBack = function (msg, level) {
    let log = {
      catorage: "exception",
      function: "console",
      type: level,
      message: msg.join(","),
    };
    tracker.send(log);
  };

  ["warn", "error"].forEach((item) => {
    wrapConsoleMethod(console, item, consoleMethodCallBack);
  });
}
