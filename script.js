document.addEventListener('DOMContentLoaded', (event) => {
    if ((window.matchMedia &&
        window.matchMedia(' (prefers-color-scheme: dark)').matches) ||
        new Date().getHours() >= 19 ||
        new Date().getHours() < 7) { document.body.classList.add('dark-mode'); }
});


// debug
document.body.classList.add('dark-mode');