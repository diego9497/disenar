let acordeones = document.querySelectorAll('.accordions__button');

acordeones.forEach((acordeon) => {
    acordeon.addEventListener('click', () => {
        acordeon.classList.toggle("accordions__button--active");
        document.getElementById(acordeon.getAttribute("data-content")).classList.toggle("accordions__content--expanded");
    })
})

