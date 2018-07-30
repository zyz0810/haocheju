/**
 * 广告位
 */

var cars = function (fn) {
    this.fn = fn;
};
cars.prototype = {
    /**
     * 获取车系
     */
    mode: function () {
        ajax.post({
            url: base + "Api/Brandlist/cartype",
            success: this.fn
        });
    },
    /**
     * 获取品牌
     * @param carId 车系Id
     */
    brand: function () {
        ajax.post({
            url: base + "Api/Brandlist/first",
            success: this.fn
        });

    },
    /**
     * 新车详情
     * @param id 新车Id
     */
    newView: function (data) {
        ajax.post({
            url: base + "Api/Newcar/detail",
            data: data,
            success: this.fn
        });
    },
    /**
     * 二手车详情
     * @param id 二手车Id
     * @param userId  用户Id
     */
    usedView: function (data) {
        ajax.post({
            url: base + "Api/Oldcar/detail",
            data: data,
            success: this.fn
        });
    },
    /**
     * 拼车列表
     * @param page  页码
     * @param type  1、车找人 2人找车
     */
    carPool: function (data) {
        ajax.post({
            url: base + "Api/Carpool/poollist",
            data: data,
            success: this.fn
        });
    },
    /**
     * 拼车表单
     * @param type  、车找人 2 人找车
     */
    pullpool: function (data) {
        ajax.post({
            url: base + "Api/Carpool/pullpool",
            data: data,
            success: this.fn
        });
    }
};


