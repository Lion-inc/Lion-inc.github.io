let line = document.getElementsByClassName('line');
line[0].style.top = '50vh'
let top2 = (line[0].style.top).slice(0, (line[0].style.top).length - 2)

window.addEventListener('scroll', function() {
    let scrollTop = this.scrollY;
    $(".line-1").css({
        'top': 50 + (scrollTop / 30) + "vh"
    })
    $(".line-2").css({
        'top': 260 + (scrollTop / 30) + "vh"
    })
    $(".line-3").css({
        'top': 365 + (scrollTop / 30) + "vh"
    })
});



var imgs = [
    "images/screens/phone-1_night.png",
    "images/screens/phone-1_day.png",
    "images/screens/phone-2_night.png",
    "images/screens/phone-2_day.png",
    "images/screens/phone-3_night.png",
    "images/screens/phone-3_day.png",
];
var n = 0;
time = 1000;
play = setInterval("chgImg(0)", 7000);


// while (true) {
//     chgImg(0)
// }

function chgImg(number) {
    // if (number != 0) n = number;
    $('#slide_show').fadeOut(time, function() { //для картинок
        $(this).attr('src', imgs[n]).fadeIn(time);
    });
    // $('#slide_show').attr('src', imgs[n]).fadeIn(time);
    n++;
    // alert(n)
    if (n >= imgs.length) n = 0;
}

new WOW().init();