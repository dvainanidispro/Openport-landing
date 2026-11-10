const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('site-navigation');
const mobileLayout = window.matchMedia('(max-width: 991px)');

// Χωρίς JavaScript οι σύνδεσμοι παραμένουν ορατοί και λειτουργικοί.
document.documentElement.classList.add('js');
menuButton.hidden = false;

function closeMenu() {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
}

menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
});

navigation.addEventListener('click', (event) => {
    if (event.target.closest('a') && mobileLayout.matches) {
        closeMenu();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menuButton.focus();
    }
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header')) {
        closeMenu();
    }
});

mobileLayout.addEventListener('change', () => {
    closeMenu();
});

document.getElementById('copyright-year').textContent = new Date().getFullYear();
