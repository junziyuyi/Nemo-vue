import service from "./request";

var infra = {};

infra.install = Vue => {
  Vue.prototype.$http = {
    Get: (url, params) => {
      return service({
        method: "get",
        url,
        params
      });
    },
    Post: (url, params) => {
      return service({
        method: "post",
        url,
        params
      });
    }
  };
};

export default infra;
