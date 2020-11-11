// BURGER 

document.querySelector('.header__burger').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.header__menu').classList.toggle('header__menu-active');
    // this.classList.toggle('header__burger-active');
    if (this.classList.contains('header__burger-active')) {
        this.classList.remove('header__burger-active');
        
    }
    else {
        this.classList.add('header__burger-active');
    }
}) 

