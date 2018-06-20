$(document).ready(function () {
    let basket = "basket";
    $('.page_btn__link').click(function () {
        let idElem = $(this).attr('id');
        let nameGood = $(this).parents().find('.page_name').text();
        let priceGood = $(this).parents().find('.page_price').text();
        let imgGood = $(this).parents().find('.page_block__img').attr('src');
        obj = {
            name: nameGood,
            price: priceGood,
            img: imgGood
        };
        let objGoodItem = JSON.stringify(obj);
        createCookie(objGoodItem);
    });

    function createCookie(value) {
        let resultValue = JSON.parse(value);
        let resultGet = JSON.parse(getCookie());
        if (resultGet === null) {
            value = '[' +  value + ']';
            $.cookie(basket, value, {
                path: '/',
            });
        } else if (resultValue.name === resultGet.name) {
            console.log('Такой товар есть');

        } else {
            let currentCookie = JSON.parse($.cookie(basket));
            currentCookie.push(JSON.parse(value));
            $.cookie(basket, currentCookie, {
                path: '/',
            });
        }
    }

    function getCookie() {
        return $.cookie(basket)
    }

    let test = getCookie();
    console.log(test)

    /*for (let item in test) {
        if (test[item].search(/images/i) > 0) {
            $('.cart_container').append('<img src="' + test[item] + '" class="cart_img">');
        } else {
            $('.cart_container').append('<div class="cart_item">' + test[item] + '</div>');
        }
    }*/
});