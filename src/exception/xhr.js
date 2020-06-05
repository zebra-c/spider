import tracker from "../utils/tracker";

/**
 * 监控统计之 xhr 错误
 */
export function xhr() {
  let XMLHttpRequest = window.XMLHttpRequest;
  let nativeOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url, async) {
    if (!url.match(/logstores/) && !url.match(/sockjs/)) {
      this.log = { method, url, async };
    }
    return nativeOpen.apply(this, arguments);
  };
  let nativeSend = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.send = function (body) {
    if (this.log) {
      let startTime = Date.now();
      let handler = (type) => () => {
        let duration = Date.now() - startTime;
        let status = this.status;
        let statusText = this.statusText;
        tracker.send({
          catorage: "exception",
          function: "xhr",
          type,
          pathname: this.log.url,
          status: status + "-" + statusText,
          duration,
          response: this.response ? JSON.stringify(this.response) : "",
          params: body || "",
        });
      };
      this.addEventListener("load", handler("load"), false);
      this.addEventListener("error", handler("error"), false);
      this.addEventListener("abort", handler("abort"), false);
    }
    return nativeSend.apply(this, arguments);
  };
}
