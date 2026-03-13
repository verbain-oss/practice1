document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const lottoNumbersContainer = document.getElementById('lotto-numbers');

    const generateLottoNumbers = () => {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    };

    const getBallColor = (number) => {
        if (number <= 10) return 'var(--ball-1-10)';
        if (number <= 20) return 'var(--ball-11-20)';
        if (number <= 30) return 'var(--ball-21-30)';
        if (number <= 40) return 'var(--ball-31-40)';
        return 'var(--ball-41-45)';
    };

    const displayNumbers = (numbers) => {
        lottoNumbersContainer.innerHTML = '';
        numbers.forEach((number, index) => {
            const ball = document.createElement('div');
            ball.classList.add('ball');
            ball.textContent = number;
            ball.style.backgroundColor = getBallColor(number);
            ball.style.animationDelay = `${index * 0.1}s`;
            lottoNumbersContainer.appendChild(ball);
        });
    };

    generateBtn.addEventListener('click', () => {
        const numbers = generateLottoNumbers();
        displayNumbers(numbers);
    });
});
