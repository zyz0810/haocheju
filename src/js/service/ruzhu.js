/**
 * 首页
 */

var ruzhu = function (fn) {
    this.fn = fn;
};
ruzhu.prototype = {
    /**
     * 商家入驻（汽贸交易/租车）
     * name 商家名称
     * logo 门店logo（一张）
     * address 地址
     * phone 联系电话
     * opentime 营业时间
     * long 经度
     * lant 维度
     * type	1、汽贸 2 、租车
     */
    add: function (data) {
        ajax.post({
            url: base + 'api/newcar/addcar',
            data: data,
            success: this.fn
        });

    },
    /**
     * 新版汽车贸易/租车列表
     * type 1、汽贸交易 2、租车
     */
    list: function (data) {
        ajax.post({
            url: base + 'Api/newcar/newlist',
            data: data,
            success: this.fn
        });

    },
    /**
     * 新版汽车贸易详情/租车详情
     * id
     */
    view: function (data) {
        ajax.post({
            url: base + 'Api/newcar/details',
            data: data,
            success: this.fn
        });

    }
};


