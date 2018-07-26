/**
 * 广告位
 */

var tenant = function (fn) {
    this.fn = fn;
};
tenant.prototype = {
    /**
     * 汽贸交易列表
     * page 页码
     */
    list: function () {
        ajax.post({
            url: base + "Api/Newcar/index",
            success: this.fn
        });
    },
    /**
     * 商家首页二手车列表
     * page 页码
     */
    usedCar: function () {
        ajax.post({
            url: base + "Api/Provider/oldindex",
            success: this.fn
        });
    },
    /**
     * 商家首页新车列表
     * page 页码
     */
    newCar: function () {
        ajax.post({
            url: base + "Api/Provider/newindex",
            success: this.fn
        });
    },
    /**
     * 二手车区列表
     * page 页码
     */
    usedCar: function () {
        ajax.post({
            url: base + "Api/Oldcar/index",
            success: this.fn
        });
    }
};


