var idGood ="";

function addCart() {
    idGood = $('.page_btn__link').attr('id');
    localStorage.setItem(idGood, idGood);

 console.log(idGood)
    showCart(idGood);
}
function showCart(idShow){
    var idCart = $('cart');
    var idShow = localStorage.getItem(idShow)
    var div = document.createElement('div');
    div.className = "cart_item";
    div.id = idShow
    idCart.append(div);
    console.log(idShow)
}
showCart();