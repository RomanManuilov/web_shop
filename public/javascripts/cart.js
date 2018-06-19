$(document).ready(function() {
    let basket = "basket"
   $('.page_btn__link').click(function () {
          let idElem = $(this).attr('id');
          let nameGood = $(this).parents().find('.page_name').text();
          let priceGood = $(this).parents().find('.page_price').text();
          let imgGood = $(this).parents().find('.page_block__img').attr('src');
          console.log("Путь картнки " + imgGood);
          obj = {
              name : nameGood,
              price : priceGood,
              img : imgGood
          }
          let objGoodItem = JSON.stringify(obj);

            $.cookie(basket, objGoodItem, {
                path: '/'
            });
    });
    let test = JSON.parse($.cookie(basket));

    for(let item in test){
;        console.log(test[item].search(/images/g));
        if(test[item].search(/images/i) > 0){
                $('.cart_container').append('<img src="' + test[item] + '" class="cart_img">');
            } else {
        $('.cart_container').append('<div class="cart_item">' + test[item] + '</div>');
        console.log(test[item]);
        }
    }
    console.log(test)
});