/**
 * Created by Darya_Sabinina on 11/24/2014.
 */
var h_mrg = 0;     // margin when header hidden
var h_hght = document.getElementsByClassName('logo')[0].offsetHeight;
var elem = $('#main_menu');
window.onresize = function() {
    h_hght = document.getElementsByClassName('logo')[0].offsetHeight; // height of header
    if (elem.offset().top > 10) {
        if (h_hght < 93) {
            elem.addClass('show-logo');
        } else {
            elem.removeClass('show-logo');
        }
    } else {
        elem.css('top', h_hght);
    }
};
$(function() {
    $(window).scroll(function () {
        var top = $(this).scrollTop();
        if (top + h_mrg < h_hght) {
            elem.css('top', (h_hght - top));
            elem.removeClass('show-logo');
        } else {
            elem.css('top', h_mrg);
            if (h_hght < 93) {
                elem.addClass('show-logo');
            } else {
                elem.removeClass('show-logo');
            }
        }
    });
});
    var answer = $('.an').first();
    var question = $('.qu').first();
    var tags = $('.tags').first();
    var nav = $('.nav').first();
    var showMe = function(me) {
        if(me.css('display') == 'none') {
        me.first().css('display', 'block');
        } else {
        me.first().css('display', 'none');
        }
        };

    var active = function(element) {
        if($(element).hasClass('active')) {
        $(element).removeClass('active');
        } else {
        $(element).addClass('active');
        }
        };