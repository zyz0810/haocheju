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
    },
    /**
     * 违章查询
     * carno 车牌号
     * engineno 发动机号
     * vin 车架号
     */
    violation: function (data) {
        ajax.post({
            url: base + "Api/Illegal/index",
            data: data,
            success: this.fn
        });
    },
    /**
     * 提交年审
     * name 名字
     * mobile 手机号
     * carno 车牌号
     * caraddress 地址
     * caryear 年限
     */
    examination: function (data) {
        ajax.post({
            url: base + "api/careful/caryear",
            data: data,
            success: this.fn
        });
    }
};


