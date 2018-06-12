$(document).ready(function() {
    var arr = ['img_01','img_02','img_03'];
    function time(img){
        var a = arr.indexOf(img);
        return (a === arr.length - 1) ?  arr[0] : arr[a + 1];
    };
    var current = arr[0]
    var b = setInterval(function(){
        $('.slider').css({'background-image':`url(http://localhost:3012/slaider/${current}.jpg)`,'background-size':'100%'}).animate({backgroundSize: "110%"},5000);
        current = time(current);
    }, 6000);

});