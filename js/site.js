$(document).ready(function () {
    SITE.navigationIcon();
    SITE.menuList();
    SITE.a();
    SITE.slide();
})

SITE = {
    navigationIcon:function () {
        $('.navigationIcon').click(function () {
            $('.navigationIcon').toggleClass('open');
            $('.menu-parent').toggleClass('nav-open');
        })
    },

    menuList:function () {
        $('#menuList li').on( 'click',function () {
            $('#menuList li.act').removeClass('act');
            $(this).addClass('act');
            $('.active').removeClass();
        })
    },

    a:function () {
      $('.b').siblings().css('background', 'red');
    },

    slide:function () {
        $('.carousel').carousel({
            interval : 2000
        })
    }
}