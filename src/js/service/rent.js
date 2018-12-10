/**
 * 租车
 */

var rent = function (fn) {
    this.fn = fn;
};
rent.prototype = {
    /**
     * 租车门店列表
     * @param page 页码
     * @param pageSize  一页几条数据
     */
    tenant: function (data) {
        ajax.post({
            url: base + "api/provider/lists",
            data:data,
            success: this.fn
        });
    },
    /**
     * 租车列表
     * @param providerid  门店ID
     */
    car: function (data) {
        ajax.post({
            url: base + "api/provider/rent",
            data:data,
            success: this.fn
        });
    },
    /**
     * 预约租车
     * @param name  名字
     * @param mobile  手机号
     * @param ordercar  格式 服务商---车品牌--车系
     * @param day  天数
     * @param price  价格
     * @param start  借车日期
     * @param end  还车日期
     * @param carid 车子Id
     */
    orderrent: function (data) {
        ajax.post({
            url: base + "api/provider/orderrent",
            data:data,
            success: this.fn
        });
    }


};


