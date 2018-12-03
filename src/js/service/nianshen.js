/**
 * 违章年审
 */

var nianshen = function (fn) {
    this.fn = fn;
};
nianshen.prototype = {
    /**
     * 违章查询
     * carno 车牌号
     * engineno 发动机号
     * vin 车架号
     */
    illegal: function (data) {
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


