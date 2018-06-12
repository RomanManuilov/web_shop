$(document).ready(function() {
    $('.page_btn__link').click(function () {
        let name = $(this).attr('id');
        /*$.cookie(name, name, {
            path: '/'
        });*/
        $.cookie('5b1f780baa176618e4b175d1', null);
       /* let test = $.cookie(name);
        console.log(test);
        $('.cart_container').attr("id", '1');*/
    });

});