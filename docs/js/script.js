const savedTheme = localStorage.getItem('theme');
const body = document.body;
const toggleButton = document.getElementById('toggleMode');


if (savedTheme) {
    body.classList.add(savedTheme); 
    toggleButton.textContent = savedTheme === 'dark-mode' ? 'Switch to Light Mode' : 'Switch to Dark Mode'; 
   
    body.classList.add('light-mode');
    toggleButton.textContent = 'Switch to Dark Mode';
}


toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        toggleButton.textContent = 'Switch to Dark Mode';
        localStorage.setItem('theme', 'light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Switch to Light Mode';
        localStorage.setItem('theme', 'dark-mode');
    }
});
