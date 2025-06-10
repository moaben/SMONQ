const questions = {
  beginner: [
    {
      question: "What is Bitcoin?",
      options: ["A stock", "A cryptocurrency", "A bank", "A website"],
      answer: "A cryptocurrency",
    },
    {
      question: "What does blockchain do?",
      options: [
        "Stores files",
        "Processes emails",
        "Keeps a record of transactions",
        "Plays music",
      ],
      answer: "Keeps a record of transactions",
    },
  ],
  intermediate: [
    {
      question: "What is the purpose of a smart contract?",
      options: [
        "To print money",
        "To automate transactions",
        "To play videos",
        "To manage your wallet",
      ],
      answer: "To automate transactions",
    },
    {
      question: "Which network introduced smart contracts?",
      options: ["Bitcoin", "Ethereum", "Solana", "Litecoin"],
      answer: "Ethereum",
    },
  ],
  expert: [
    {
      question: "What is the main consensus mechanism of Solana?",
      options: ["Proof of Work", "Proof of Stake", "Proof of History", "PoA"],
      answer: "Proof of History",
    },
    {
      question: "What is the function of a liquidity pool?",
      options: [
        "To provide internet",
        "To increase token price",
        "To enable swapping between tokens",
        "To reduce gas fees",
      ],
      answer: "To enable swapping between tokens",
    },
  ],
};

let currentLevel = "";
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;

function startGame(level) {
  currentLevel = level;
  currentQuestion = 0;
  score = 0;
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("question-screen").classList.remove("hidden");
  nextQuestion();
  startTimer();
}

function startTimer() {
  timeLeft = 30;
  document.getElementById("time").textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      showResult();
    }
  }, 1000);
}

function nextQuestion() {
  const q = questions[currentLevel][currentQuestion];
  document.getElementById("question-text").textContent = q.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const q = questions[currentLevel][currentQuestion];
  if (selected === q.answer) score++;
  currentQuestion++;
  if (currentQuestion >= questions[currentLevel].length) {
    clearInterval(timer);
    showResult();
  } else {
    nextQuestion();
  }
}

function showResult() {
  document.getElementById("question-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");
  document.getElementById("score").textContent = score;
  const best = localStorage.getItem("bestScore_" + currentLevel) || 0;
  if (score > best) {
    localStorage.setItem("bestScore_" + currentLevel, score);
  }
  document.getElementById("best-score").textContent = Math.max(score, best);
}

function restart() {
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("start-screen").classList.remove("hidden");
}
