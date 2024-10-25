// Dark mode toggle script
const toggleDarkMode = document.getElementById('toggle-darkmode');
const modeText = document.getElementById('mode-text');

toggleDarkMode.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        modeText.textContent = 'Dark Mode';
    } else {
        modeText.textContent = 'Light Mode';
    }
});
