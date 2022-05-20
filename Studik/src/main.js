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