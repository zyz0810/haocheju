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
    }
};


