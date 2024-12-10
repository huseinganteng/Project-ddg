const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;


const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.toggle('light-mode', savedTheme === 'light');
    themeIcon.classList.toggle('fa-sun', savedTheme === 'light');
    themeIcon.classList.toggle('fa-moon', savedTheme !== 'light');
}

themeToggle.addEventListener('click', () => {
    const isLightMode = body.classList.toggle('light-mode');
    themeIcon.classList.toggle('fa-sun', isLightMode);
    themeIcon.classList.toggle('fa-moon', !isLightMode);


    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
});


const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const name = form.querySelector('input[name="pengeirim"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="pesan"]').value.trim();

    if (!name || !email || !message) {
        e.preventDefault();
        alert('MOHON ISI TERLEBIH DAHULU!');
    }
});

form.addEventListener('submit', (e) => {
    setTimeout(() => {
        form.reset(); // Reset form setelah proses pengiriman selesai
    }, 500); // Tambahkan jeda jika pengiriman asinkron
});
