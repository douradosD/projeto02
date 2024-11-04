
// Animate numbers
function animateNumbers() {
    const numbers = document.querySelectorAll('.inf-number');
    numbers.forEach(number => {
        const target = parseInt(number.innerText.replace(/,/g, ''));
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                number.innerText = target.toLocaleString();
            } else {
                number.innerText = Math.floor(current).toLocaleString();
            }
        }, 10);
    });
}

window.addEventListener('load', animateNumbers);