/**
 * silder gallery begin  [{image:"322332",url:328932382939},{image:"8349",url:"23i32u3i2u"}]
 */
;(function () {
    "use strict";
    var time;
    var type;

    var SilderGallery = function (el, jsons, atime, atype) {
        this.data = jsons;
        this.el = el;
        time = atime;
        type = atype;
    };
    SilderGallery.prototype = {
        show: function () {
            var list = [];
            var str = '';
            for (var i = 0; i < this.data.length; i++) {
                var _url = "";
                // if(this.data[i].linkurl == ''){
                //     _url = 'javascript:;';
                // }else if(this.data[i].linkurl != ''){
                //     _url = this.data[i].linkurl;
                // }else{
                    _url = 'javascript:;';
                // }

                if ((i % 1) == 0) {
                    str = '<a href="' + _url + '">';
                }
                str += '<img src="' + this.data[i] + '">';


                if ((i % 1) == 0 && i >= 0) {
                    str += '</a>';
                    list.push({content: str});
                    str = "";
                }
                // list.push({content:this.data[i].image});
            }


            var S = new iSlider({
                data: list,
                dom: this.el,
                // isOverspread: true,
                //isVertical: true,
                isVertical: false,
                isLooping: true,
                isAutoplay: true,
                fixPage: false,
                animateTime: time,
                duration: 3000,
                plugins: ['dot'],
                animateType: type  //zoomout,fade
            });
        }
    };

    $.fn.silderTenant = function (jsons, time, type) {
        var sg = new SilderGallery(document.getElementById(this.attr("id")), jsons, time, type);
        return sg.show();
    }
})();

/**
 * silder gallery end
 */