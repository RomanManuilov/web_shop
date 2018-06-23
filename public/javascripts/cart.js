$(document).ready(function () {
    let basket = "basket";
    // создаем объект по клиек, достем "название","цена","путь картики"
    $('.page_btn__link').click(function () {
        //let idElem = $(this).attr('id');
        let nameGood = $(this).parents().find('.page_name').text();
        let priceGood = $(this).parents().find('.page_price').text();
        let imgGood = $(this).parents().find('.page_block__img').attr('src');
        let obj = {
            id: idElem = {
                name: nameGood,
                price: priceGood,
                img: imgGood
            }
        };
        createCookie(obj);
        console.log(obj);
    });

    //Функция создания cookie и проверки на существующие значения в cookie
    function createCookie(value) {
        let objGetCookie = getCookie();
        // Проверяем есть ли в целом cookie, если нет и значение null, то мы создаем $.cookie()
        if (objGetCookie == null) {
            value = JSON.stringify(value);// Приводим наш объект value в строку
            value = '[' + value + ']';// Делаем массив.
            //Функция создяния cookie в качестве параметров фунции задается ключь, значение - value - объект который создали ранее.
            $.cookie(basket, value, {
                path: '/',
            });
        } else {
            let cookieForTest = JSON.parse(objGetCookie);// приводим значение текущего cookie в массив объектов.
            let testName = cookieForTest.find(function (obj) { //метсодом find проходим по нашему массиву объектов
                return obj.name === value.name; // Сравниваем значание по ключу .name объектов в нашем массиве с новым объектом который попал на вход нашей функции.
            });
            if (testName !== undefined) { // Если с метода find приходит то такого совподения нет, и в else добовляем новый объект в наш массив,
                // если есть выводим сообщение "Такой товар есть"
                mess('Такой товар уже есть в корзине!');
                console.log('Такой товар есть');
            } else {
                let currentCookie = JSON.parse($.cookie(basket));
                currentCookie.push(value);
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

    let showElemPageCart = JSON.parse(getCookie());
    //console.log(test);
    for (let item of showElemPageCart) {
        $('.cart_container').append('<div class="cart"><div class="cart_item"><div class="cart_item__name">' + item.name + '</div></div>'
            + '<div class="cart_item"><div class="cart_item__price">' + item.price + '</div></div>' + '<div class="cart_item"><img src="' + item.img +
            '" class="cart_img"></div><div class="cart_item"><div class="cart_item__del">&#10006;</div></div></div>');
    }
    $('.cart_item__del').click(function () {
        let nameElem = $(this).parents('.cart').children('div:first-child').text();
        console.log(nameElem);

    });

    function mess(str) {
        let message = '<div class="message_nav"><div class="message_nav__close">&#10006;</div><div class="message"><div class="message_name">' + str + '</div></div></div>'
        $('.message_container').css({
            'position': 'fixed',
            'top': '0',
            'min-width': '100%',
            'min-height': '100%',
            'align-items': 'center',
            'display': 'flex'
        })
            .animate({opacity: 1}, 400)
            .append(message);
    }

    $('.message_container').click(function () {
        $('.message_container').css({'display': 'none'}).remove('.message_nav');
        $('.message_nav').remove();
    });
});