/**
 * silder gallery begin  [{image:"322332",url:328932382939},{image:"8349",url:"23i32u3i2u"}]
 */
;(function () {
    "use strict";
    var time;
    var type;
    var pImage;

    var SilderGallery = function (el, jsons, atime, atype,apImage) {
        this.data = jsons;
        this.el = el;
        time = atime;
        type = atype;
        pImage = apImage;
    };
    SilderGallery.prototype = {
        show: function () {
            var list = [];
            var str = '';
            if(pImage == 'product'){
                for (var i = 0; i < this.data.length; i++) {
                    str = '<img src="' + this.data[i]  + '"/>';
                    list.push({content:str});
                }
            }else{
                for (var i = 0; i < this.data.return_banner.length; i++) {
                    var _url = "";
                    if(this.data.return_banner[i].linkurl == ''){
                        _url = 'javascript:;';
                    }else {
                        _url = this.data.return_banner[i].linkurl;
                    }

                    if ((i % 1) == 0) {
                        str = '<a href="' + _url + '">';
                    }
                    str += '<img src="' + this.data.return_banner[i].img + '">';


                    if ((i % 1) == 0 && i >= 0) {
                        str += '</a>';
                        list.push({content: str});
                        str = "";
                    }
                    // list.push({content:this.data[i].image});
                }
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

    $.fn.silderDot = function (jsons, time, type,apImage) {
        var sg = new SilderGallery(document.getElementById(this.attr("id")), jsons, time, type,apImage);
        return sg.show();
    }
})();

/**
 * silder gallery end
 */