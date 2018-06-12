$(document).ready(function() {
   let idEvent = $('.page_btn__link').click(function () {
        let name = $(this).attr('id');
        $.cookie(name, name, {
            path: '/'
        });
    });

    console.log(idEvent);
    /*let test = $.cookie();
    console.log(test);
    $('div[class=cart_container]').attr("id", test);*/

});