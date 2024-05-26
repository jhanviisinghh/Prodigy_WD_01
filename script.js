document.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 5) {
        navbar.style.backgroundColor = '#4682B4';
    } else {
        navbar.style.backgroundColor = '#000080';
    }
});
