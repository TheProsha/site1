$(".main").onepage_scroll({
    sectionContainer: "section", // контейнер, к которому будет применяться скролл
    easing: "cubic-bezier(.6,0,.4,1)", // Тип анимации "ease", "linear", "ease-in", "ease-out", "ease-in-out"
    animationTime: 1000, // время анимации
    pagination: false, // скрыть или отобразить пагинатор
    updateURL: false // обновлять URL или нет
});

window.onload = function logoSload() {

    setTimeout(function(){
        document.querySelectorAll('.logo_preload').forEach(function(a) {
            a.remove() });
    },3800);

    setInterval(function start_anim() {
        var screen1 = document.querySelector('#screen_1');
        var screen1__on_top = screen1.getBoundingClientRect().top;
        if (screen1__on_top<200) {
            remove_active();
            add_active1(); }
        var screen2 = document.querySelector('#screen_2');
        var screen2__on_top = screen2.getBoundingClientRect().top;
        if (screen2__on_top<200) {
            remove_active();
            add_active2();
            anim_2_screen(); }
        var screen3 = document.querySelector('#screen_3');
        var screen3__on_top = screen3.getBoundingClientRect().top;
        if (screen3__on_top<200) {
            remove_active();
            add_active3();
            anim_3_screen(); }
    },1000)

}

function add_active1() {
    var h_1 = document.querySelector('.header_sasha');
    h_1.classList.add('active');
}
function add_active2() {
    var h_2 = document.querySelector('.header_credo');
    h_2.classList.add('active');
}
function add_active3() {
    var h_3 = document.querySelector('.header_brand');
    h_3.classList.add('active');
}

function remove_active() {
    var h_1 = document.querySelector('.header_sasha');
    var h_2 = document.querySelector('.header_credo');
    var h_3 = document.querySelector('.header_brand');
    h_1.classList.remove('active');
    h_2.classList.remove('active');
    h_3.classList.remove('active');
}


function anim_2_screen(){
    var a = document.querySelector('.before_anim_1');
    var b = document.querySelector('.before_anim_2');
    var c = document.querySelector('.before_anim_3');
    var d = document.querySelector('.screen_2_text');
    var e = document.querySelector('.polosa1');
    var e1 = document.querySelector('.polosa2');
    var e2 = document.querySelector('.polosa3');
    var avt = document.querySelector('.avtograff');
    var letter1 = document.querySelector('.letter1');
    var letter2 = document.querySelector('.letter2');
    var letter3 = document.querySelector('.letter3');
    var letter4 = document.querySelector('.letter4');
    var letter5 = document.querySelector('.letter5');
    var visitka_shape = document.querySelector('.visitka_shape');
    var visitka = document.querySelector('.visitka_2_screen');
    a.classList.add('papka_text_anim');
    b.classList.add('papka_text_anim');
    c.classList.add('papka_text_anim');
    d.classList.add('screen_2_text_anim');
    e.classList.add('polosa_anim');
    e1.classList.add('polosa_anim');
    e2.classList.add('polosa_anim');
    avt.classList.add('avtograff_anim');
    letter1.classList.add('letter_anim');
    letter2.classList.add('letter_anim');
    letter3.classList.add('letter_anim');
    letter4.classList.add('letter_anim');
    letter5.classList.add('letter_anim');
    visitka_shape.classList.add('visitka_shape_anim');
    visitka.classList.add('visitka_2_screen_anim');
}

function anim_3_screen(){
    var top_text_1 = document.querySelector('.text_middle_top1');
    top_text_1.classList.add('text_middle_top_anim1');
    var top_text_2 = document.querySelector('.text_middle_top2');
    top_text_2.classList.add('text_middle_top_anim2');
    var shape_3_screen = document.querySelector('.shape_3_screen');
    shape_3_screen.classList.add('shape_3_screen_anim');
    var brand_anim = document.querySelector('#screen_3__middle_center');
    brand_anim.classList.add('screen_3__middle_center_anim');
    var middle_right = document.querySelector('#screen_3__middle_right');
    middle_right.classList.add('screen_3__middle_right_anim');
    var top_left = document.querySelector('#screen_3__top_left');
    top_left.classList.add('screen_3__top_left_anim');
    var middle_left = document.querySelector('#screen_3__middle_left');
    middle_left.classList.add('screen_3__middle_left_anim');
    var bottom = document.querySelector('#screen_3__bottom');
    bottom.classList.add('screen_3__bottom_anim');
}