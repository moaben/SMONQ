// script.js

const questions = [
  {
    en: "What is Bitcoin?",
    ar: "ما هو البيتكوين؟",
    options: {
      en: ["A cryptocurrency", "A social media platform", "A programming language", "A video game"],
      ar: ["عملة مشفرة", "منصة تواصل اجتماعي", "لغة برمجة", "لعبة فيديو"]
    },
    correct: 0
  },
  {
    en: "What does 'ICO' stand for?",
    ar: "ماذا تعني 'ICO'؟",
    options: {
      en: ["Initial Coin Offering", "Initial Company Offering", "Internal Coin Operation", "International Coin Offering"],
      ar: ["العرض الأولي للعملة", "العرض الأولي للشركة", "تشغيل العملة الداخلي", "العرض الدولي للعملة"]
    },
    correct: 0
  },
  {
    en: "What is 'gas' in Ethereum?",
    ar: "ما هو 'الغاز' في إيثيريوم؟",
    options: {
      en: ["Fee to run transactions", "Energy", "Token", "Coin"],
      ar: ["رسوم تشغيل المعاملات", "طاقة", "رمز", "عملة"]
    },
    correct: 0
  },
  {
    en: "Which platform is known for smart contracts?",
    ar: "أي منصة معروفة بالعقود الذكية؟",
    options: {
      en: ["Ethereum", "Bitcoin", "Ripple", "Litecoin"],
      ar: ["إيثيريوم", "بيتكوين", "ريبل", "لايتكوين"]
    },
    correct: 0
  },
  {
    en: "What is a 'cold wallet'?",
    ar: "ما هي 'المحفظة الباردة'؟",
    options: {
      en: ["Offline storage", "Online wallet", "Mobile wallet", "Bank account"],
      ar: ["تخزين غير متصل بالإنترنت", "محفظة على الإنترنت", "محفظة محمولة", "حساب بنكي"]
    },
    correct: 0
  },
  {
    en: "What is a 'block' in blockchain?",
    ar: "ما هو 'البلوك' في البلوكشين؟",
    options: {
      en: ["Data record", "A wallet", "A coin", "A company"],
      ar: ["سجل بيانات", "محفظة", "عملة", "شركة"]
    },
    correct: 0
  },
  {
    en: "What is 'DeFi'?",
    ar: "ما هو 'DeFi'؟",
    options: {
      en: ["Decentralized Finance", "Digital Finance", "Defined Finance", "Direct Finance"],
      ar: ["التمويل اللامركزي", "التمويل الرقمي", "التمويل المحدد", "التمويل المباشر"]
    },
    correct: 0
  },
  {
    en: "What is a 'Merkle tree'?",
    ar: "ما هو 'شجرة ميركل'؟",
    options: {
      en: ["Data structure in blockchain", "A coin", "A wallet", "A company"],
      ar: ["هيكل بيانات في البلوكشين", "عملة", "محفظة", "شركة"]
    },
    correct: 0
  },
  {
    en: "What consensus mechanism does Bitcoin use?",
    ar: "ما آلية التوافق التي يستخدمها البيتكوين؟",
    options: {
      en: ["Proof of Work", "Proof of Stake", "Delegated Proof of Stake", "Proof of Authority"],
      ar: ["دليل العمل", "دليل الحصة", "دليل الحصة المفوض", "دليل السلطة"]
    },
    correct: 0
  },
  {
    en: "What is 'hash rate'?",
    ar: "ما هو 'معدل الهاش'؟",
    options: {
      en: ["Mining speed", "Internet speed", "Transaction speed", "Wallet size"],
      ar: ["سرعة التعدين", "سرعة الإنترنت", "سرعة المعاملة", "حجم المحفظة"]
    },
    correct: 0
  },
  {
    en: "What is a 'smart contract vulnerability'?",
    ar: "ما هي 'ثغرة العقد الذكي'؟",
    options: {
      en: ["Security flaw", "Coin type", "Wallet type", "Network type"],
      ar: ["ثغرة أمنية", "نوع عملة", "نوع محفظة", "نوع شبكة"]
    },
    correct: 0
  },
  {
    en: "What is 'sharding' in blockchain?",
    ar: "ما هو 'الشاردينج' في البلوكشين؟",
    options: {
      en: ["Partitioning database", "A coin", "A wallet", "A company"],
      ar: ["تقسيم قاعدة البيانات", "عملة", "محفظة", "شركة"]
    },
    correct: 0
  },
  {
    en: "Which crypto project is known for privacy coins?",
    ar: "أي مشروع كريبتو معروف بالعملات الخاصة؟",
    options: {
      en: ["Monero", "Bitcoin", "Ethereum", "Ripple"],
      ar: ["مونيرو", "بيتكوين", "إيثيريوم", "ريبل"]
    },
    correct: 0
  },
  {
    en: "What is a '51% attack' in blockchain?",
    ar: "ما هو 'هجوم 51%' في البلوكشين؟",
    options: {
      en: [
        "Controlling majority hash power",
        "A marketing strategy",
        "Trading technique",
        "Wallet type"
      ],
      ar: [
        "السيطرة على غالبية قوة الهاش",
        "استراتيجية تسويق",
        "تقنية تداول",
        "نوع محفظة"
      ]
    },
    correct: 0
  },
  {
    en: "What does 'TPS' stand for?",
    ar: "ماذا يعني 'TPS'؟",
    options: {
      en: ["Transactions Per Second", "Total Payment System", "Token Price System", "Technical Payment Service"],
      ar: ["عدد المعاملات في الثانية", "نظام الدفع الكلي", "نظام سعر التوكن", "خدمة الدفع التقنية"]
    },
    correct: 0
  },
  {
    en: "What is 'lightning network'?",
    ar: "ما هو 'شبكة البرق'؟",
    options: {
      en: ["Layer 2 payment protocol", "Blockchain", "Wallet", "Coin"],
      ar: ["بروتوكول دفع الطبقة الثانية", "بلوكشين", "محفظة", "عملة"]
    },
    correct: 0
  },
  {
    en: "Who is Vitalik Buterin?",
    ar: "من هو فيتاليك بوتيرين؟",
    options: {
      en: ["Creator of Ethereum", "Creator of Bitcoin", "Founder of Ripple", "Founder of Litecoin"],
      ar: ["مبتكر إيثيريوم", "مبتكر بيتكوين", "مؤسس ريبل", "مؤسس لايتكوين"]
    },
    correct: 0
  },
  {
    en: "What is 'staking' in crypto?",
    ar: "ما هو 'الستيكينج' في الكريبتو؟",
    options: {
      en: ["Locking coins to support network", "Selling coins", "Mining coins", "Trading coins"],
      ar: ["قفل العملات لدعم الشبكة", "بيع العملات", "تعدين العملات", "تداول العملات"]
    },
    correct: 0
  },
  {
    en: "What does 'NFT' stand for?",
    ar: "ماذا تعني 'NFT'؟",
    options: {
      en: ["Non-Fungible Token", "Non-Financial Token", "New Fungible Token", "Network Fungible Token"],
      ar: ["رمز غير قابل للاستبدال", "رمز غير مالي", "رمز قابل للاستبدال جديد", "رمز قابل للاستبدال للشبكة"]
    },
    correct: 0
  },
  {
    en: "What is a 'block reward'?",
    ar: "ما هي 'مكافأة البلوك'؟",
    options: {
      en: ["Coins given to miners", "Fees paid by users", "Token bonus", "Wallet balance"],
      ar: ["عملات تُمنح للمنقبين", "رسوم يدفعها المستخدمون", "مكافأة التوكن", "رصيد المحفظة"]
    },
    correct: 0
  },

  // تابع إضافة 80 سؤال إضافي بنفس التنسيق ...

  {
    en: "What is a 'blockchain fork'?",
    ar: "ما هو 'انقسام البلوكشين'؟",
    options: {
      en: ["A split in blockchain protocol", "A wallet type", "A coin type", "A mining tool"],
      ar: ["انقسام في بروتوكول البلوكشين", "نوع محفظة", "نوع عملة", "أداة تعدين"]
    },
    correct: 0
  },
  {
    en: "What is 'mining difficulty'?",
    ar: "ما هو 'صعوبة التعدين'؟",
    options: {
      en: ["Measure of how hard it is to mine", "Amount of coins mined", "Price of coin", "Wallet size"],
      ar: ["مقياس مدى صعوبة التعدين", "كمية العملات المُعدنة", "سعر العملة", "حجم المحفظة"]
    },
    correct: 0
  },
  {
    en: "What is a 'token burn'?",
    ar: "ما هو 'حرق التوكن'؟",
    options: {
      en: ["Permanently removing tokens", "Creating new tokens", "Trading tokens", "Staking tokens"],
      ar: ["إزالة التوكنات بشكل دائم", "إنشاء توكنات جديدة", "تداول التوكنات", "تجميد التوكنات"]
    },
    correct: 0
  },
  {
    en: "What does 'DEX' stand for?",
    ar: "ماذا تعني 'DEX'؟",
    options: {
      en: ["Decentralized Exchange", "Digital Exchange", "Direct Exchange", "Distributed Exchange"],
      ar: ["منصة تداول لامركزية", "منصة رقمية", "تبادل مباشر", "تبادل موزع"]
    },
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;
let language = "en";

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q[language];
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  q.options[language].forEach((option, index) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(index);
    optionsContainer.appendChild(btn);
  });
}

function checkAnswer(index) {
  const q = questions[currentQuestion];
  if (index === q.correct) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz").innerHTML = `<h2>Your score: ${score}/${questions.length}</h2>`;
  }
}

function toggleLanguage() {
  language = language === "en" ? "ar" : "en";
  showQuestion();
}

window.onload = showQuestion;
