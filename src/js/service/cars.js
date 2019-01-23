/**
 * 广告位
 */

var cars = function (fn) {
    this.fn = fn;
};
cars.prototype = {
    /**
     * 汽贸交易列表
     * @param page 页码
     * @param pageSize 一页几条数据
     */
    newList: function (data) {
        ajax.post({
            url: base + "api/newcar/index",
            data:data,
            success: this.fn
        });
    },
    /**
     * 二手车列表
     * @param page 页码
     * @param pageSize 一页几条数据
     * brandname  传0
     * price 传0
     * type 传0
     */
    usedList: function (data) {
        ajax.post({
            url: base + "api/oldcar/index",
            data:data,
            success: this.fn
        });
    },
    /**
     * 获取车系
     * @param carId 车系Id
     */
    usedCommend: function (data) {
        ajax.post({
            url: base + "api/oldcar/lists",
            data:data,
            success: this.fn
        });
    },
    /**
     * 获取车系
     * @param carId 车系Id
     */
    mode: function (data) {
        ajax.post({
            url: base + "Api/Brandlist/cartype",
            data:data,
            success: this.fn
        });
    },
    /**
     * 获取品牌
     */
    brand: function (data) {
        ajax.post({
            url: base + "api/brandlist/first",
            data:data,
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
            url: base + "api/oldcar/detail",
            data: data,
            success: this.fn
        });
    },
    /**
     * 收藏车辆
     * @param userId 用户Id
     * @param productId  车Id
     * @param type  1、新车 2、二手车
     */
    favorite: function (data) {
        ajax.post({
            url: base + "Api/Collect/pullcollect",
            data: data,
            success: this.fn
        });
    },
    /**
     * 取消收藏车辆
     * @param 	cid 收藏ID
     */
    delFavorite: function (data) {
        ajax.post({
            url: base + "Api/Collect/cancelcollect",
            data: data,
            success: this.fn
        });
    },
    /**
     * 新车预约详情
     * @param 	productId 车Id
     */
    subscribeNew: function (data) {
        ajax.post({
            url: base + "Api/Newcar/newcontent",
            data: data,
            success: this.fn
        });
    },
    /**
     * 二手车预约详情
     * @param 	productId 车Id
     */
    subscribeOld: function (data) {
        ajax.post({
            url: base + "Api/Oldcar/oldcontent",
            data: data,
            success: this.fn
        });
    },
    /**
     * 预约车辆
     * @param 	username 姓名
     * phonenum 手机号
     * type 1、新车 2、二手车
     * productId 车子Id
     */
    subscribe: function (data) {
        ajax.post({
            url: base + "api/subscribe/pull",
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
     * 拼车详情
     * @param id
     */
    carpoolDetail: function (data) {
        ajax.post({
            url: base + "api/carpool/detail",
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
    },
    /**
     * 修改拼车状态
     * @param id  拼车Id
     */
    editCarpool: function (data) {
        ajax.post({
            url: base + "Api/Carpool/modify",
            data: data,
            success: this.fn
        });
    }
};


