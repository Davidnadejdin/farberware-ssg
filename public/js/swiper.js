if (document.querySelector('.swiper1')) {
    const swiper = new Swiper('.swiper1', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        navigation: {
            nextEl: '.next1',
            prevEl: '.prev1',
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        }
    });
}
