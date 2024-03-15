const toggleDarkModeButton = document.getElementById('toggle-dark-mode');

toggleDarkModeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});