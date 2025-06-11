const questions = [
    // Easy (40 questions)
    {
        ar: { question: "ما هي أول عملة مشفرة تم إنشاؤها؟", options: ["بيتكوين", "إيثيريوم", "ريبل", "لايتكوين"], answer: "بيتكوين" },
        en: { question: "What is the first cryptocurrency created?", options: ["Bitcoin", "Ethereum", "English", "English"], answer: "English" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هو اسم المؤسس الغامض للبيتكوين؟", options: ["ساتوشي ناكاموتو", "فيتاليك بوتيرين", "إيلون ماسك", "تشارلي لي"], answer: "ساتوشي ناكاموتو" },
        en: { question: "What is the name of Bitcoin's mysterious creator?", options: ["Satoshi Nakamoto", "Vitalik Buterin", "Elon Musk", "Charlie Lee"], answer: "Satoshi Nakamoto" },
        difficulty: "سهلة"
    },
    // Add more easy questions...
    // Medium (40 questions)
    {
        ar: { question: "ما هو البلوكشين؟", options: ["تطبيق لتداول العملات", "سجل رقمي لامركزي", "عملة مشفرة جديدة", "محفظة رقمية"], answer: "سجل رقمي لامركزي" },
        en: { question: "What is a blockchain?", options: ["A trading app", "A decentralized digital ledger", "A new cryptocurrency", "A digital wallet"], answer: "A decentralized digital ledger" },
        difficulty: "متوسطة"
    },
    // Add more medium questions...
    // Hard (20 questions)
    {
        ar: { question: "ما هو بروتوكول الإجماع المستخدم في Ethereum 2.0؟", options: ["Proof of Work", "Proof of Stake", "Proof of Authority", "Proof of Burn"], answer: "Proof of Stake" },
        en: { question: "What is the consensus protocol used in Ethereum 2.0?", options: ["Proof of Work", "Proof of Stake", "Proof of Authority", "Proof of Burn"], answer: "Proof of Stake" },
        difficulty: "صعبة"
    }
    // Total: 100 questions (extend this array with full list)
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let currentLang = 'ar';
let isMuted = false;
const TIME_LIMIT = 10;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score-value');
const timerElement = document.getElementById('time');
const resultElement = document.getElementById('result');
const muteButton = document.getElementById('mute-btn');
const languageSelection = document.getElementById('language-selection');
const gameSection = document.getElementById('game');
const titleElement = document.getElementById('title');
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const backgroundMusic = document.getElementById('background-music');

function startGame(lang) {
    currentLang = lang;
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = score;
    nextButton.disabled = true;
    languageSelection.style.display = 'none';
    gameSection.style.display = 'block';
    titleElement.textContent = lang === 'ar' ? 'لعبة تحزير الكريبتو' : 'Crypto Quiz Game';
    if (!isMuted) backgroundMusic.play();
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex][currentLang];
    questionElement.textContent = currentQuestion.question;

    const shuffledOptions = currentQuestion.options.sort(() => Math.random() - 0.5);
    shuffledOptions.forEach(option => {
        const button = document.createElement('div');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(option));
        optionsElement.appendChild(button);
    });

    startTimer();
}

function resetState() {
    clearInterval(timer);
    timerElement.textContent = TIME_LIMIT;
    nextButton.disabled = true;
    optionsElement.innerHTML = '';
    resultElement.textContent = '';
}

function startTimer() {
    let timeLeft = TIME_LIMIT;
    timerElement.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            selectOption(null);
        }
    }, 1000);
}

function selectOption(selectedOption) {
    clearInterval(timer);
    const currentQuestion = questions[currentQuestionIndex][currentLang];
    const optionButtons = optionsElement.querySelectorAll('.option');

    optionButtons.forEach(button => {
        if (button.textContent === currentQuestion.answer) {
            button.classList.add('correct');
        } else if (button.textContent === selectedOption) {
            button.classList.add('wrong');
        }
        button.style.pointerEvents = 'none';
    });

    if (selectedOption === currentQuestion.answer) {
        score += 10;
        scoreElement.textContent = score;
        resultElement.textContent = currentLang === 'ar' ? 'إجابة صحيحة!' : 'Correct Answer!';
        resultElement.style.color = '#28a745';
        if (!isMuted) correctSound.play();
    } else {
        resultElement.textContent = currentLang === 'ar' 
            ? `إجابة خاطئة! الإجابة الصحيحة هي: ${currentQuestion.answer}`
            : `Wrong Answer! The correct answer is: ${currentQuestion.answer}`;
        resultElement.style.color = '#dc3545';
        if (!isMuted) wrongSound.play();
    }

    nextButton.disabled = false;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionElement.textContent = currentLang === 'ar' ? 'انتهت اللعبة!' : 'Game Over!';
        optionsElement.innerHTML = '';
        resultElement.textContent = currentLang === 'ar' ? `نقاطك النهائية: ${score}` : `Final Score: ${score}`;
        nextButton.style.display = 'none';
        backgroundMusic.pause();
    }
});

muteButton.addEventListener('click', () => {
    isMuted = !isMuted;
    muteButton.textContent = currentLang === 'ar' ? (isMuted ? 'تشغيل الصوت' : 'كتم الصوت') : (isMuted ? 'Unmute Sound' : 'Mute Sound');
    muteButton.classList.toggle('muted', isMuted);
    backgroundMusic.src = isMuted ? '' : backgroundMusic.play();
});
