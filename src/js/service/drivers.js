/**
 * 首页
 */

var drivers  = function (fn) {
    this.fn = fn;
};
drivers.prototype = {
    /**
     * 驾校banner及列表
     * page 页码
     * pageSize 一页几条数据
     */
    list: function (data) {
        ajax.post({
            url: base + "api/drive/drivelist",
            data: data,
            success: this.fn
        });
    },
    /**
     * 资讯页banner及列表
     * id 驾校id
     */
    view: function (data) {
        ajax.post({
            url: base + "api/drive/detail",
            data: data,
            success: this.fn
        });
    }
};


