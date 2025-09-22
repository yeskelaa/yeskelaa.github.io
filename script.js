// Мобильное меню
const mobileMenu = document.getElementById('mobile-menu');
const menu = document.querySelector('.menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menu.classList.toggle('active');
});

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Закрываем мобильное меню при клике на ссылку
        if (menu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            menu.classList.remove('active');
        }
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Изменение навигации при прокрутке
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Анимация элементов при прокрутке
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.card, .research-item, .news-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
};

// Инициализация анимации
window.addEventListener('scroll', animateOnScroll);

// Предзагрузка анимации для карточек
document.querySelectorAll('.card, .research-item, .news-card').forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Запуск анимации при загрузке страницы
window.addEventListener('load', () => {
    animateOnScroll();
});

// Простая валидация формы
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        contactForm.reset();
    });
}
