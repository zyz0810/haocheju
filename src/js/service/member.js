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
    checkLogin: function (data) {
        ajax.post({
            url: base + 'api/share/wxlogin',
            success: this.fn,
            data: data
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
    },
    /**
     * 实名认证
     * type 1、新车 2、二手车
     */
    collection: function (data) {
        ajax.post({
            url: base + 'api/collect/user',
            data: data,
            success: this.fn
        });
    },
    /**
     * 添加车商
     *    userId 用户Id
     *    providername 车商名字
     *    prividerperson 联系人
     *    address 公司地址
     *    position 职位
     *    phone 手机号
     *    logo logo
     *    images 门面图
     *    license 营业执照
     *    name 账号（只能是英文或数字）
     */
    dealer: function (data) {
        ajax.post({
            url: base + 'api/provider/add',
            data: data,
            success: this.fn
        });
    },
    /**
     * 上传图片
     *    file 文件名
     */
    uploads: function (data) {
        ajax.post({
            url: base + 'api/users/uploads',
            data: data,
            contentType: false,
            processData: false,
            success: this.fn
        });
    },
    /**
     * 分享
     *    url 当前页面路径
     */
    shareApi: function (data) {
        ajax.post({
            url: base + 'api/share/index',
            data: data,
            success: this.fn
        });
    },
    /**
     * 保险
     *    carno 车牌号
     *    mobile 手机号
     */
    insuranceAdd: function (data) {
        ajax.post({
            url: base + 'api/insurance/add',
            data: data,
            success: this.fn
        });
    },
    /**
     * 检验验证码
     *    phonenum
     *    code
     */
    getcodeCheck: function (data) {
        ajax.post({
            url: base + 'api/code/ckeckCode',
            data: data,
            success: this.fn
        });
    },
    /**http://che.0556360.com/api/index/wxusers?code=0114lvtS1LYku41qlbuS1Q2ctS14lvt6&from=844b&vit=fps
     * 微信获取用户信息
     *    code 微信code
     */
    wxLogin: function (data) {
        ajax.get({
            // async: async,
            url: base + 'api/index/wxusers',
            data: data,
            success: this.fn
        });
    },
    /**
     * 获取当前页面url
     *    url 当前页面url
     */
    wxUrl: function (data) {
        ajax.get({
            // async: async,
            url: base + 'api/share/wxurl',
            data: data,
            success: this.fn
        });
    }
};


