/**
 * 首页
 */

var product = function (fn) {
    this.fn = fn;
};
product.prototype = {
    /**
     * 商品页banner及列表
     * page 页码
     * 1、维修保养 2、用品配车 3、汽保设备 4、美容装饰
     */
    list: function (data) {
        ajax.post({
            url: base + "api/shop/index",
            data: data,
            success: this.fn
        });
    },
    /**
     * 商品页详情
     * id 商品id
     */
    view: function (data) {
        ajax.post({
            url: base + "api/shop/detail",
            data: data,
            success: this.fn
        });
    }
};


