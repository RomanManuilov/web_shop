$(document).ready(function () {
    let basket = "basket";
    $('.page_btn__link').click(function () {
        let idElem = $(this).attr('id');
        let nameGood = $(this).parents().find('.page_name').text();
        let priceGood = $(this).parents().find('.page_price').text();
        let imgGood = $(this).parents().find('.page_block__img').attr('src');
        let obj = {
            name: nameGood,
            price: priceGood,
            img: imgGood
        };
        let objGoodItem = JSON.stringify(obj);
        console.log("before cookie" + objGoodItem)
        createCookie(objGoodItem);
    });

    function createCookie(value) {
        let resultValue = JSON.parse(value);
        let x = getCookie();
        console.log('cookie' + x);

        if (x == null) {
            value = '[' +  value + ']';
            $.cookie(basket, value, {
                path: '/',
            });
        } else {
            let resultGet = JSON.parse(x);
            if (resultValue.name === resultGet.name) {
                console.log('Такой товар есть');

            } else {
                let currentCookie = JSON.parse($.cookie(basket));
                currentCookie.push(JSON.parse(value));
                currentCookie = JSON.stringify(currentCookie);
                $.cookie(basket, currentCookie, {
                    path: '/',
                });
            }
        }

    }

    function getCookie() {
        return $.cookie(basket)
    }

    let test = JSON.parse(getCookie());
    console.log(test)

    for (let item of test) {
        console.log(item);
        $('.cart_container').append('<div class="cart_item">' + item.name + '</div>');
        $('.cart_container').append('<div class="cart_item">' + item.price + '</div>');
        $('.cart_container').append('<img src="' + item.img + '" class="cart_img"><br>');
    }
});