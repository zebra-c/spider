const userAgent = require("user-agent");

const host = "cn-beijing.log.aliyuncs.com";
const project = "zebra-monitor";
const logStore = "zebra-monitor-store";

function getExtraData() {
  const { name, version } = userAgent.parse(navigator.userAgent);
  return {
    title: document.title,
    url: location.href,
    timestamp: Date.now(),
    userAgentName: name,
    userAgentVersion: version,
  };
}

var report = (function () {
  var imgs = [];
  return function (src) {
    var img = new Image();
    imgs.push(img);
    img.src = src;
  };
})();

class SendTracker {
  constructor() {
    this.url = `http://${project}.${host}/logstores/${logStore}/track`; //上报的路径
    this.xhr = new XMLHttpRequest();
  }
  formatData(data) {
    let extraData = getExtraData();
    let log = { ...extraData, ...data };
    for (let key in log) {
      if (typeof log[key] === "number") {
        log[key] = `${log[key]}`;
      }
    }
    return JSON.stringify({
      __logs__: [log],
    });
  }
  send(data) {
    let params = this.formatData(data);
    // const url = this.url + "?" + params;
    // report(url);
    this._send(params);
  }
  _send(params) {
    let body = params;
    this.xhr.open("POST", this.url, true);
    this.xhr.setRequestHeader("Content-Type", "application/json"); //请求体类型
    this.xhr.setRequestHeader("x-log-apiversion", "0.6.0"); //版本号
    this.xhr.setRequestHeader("x-log-bodyrawsize", body.length); //请求体的大小
    this.xhr.onload = function () {};
    this.xhr.onerror = function (error) {};
    this.xhr.send(body);
  }
}
export default new SendTracker();
