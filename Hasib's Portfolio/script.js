function showmenuSection() {
    const menu = document.querySelector('.items');
    if (window.innerWidth < 600) {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';

        }
    }
    else if(window.innerWidth > 600){
        menu.style.display = 'flex';
    }
}

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        const menu = document.querySelector('.items');
        if (window.innerWidth < 600) {
            menu.style.display = 'none';
        }
    });
});
