// 底部导航选中变色
;(function(){
    "use strict";
    setTimeout(function () {
        var userId = cookie.getCookie('userId');
        new member(function (data) {
            if(data.type == '1'){
                $('.foot_menu #nav5').removeClass('none');
                $('.foot_menu #nav6').addClass('none');
            }else{
                $('.foot_menu #nav6').removeClass('none');
                $('.foot_menu #nav5').addClass('none');
            }
        }).view({userId:userId});

        var str = window.location.href;
        var index = str .lastIndexOf("\/");
        str  = str .substring(index + 1, str .length);
        var aa = window.location.pathname;
        if(aa.indexOf("home/index.html")>-1){
            $(".foot_menu #nav1").addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
        }
        else if(aa.indexOf("circle/index.html")>-1){
            $(".foot_menu #nav2").addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
        }
        else if(aa.indexOf("carpool/index.html")>-1){
            $(".foot_menu #nav3").addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
        }
        else if(aa.indexOf("discount/index.html")>-1){
            $(".foot_menu #nav4").addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
        }
        else if(aa.indexOf("member/index.html")>-1){
            $(".foot_menu #nav5").addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
        }
        else if(aa.indexOf("memberTenant/index.html")>-1){
            $(".foot_menu #nav6").addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
        }
    },100)
})(window||this);