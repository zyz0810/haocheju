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
     * 获取同城广告
     * @param carId 车系Id
     */
    brand: function () {
        ajax.post({
            url: base + "Api/Brandlist/first",
            success: this.fn
        });

    }
};


