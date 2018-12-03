/**
 * 广告位
 */

var order = function (fn) {
    this.fn = fn;
};
order.prototype = {
    /**
     * 加入购物车（点击立即购买）
     * @param gid  商品ID
     * @param uid  用户ID
     * @param money 总价
     * @param cost 支付价格
     * @param discount 折扣价
     */
    add: function (data) {
        ajax.post({
            url: base + "api/order/orders",
            data:data,
            success: this.fn
        });
    },
    /**
     * 订单详情
     * trade_no 订单号
     */
    detail: function (data) {
        ajax.post({
            url: base + "api/order/paydetail",
            data:data,
            success: this.fn
        });
    },
    /**
     * 微信支付
     */
    pay: function (data) {
        ajax.post({
            url: base + "api/pay/wxpay",
            data:data,
            success: this.fn
        });
    },
    /**
     * 我的订单列表
     * userId  用户Id
     * type 1、未支付 2、已经付 3、未核销 3、已核销 4、已完成
     */
    list: function (data) {
        ajax.post({
            url: base + "api/order/lists",
            data:data,
            success: this.fn
        });
    }
};


