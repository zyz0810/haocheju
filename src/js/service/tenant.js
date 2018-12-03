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
     * pageSize  一页几条数据
     */
    list: function (data) {
        ajax.post({
            url: base + "api/newcar/index",
            data:data,
            success: this.fn
        });
    },
    /**
     * 商家首页二手车列表
     * page 页码
     */
    usedCar: function (data) {
        ajax.post({
            url: base + "Api/Provider/oldindex",
            data: data,
            success: this.fn
        });
    },
    /**
     * 商家首页新车列表
     * providerid 商家Id
     * page 页码
     */
    newCar: function (data) {
        ajax.post({
            url: base + "Api/Provider/newindex",
            data: data,
            success: this.fn
        });
    },
    /**
     * 二手车区列表
     * providerid 商家Id
     * page 页码
     */
    usedList: function (data) {
        ajax.post({
            url: base + "Api/Oldcar/index",
            data:data,
            success: this.fn
        });
    }
};


