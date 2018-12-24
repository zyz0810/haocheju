/**
 * Created by Administrator on 2016/11/8 0018.
 */
/**
 * 登录
 */

$(function () {
    // new member(function (data) {
    //     console.log(data);
    // }).checkLogin();
    // cookie.delCookie('userId');
    // alert(cookie.getCookie('userId'));
    if(cookie.getCookie('userId') == ''){
        // var url = encodeURIComponent(location.href.split('#')[0]);
        var url = location.href.split('#')[0];
        cookie.setCookie("url", url, '', '/');
        // new member(function () {
        // window.location.href = 'http://che.0556360.com/api/index/getOauthRedirect';
        // }).wxUrl({url:url});

        window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc317b60f99f1a168&redirect_uri=http://m.0556360.com/weixin/users/login.html&response_type=code&scope=snsapi_userinfo&state='+ url +'#wechat_redirect'
        // window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc317b60f99f1a168&redirect_uri=http://m.0556360.com/weixin/users/login.html&response_type=code&scope=snsapi_userinfo&state= http://www.baidu.com#wechat_redirect'

    }
});

