/**
 * 个人中心
 * Created by WangChao on 11/11.
 */

var member = function (fn) {
    this.fn = fn;
};
member.prototype = {
    // checkLogin: function (async) {
    //     ajax.get({
    //         async: async,
    //         url: base + 'weixin/index/check_login.jhtml',
    //         success: this.fn
    //     });
    // },
    // checkLogin: function (data) {
    //     ajax.post({
    //         url:'http://dev.susonghaoniu.com/Api/User/login',
    //         success: this.fn,
    //         data:data
    //     });
    // },

    checkLogin: function (data) {
        ajax.get({
            url:'http://che.0556360.com/api/index/getOauthRedirect',
            success: this.fn,
            data:data
        });
    },

    /**
     * 绑定手机获取验证码
     * phonenum 手机号
     */
    // sendCode: function (data) {
    //     ajax.post({
    //         url: base + "Api/User/getcode",
    //         data: data,
    //         success: this.fn
    //     });
    // },
    /**
     * 绑定手机
     * phonenum 手机号
     * captcha 验证码
     * userId 用户Id
     */
    bindMobile: function (data) {
        ajax.post({
            url: base + 'api/users/bindPhone',
            data: data,
            success: this.fn
        });
    },
    /**
     * 用户信息
     * userId 用户ID
     */
    view: function (data) {
        ajax.post({
            url: base + 'api/users/center',
            data: data,
            success: this.fn
        });
    },
    /**
     * 修改用户信息
     * userId 用户ID
     * phonenum 手机号
     * nickname 用户名
     * sex 性别  1、男 2、女
     * signature 签名
     */
    edit: function (data) {
        ajax.post({
            url: base + 'api/users/edit',
            data: data,
            success: this.fn
        });
    },
    /**
     * 发短信
     * phonenum 手机号
     */
    getCode: function (data) {
        ajax.post({
            url: base + 'api/code/getcode',
            data: data,
            success: this.fn
        });
    },
    /**
     * 实名认证
     * username 姓名
     * idcard 身份证
     * userId 用户Id
     */
    autonym: function (data) {
        ajax.post({
            url: base + 'api/illegal/autonym',
            data: data,
            success: this.fn
        });
    }

};


