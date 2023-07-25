const toggleBtn = document.querySelector('.toggle-btn');
const toggle = document.querySelector('.hidden-row');

toggleBtn.addEventListener('click', () => {
    if (toggle.style.display === 'none') {
        toggle.style.display = 'block';
    }
    else {
        toggle.style.display = 'none';
    }
})