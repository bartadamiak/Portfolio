let portfolioButton = document.querySelector('.header-menu-portfolio');
let contactButton = document.querySelector('.header-menu-contact');
let arrowButton = document.querySelector('.fa-arrow-alt-circle-down');


portfolioButton.addEventListener('click', function(e) {
    e.preventDefault;
    window.location.hash = '#portfolio';
    // if (window.location.hash = '#portfolio' ) {
    //     window.location.hash = '#portfolio'
    // };
   

});

contactButton.addEventListener('click', function(e) {
    e.preventDefault;
    window.location.hash = '#contact';
    // if (window.location.hash = '#contact') {
    //     window.location.hash = '#contact'
    // }
});

arrowButton.addEventListener('click', function(e) {
    e.preventDefault;
    window.location.hash = '#portfolio';
    // if (window.location.hash = '#portfolio' && scrollY) {
    //     window.location.hash = '#portfolio'
    // }
})