/**
 * 首页
 */

var first = function (fn) {
    this.fn = fn;
};
first.prototype = {
    /**
     * 商城首页
     */
    do: function (data) {
        ajax.get({
            url: base + 'api/home/index',
            data: data,
            success: this.fn
        });

    }
};


