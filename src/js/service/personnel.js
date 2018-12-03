/**
 * 首页
 */

var personnel = function (fn) {
    this.fn = fn;
};
personnel.prototype = {
    /**
     * 汽车人才banner及列表
     * page 页码
     * pageSize 一页几条数据
     */
    list: function (data) {
        ajax.post({
            url: base + "Api/Invite/joblist",
            data: data,
            success: this.fn
        });
    },
    /**
     * 招聘详情
     * id 资讯id
     */
    view: function (data) {
        ajax.post({
            url: base + "Api/Invite/findjob",
            data: data,
            success: this.fn
        });
    }
};


