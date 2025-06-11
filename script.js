const questions = [
    // Easy (40 questions)
    {
        ar: { question: "ما هي أول عملة مشفرة تم إنشاؤها؟", options: ["بيتكوين", "إيثيريوم", "ريبل", "لايتكوين"], answer: "بيتكوين" },
        en: { question: "What is the first cryptocurrency created?", options: ["Bitcoin", "Ethereum", "Ripple", "Litecoin"], answer: "Bitcoin" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هو اسم المؤسس الغامض للبيتكوين؟", options: ["ساتوشي ناكاموتو", "فيتاليك بوتيرين", "إيلون ماسك", "تشارلي لي"], answer: "ساتوشي ناكاموتو" },
        en: { question: "What is the name of Bitcoin's mysterious creator?", options: ["Satoshi Nakamoto", "Vitalik Buterin", "Elon Musk", "Charlie Lee"], answer: "Satoshi Nakamoto" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "في أي سنة تم إطلاق البيتكوين؟", options: ["2008", "2009", "2010", "2011"], answer: "2009" },
        en: { question: "In which year was Bitcoin launched?", options: ["2008", "2009", "2010", "2011"], answer: "2009" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة المشفرة التي أسسها فيتاليك بوتيرين؟", options: ["إيثيريوم", "بيتكوين", "ريبل", "كاردانو"], answer: "إيثيريوم" },
        en: { question: "Which cryptocurrency was founded by Vitalik Buterin?", options: ["Ethereum", "Bitcoin", "Ripple", "Cardano"], answer: "Ethereum" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تُعرف بـ'الذهب الرقمي'؟", options: ["بيتكوين", "إيثيريوم", "لايتكوين", "ريبل"], answer: "بيتكوين" },
        en: { question: "Which cryptocurrency is known as 'digital gold'?", options: ["Bitcoin", "Ethereum", "Litecoin", "Ripple"], answer: "Bitcoin" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي أسسها جاستن سان؟", options: ["ترون", "سولانا", "بولكادوت", "أفالانش"], answer: "ترون" },
        en: { question: "Which cryptocurrency was founded by Justin Sun?", options: ["Tron", "Solana", "Polkadot", "Avalanche"], answer: "Tron" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز ETH؟", options: ["إيثيريوم", "بيتكوين", "ريبل", "كاردانو"], answer: "إيثيريوم" },
        en: { question: "Which cryptocurrency uses the symbol ETH?", options: ["Ethereum", "Bitcoin", "Ripple", "Cardano"], answer: "Ethereum" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هو اسم العملة التي تستخدم رمز BTC؟", options: ["بيتكوين", "إيثيريوم", "ريبل", "لايتكوين"], answer: "بيتكوين" },
        en: { question: "What is the name of the cryptocurrency with the symbol BTC?", options: ["Bitcoin", "Ethereum", "Ripple", "Litecoin"], answer: "Bitcoin" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي أسسها تشارلي لي؟", options: ["لايتكوين", "بيتكوين", "إيثيريوم", "ريبل"], answer: "لايتكوين" },
        en: { question: "Which cryptocurrency was founded by Charlie Lee?", options: ["Litecoin", "Bitcoin", "Ethereum", "Ripple"], answer: "Litecoin" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز XRP؟", options: ["ريبل", "إيثيريوم", "بيتكوين", "كاردانو"], answer: "ريبل" },
        en: { question: "Which cryptocurrency uses the symbol XRP?", options: ["Ripple", "Ethereum", "Bitcoin", "Cardano"], answer: "Ripple" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز ADA؟", options: ["كاردانو", "إيثيريوم", "ريبل", "سولانا"], answer: "كاردانو" },
        en: { question: "Which cryptocurrency uses the symbol ADA?", options: ["Cardano", "Ethereum", "Ripple", "Solana"], answer: "Cardano" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هو اسم العملة التي أسسها بينانس؟", options: ["بينانس كوين", "إيثيريوم", "ريبل", "ترون"], answer: "بينانس كوين" },
        en: { question: "What is the name of the cryptocurrency founded by Binance?", options: ["Binance Coin", "Ethereum", "Ripple", "Tron"], answer: "Binance Coin" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز BNB؟", options: ["بينانس كوين", "بيتكوين", "إيثيريوم", "ريبل"], answer: "بينانس كوين" },
        en: { question: "Which cryptocurrency uses the symbol BNB?", options: ["Binance Coin", "Bitcoin", "Ethereum", "Ripple"], answer: "Binance Coin" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز SOL؟", options: ["سولانا", "كاردانو", "ريبل", "ترون"], answer: "سولانا" },
        en: { question: "Which cryptocurrency uses the symbol SOL?", options: ["Solana", "Cardano", "Ripple", "Tron"], answer: "Solana" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي أسسها أناتولي ياكوفينكو؟", options: ["سولانا", "إيثيريوم", "كاردانو", "ترون"], answer: "سولانا" },
        en: { question: "Which cryptocurrency was founded by Anatoly Yakovenko?", options: ["Solana", "Ethereum", "Cardano", "Tron"], answer: "Solana" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز DOT؟", options: ["بولكادوت", "ريبل", "إيثيريوم", "كاردانو"], answer: "بولكادوت" },
        en: { question: "Which cryptocurrency uses the symbol DOT?", options: ["Polkadot", "Ripple", "Ethereum", "Cardano"], answer: "Polkadot" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي أسسها غافن وود؟", options: ["بولكادوت", "إيثيريوم", "سولانا", "ترون"], answer: "بولكادوت" },
        en: { question: "Which cryptocurrency was founded by Gavin Wood?", options: ["Polkadot", "Ethereum", "Solana", "Tron"], answer: "Polkadot" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز TRX؟", options: ["ترون", "ريبل", "إيثيريوم", "كاردانو"], answer: "ترون" },
        en: { question: "Which cryptocurrency uses the symbol TRX?", options: ["Tron", "Ripple", "Ethereum", "Cardano"], answer: "Tron" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز USDT؟", options: ["تيثر", "بيتكوين", "إيثيريوم", "ريبل"], answer: "تيثر" },
        en: { question: "Which cryptocurrency uses the symbol USDT?", options: ["Tether", "Bitcoin", "Ethereum", "Ripple"], answer: "Tether" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز USDC؟", options: ["يو إس دي كوين", "تيثر", "بيتكوين", "إيثيريوم"], answer: "يو إس دي كوين" },
        en: { question: "Which cryptocurrency uses the symbol USDC?", options: ["USD Coin", "Tether", "Bitcoin", "Ethereum"], answer: "USD Coin" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تُعرف بـ'الفضة الرقمية'؟", options: ["لايتكوين", "بيتكوين", "إيثيريوم", "ريبل"], answer: "لايتكوين" },
        en: { question: "Which cryptocurrency is known as 'digital silver'?", options: ["Litecoin", "Bitcoin", "Ethereum", "Ripple"], answer: "Litecoin" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز LTC؟", options: ["لايتكوين", "بيتكوين", "إيثيريوم", "ريبل"], answer: "لايتكوين" },
        en: { question: "Which cryptocurrency uses the symbol LTC?", options: ["Litecoin", "Bitcoin", "Ethereum", "Ripple"], answer: "Litecoin" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز DOGE؟", options: ["دوجكوين", "بيتكوين", "إيثيريوم", "ريبل"], answer: "دوجكوين" },
        en: { question: "Which cryptocurrency uses the symbol DOGE?", options: ["Dogecoin", "Bitcoin", "Ethereum", "Ripple"], answer: "Dogecoin" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي بدأت كمزحة؟", options: ["دوجكوين", "بيتكوين", "إيثيريوم", "ريبل"], answer: "دوجكوين" },
        en: { question: "Which cryptocurrency started as a joke?", options: ["Dogecoin", "Bitcoin", "Ethereum", "Ripple"], answer: "Dogecoin" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي أسسها بيلي ماركوس؟", options: ["دوجكوين", "بيتكوين", "إيثيريوم", "ريبل"], answer: "دوجكوين" },
        en: { question: "Which cryptocurrency was founded by Billy Markus?", options: ["Dogecoin", "Bitcoin", "Ethereum", "Ripple"], answer: "Dogecoin" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز AVAX؟", options: ["أفالانش", "سولانا", "ريبل", "ترون"], answer: "أفالانش" },
        en: { question: "Which cryptocurrency uses the symbol AVAX?", options: ["Avalanche", "Solana", "Ripple", "Tron"], answer: "Avalanche" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز LINK؟", options: ["تشينلينك", "ريبل", "إيثيريوم", "كاردانو"], answer: "تشينلينك" },
        en: { question: "Which cryptocurrency uses the symbol LINK?", options: ["Chainlink", "Ripple", "Ethereum", "Cardano"], answer: "Chainlink" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز MATIC؟", options: ["بوليجون", "ريبل", "إيثيريوم", "كاردانو"], answer: "بوليجون" },
        en: { question: "Which cryptocurrency uses the symbol MATIC?", options: ["Polygon", "Ripple", "Ethereum", "Cardano"], answer: "Polygon" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز ATOM؟", options: ["كوزموس", "ريبل", "إيثيريوم", "كاردانو"], answer: "كوزموس" },
        en: { question: "Which cryptocurrency uses the symbol ATOM?", options: ["Cosmos", "Ripple", "Ethereum", "Cardano"], answer: "Cosmos" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز XLM؟", options: ["ستيلر", "ريبل", "إيثيريوم", "كاردانو"], answer: "ستيلر" },
        en: { question: "Which cryptocurrency uses the symbol XLM?", options: ["Stellar", "Ripple", "Ethereum", "Cardano"], answer: "Stellar" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي أسسها جيد ماكالب؟", options: ["ستيلر", "إيثيريوم", "سولانا", "ترون"], answer: "ستيلر" },
        en: { question: "Which cryptocurrency was founded by Jed McCaleb?", options: ["Stellar", "Ethereum", "Solana", "Tron"], answer: "Stellar" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز ALGO؟", options: ["ألغوراند", "ريبل", "إيثيريوم", "كاردانو"], answer: "ألغوراند" },
        en: { question: "Which cryptocurrency uses the symbol ALGO?", options: ["Algorand", "Ripple", "Ethereum", "Cardano"], answer: "Algorand" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز VET؟", options: ["فيتشين", "ريبل", "إيثيريوم", "كاردانو"], answer: "فيتشين" },
        en: { question: "Which cryptocurrency uses the symbol VET?", options: ["VeChain", "Ripple", "Ethereum", "Cardano"], answer: "VeChain" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز HBAR؟", options: ["هيدرا", "ريبل", "إيثيريوم", "كاردانو"], answer: "هيدرا" },
        en: { question: "Which cryptocurrency uses the symbol HBAR?", options: ["Hedera", "Ripple", "Ethereum", "Cardano"], answer: "Hedera" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز FIL؟", options: ["فايلكوين", "ريبل", "إيثيريوم", "كاردانو"], answer: "فايلكوين" },
        en: { question: "Which cryptocurrency uses the symbol FIL?", options: ["Filecoin", "Ripple", "Ethereum", "Cardano"], answer: "Filecoin" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز ICP؟", options: ["إنترنت كمبيوتر", "ريبل", "إيثيريوم", "كاردانو"], answer: "إنترنت كمبيوتر" },
        en: { question: "Which cryptocurrency uses the symbol ICP?", options: ["Internet Computer", "Ripple", "Ethereum", "Cardano"], answer: "Internet Computer" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز EOS؟", options: ["إيوس", "ريبل", "إيثيريوم", "كاردانو"], answer: "إيوس" },
        en: { question: "Which cryptocurrency uses the symbol EOS?", options: ["EOS", "Ripple", "Ethereum", "Cardano"], answer: "EOS" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز XTZ؟", options: ["تيزوس", "ريبل", "إيثيريوم", "كاردانو"], answer: "تيزوس" },
        en: { question: "Which cryptocurrency uses the symbol XTZ?", options: ["Tezos", "Ripple", "Ethereum", "Cardano"], answer: "Tezos" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز THETA؟", options: ["ثيتا", "ريبل", "إيثيريوم", "كاردانو"], answer: "ثيتا" },
        en: { question: "Which cryptocurrency uses the symbol THETA?", options: ["Theta", "Ripple", "Ethereum", "Cardano"], answer: "Theta" },
        difficulty: "سهلة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم رمز NEO؟", options: ["نيو", "ريبل", "إيثيريوم", "كاردانو"], answer: "نيو" },
        en: { question: "Which cryptocurrency uses the symbol NEO?", options: ["Neo", "Ripple", "Ethereum", "Cardano"], answer: "Neo" },
        difficulty: "سهلة"
    },
    // Medium (40 questions)
    {
        ar: { question: "ما هو البلوكشين؟", options: ["تطبيق لتداول العملات", "سجل رقمي لامركزي", "عملة مشفرة جديدة", "محفظة رقمية"], answer: "سجل رقمي لامركزي" },
        en: { question: "What is a blockchain?", options: ["A trading app", "A decentralized digital ledger", "A new cryptocurrency", "A digital wallet"], answer: "A decentralized digital ledger" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية RippleNet؟", options: ["XRP", "ETH", "ADA", "BNB"], answer: "XRP" },
        en: { question: "Which cryptocurrency uses RippleNet technology?", options: ["XRP", "ETH", "ADA", "BNB"], answer: "XRP" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هو الغرض من عملة Tether (USDT)؟", options: ["تثبيت القيمة", "التعدين", "التداول السريع", "العقود الذكية"], answer: "تثبيت القيمة" },
        en: { question: "What is the purpose of Tether (USDT)?", options: ["Price stabilization", "Mining", "Fast trading", "Smart contracts"], answer: "Price stabilization" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هو اسم المحفظة التي تخزن العملات دون اتصال بالإنترنت؟", options: ["محفظة باردة", "محفظة ساخنة", "محفظة رقمية", "محفظة ورقية"], answer: "محفظة باردة" },
        en: { question: "What is the name of a wallet that stores crypto offline?", options: ["Cold Wallet", "Hot Wallet", "Digital Wallet", "Paper Wallet"], answer: "Cold Wallet" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية العقود الذكية بشكل رئيسي؟", options: ["إيثيريوم", "بيتكوين", "ريبل", "لايتكوين"], answer: "إيثيريوم" },
        en: { question: "Which cryptocurrency primarily uses smart contract technology?", options: ["Ethereum", "Bitcoin", "Ripple", "Litecoin"], answer: "Ethereum" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هو الحد الأقصى لعدد البيتكوين التي يمكن تعدينها؟", options: ["21 مليون", "100 مليون", "50 مليون", "غير محدود"], answer: "21 مليون" },
        en: { question: "What is the maximum number of Bitcoins that can be mined?", options: ["21 million", "100 million", "50 million", "Unlimited"], answer: "21 million" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي عملية التحقق من المعاملات في البلوكشين؟", options: ["التعدين", "التشفير", "التوزيع", "التخزين"], answer: "التعدين" },
        en: { question: "What is the process of verifying transactions on a blockchain?", options: ["Mining", "Encryption", "Distribution", "Storage"], answer: "Mining" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هو اسم العملة التي أسسها تشارلز هوسكينسون؟", options: ["كاردانو", "إيثيريوم", "سولانا", "ترون"], answer: "كاردانو" },
        en: { question: "What is the name of the cryptocurrency founded by Charles Hoskinson?", options: ["Cardano", "Ethereum", "Solana", "Tron"], answer: "Cardano" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم Proof of Stake منذ إنشائها؟", options: ["كاردانو", "بيتكوين", "إيثيريوم", "ريبل"], answer: "كاردانو" },
        en: { question: "Which cryptocurrency uses Proof of Stake since its inception?", options: ["Cardano", "Bitcoin", "Ethereum", "Ripple"], answer: "Cardano" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هو اسم بروتوكول التمويل اللامركزي (DeFi) الشهير على إيثيريوم؟", options: ["يونيسواب", "كومباوند", "آفي", "كلها صحيحة"], answer: "كلها صحيحة" },
        en: { question: "What is the name of a famous DeFi protocol on Ethereum?", options: ["Uniswap", "Compound", "Aave", "All are correct"], answer: "All are correct" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية الطبقة الثانية Polygon؟", options: ["MATIC", "ETH", "ADA", "BNB"], answer: "MATIC" },
        en: { question: "Which cryptocurrency uses Layer-2 Polygon technology?", options: ["MATIC", "ETH", "ADA", "BNB"], answer: "MATIC" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هو اسم السوق الشهير لـ NFTs على إيثيريوم؟", options: ["OpenSea", "Rarible", "Foundation", "كلها صحيحة"], answer: "كلها صحيحة" },
        en: { question: "What is the name of a famous NFT marketplace on Ethereum?", options: ["OpenSea", "Rarible", "Foundation", "All are correct"], answer: "All are correct" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي تقنية العقود الذكية؟", options: ["برامج تعمل تلقائيًا", "عملة مشفرة", "محفظة رقمية", "بروتوكول إجماع"], answer: "برامج تعمل تلقائيًا" },
        en: { question: "What are smart contracts?", options: ["Self-executing programs", "A cryptocurrency", "A digital wallet", "A consensus protocol"], answer: "Self-executing programs" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية Oracle؟", options: ["تشينلينك", "ريبل", "إيثيريوم", "كاردانو"], answer: "تشينلينك" },
        en: { question: "Which cryptocurrency uses Oracle technology?", options: ["Chainlink", "Ripple", "Ethereum", "Cardano"], answer: "Chainlink" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هو اسم البروتوكول الذي يربط البلوكشينات المختلفة؟", options: ["بولكادوت", "إيثيريوم", "سولانا", "ترون"], answer: "بولكادوت" },
        en: { question: "What is the name of the protocol that connects different blockchains?", options: ["Polkadot", "Ethereum", "Solana", "Tron"], answer: "Polkadot" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية Cosmos Hub؟", options: ["ATOM", "ETH", "ADA", "BNB"], answer: "ATOM" },
        en: { question: "Which cryptocurrency uses Cosmos Hub technology?", options: ["ATOM", "ETH", "ADA", "BNB"], answer: "ATOM" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية Stellar Consensus؟", options: ["XLM", "ETH", "ADA", "BNB"], answer: "XLM" },
        en: { question: "Which cryptocurrency uses Stellar Consensus?", options: ["XLM", "ETH", "ADA", "BNB"], answer: "XLM" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية Pure Proof of Stake؟", options: ["ألغوراند", "إيثيريوم", "سولانا", "ترون"], answer: "ألغوراند" },
        en: { question: "Which cryptocurrency uses Pure Proof of Stake?", options: ["Algorand", "Ethereum", "Solana", "Tron"], answer: "Algorand" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية Thorchain؟", options: ["RUNE", "ETH", "ADA", "BNB"], answer: "RUNE" },
        en: { question: "Which cryptocurrency uses Thorchain technology?", options: ["RUNE", "ETH", "ADA", "BNB"], answer: "RUNE" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية VeChainThor؟", options: ["VET", "ETH", "ADA", "BNB"], answer: "VET" },
        en: { question: "Which cryptocurrency uses VeChainThor technology?", options: ["VET", "ETH", "ADA", "BNB"], answer: "VET" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية Hashgraph؟", options: ["هيدرا", "إيثيريوم", "سولانا", "ترون"], answer: "هيدرا" },
        en: { question: "Which cryptocurrency uses Hashgraph technology?", options: ["Hedera", "Ethereum", "Solana", "Tron"], answer: "Hedera" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية IPFS؟", options: ["فايلكوين", "إيثيريوم", "سولانا", "ترون"], answer: "فايلكوين" },
        en: { question: "Which cryptocurrency uses IPFS technology?", options: ["Filecoin", "Ethereum", "Solana", "Tron"], answer: "Filecoin" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية DFINITY؟", options: ["إنترنت كمبيوتر", "إيثيريوم", "سولانا", "ترون"], answer: "إنترنت كمبيوتر" },
        en: { question: "Which cryptocurrency uses DFINITY technology?", options: ["Internet Computer", "Ethereum", "Solana", "Tron"], answer: "Internet Computer" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية Delegated Proof of Stake؟", options: ["إيوس", "إيثيريوم", "سولانا", "ترون"], answer: "إيوس" },
        en: { question: "Which cryptocurrency uses Delegated Proof of Stake?", options: ["EOS", "Ethereum", "Solana", "Tron"], answer: "EOS" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية Liquid Proof of Stake؟", options: ["تيزوس", "إيثيريوم", "سولانا", "ترون"], answer: "تيزوس" },
        en: { question: "Which cryptocurrency uses Liquid Proof of Stake?", options: ["Tezos", "Ethereum", "Solana", "Tron"], answer: "Tezos" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية Theta Network؟", options: ["ثيتا", "إيثيريوم", "سولانا", "ترون"], answer: "ثيتا" },
        en: { question: "Which cryptocurrency uses Theta Network?", options: ["Theta", "Ethereum", "Solana", "Tron"], answer: "Theta" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية Smart Economy؟", options: ["نيو", "إيثيريوم", "سولانا", "ترون"], answer: "نيو" },
        en: { question: "Which cryptocurrency uses Smart Economy?", options: ["Neo", "Ethereum", "Solana", "Tron"], answer: "Neo" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية Avalanche Consensus؟", options: ["أفالانش", "إيثيريوم", "سولانا", "ترون"], answer: "أفالانش" },
        en: { question: "Which cryptocurrency uses Avalanche Consensus?", options: ["Avalanche", "Ethereum", "Solana", "Tron"], answer: "Avalanche" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هو اسم المحفظة الشهيرة لتخزين العملات المشفرة؟", options: ["MetaMask", "Coinbase", "Trust Wallet", "كلها صحيحة"], answer: "كلها صحيحة" },
        en: { question: "What is the name of a famous wallet for storing cryptocurrencies?", options: ["MetaMask", "Coinbase", "Trust Wallet", "All are correct"], answer: "All are correct" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية Layer-1؟", options: ["سولانا", "بوليجون", "تشينلينك", "يونيسواب"], answer: "سولانا" },
        en: { question: "Which cryptocurrency uses Layer-1 technology?", options: ["Solana", "Polygon", "Chainlink", "Uniswap"], answer: "Solana" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية Layer-2؟", options: ["بوليجون", "سولانا", "إيثيريوم", "ريبل"], answer: "بوليجون" },
        en: { question: "Which cryptocurrency uses Layer-2 technology?", options: ["Polygon", "Solana", "Ethereum", "Ripple"], answer: "Polygon" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هو اسم البورصة الشهيرة لتداول العملات المشفرة؟", options: ["بينانس", "كوينبيس", "كراكن", "كلها صحيحة"], answer: "كلها صحيحة" },
        en: { question: "What is the name of a famous exchange for trading cryptocurrencies?", options: ["Binance", "Coinbase", "Kraken", "All are correct"], answer: "All are correct" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية Stablecoin؟", options: ["تيثر", "بيتكوين", "إيثيريوم", "ريبل"], answer: "تيثر" },
        en: { question: "Which cryptocurrency uses Stablecoin technology?", options: ["Tether", "Bitcoin", "Ethereum", "Ripple"], answer: "Tether" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية Cross-Chain؟", options: ["بولكادوت", "إيثيريوم", "سولانا", "ريبل"], answer: "بولكادوت" },
        en: { question: "Which cryptocurrency uses Cross-Chain technology?", options: ["Polkadot", "Ethereum", "Solana", "Ripple"], answer: "Polkadot" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية Interoperability؟", options: ["كوزموس", "إيثيريوم", "سولانا", "ريبل"], answer: "كوزموس" },
        en: { question: "Which cryptocurrency uses Interoperability technology?", options: ["Cosmos", "Ethereum", "Solana", "Ripple"], answer: "Cosmos" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية Payment Network؟", options: ["ريبل", "إيثيريوم", "سولانا", "كاردانو"], answer: "ريبل" },
        en: { question: "Which cryptocurrency uses Payment Network technology?", options: ["Ripple", "Ethereum", "Solana", "Cardano"], answer: "Ripple" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية Decentralized Storage؟", options: ["فايلكوين", "إيثيريوم", "سولانا", "ريبل"], answer: "فايلكوين" },
        en: { question: "Which cryptocurrency uses Decentralized Storage?", options: ["Filecoin", "Ethereum", "Solana", "Ripple"], answer: "Filecoin" },
        difficulty: "متوسطة"
    },
    {
        ar: { question: "ما هي العملة التي تستخدم تقنية Video Streaming؟", options: ["ثيتا", "إيثيريوم", "سولانا", "ريبل"], answer: "ثيتا" },
        en: { question: "Which cryptocurrency uses Video Streaming technology?", options: ["Theta", "Ethereum", "Solana", "Ripple"], answer: "Theta" },
        difficulty: "متوسطة"
    },
    // Hard (20 questions)
    {
        ar: { question: "ما هو بروتوكول الإجماع في Ethereum 2.0؟", options: ["Proof of Work", "Proof of Stake", "Proof of Authority", "Proof of Burn"], answer: "Proof of Stake" },
        en: { question: "What is the consensus protocol in Ethereum 2.0?", options: ["Proof of Work", "Proof of Stake", "Proof of Authority", "Proof of Burn"], answer: "Proof of Stake" },
        difficulty: "صعبة"
    },
    {
        ar: { question: "ما هي تقنية ZK-Rollups؟", options: ["تقنية لتقليل التكلفة", "عملة مشفرة", "محفظة رقمية", "بروتوكول إجماع"], answer: "تقنية لتقليل التكلفة" },
        en: { question: "What are ZK-Rollups?", options: ["A cost-reduction technology", "A cryptocurrency", "A digital wallet", "A consensus protocol"], answer: "A cost-reduction technology" },
        difficulty: "صعبة"
    },
    {
        ar: { question: "ما هي تقنية Sharding في البلوكشين؟", options: ["تقسيم البيانات لتحسين الأداء", "تشفير البيانات", "توزيع العملات", "تخزين المعاملات"], answer: "تقسيم البيانات لتحسين الأداء" },
        en: { question: "What is Sharding in blockchain?", options: ["Splitting data for performance", "Data encryption", "Coin distribution", "Transaction storage"], answer: "Splitting data for performance" },
        difficulty: "صعبة"
    },
    {
        ar: { question: "ما هو اسم بروتوكول الإجماع المستخدم في Solana؟", options: ["Proof of History", "Proof of Work", "Proof of Stake", "Proof of Authority"], answer: "Proof of History" },
        en: { question: "What is the consensus protocol used in Solana?", options: ["Proof of History", "Proof of Work", "Proof of Stake", "Proof of Authority"], answer: "Proof of History" },
        difficulty: "صعبة"
    },
    {
        ar: { question: "ما هي تقنية Optimistic Rollups؟", options: ["حل توسيع الطبقة الثانية", "عملة مشفرة", "محفظة رقمية", "بروتوكول إجماع"], answer: "حل توسيع الطبقة الثانية" },
        en: { question: "What are Optimistic Rollups?", options: ["A layer-2 scaling solution", "A cryptocurrency", "A digital wallet", "A consensus protocol"], answer: "A layer-2 scaling solution" },
        difficulty: "صعبة"
    },
    {
        ar: { question: "ما هو اسم بروتوكول NFT الشهير على إيثيريوم؟", options: ["OpenSea", "Rarible", "Foundation", "كلها صحيحة"], answer: "كلها صحيحة" },
        en: { question: "What is the name of a famous NFT protocol on Ethereum?", options: ["OpenSea", "Rarible", "Foundation", "All are correct"], answer: "All are correct" },
        difficulty: "صعبة"
    },
    {
        ar: { question: "ما هي تقنية Cross-Chain Bridges؟", options: ["ربط البلوكشينات", "تشفير البيانات", "توزيع العملات", "تخزين المعاملات"], answer: "ربط البلوكشينات" },
        en: { question: "What are Cross-Chain Bridges?", options: ["Connecting blockchains", "Data encryption", "Coin distribution", "Transaction storage"], answer: "Connecting blockchains" },
        difficulty: "صعبة"
    },
    {
        ar: { question: "ما هو اسم البروتوكول الذي يدعم التمويل اللامركزي على Solana؟", options: ["Serum", "Uniswap", "Aave", "Compound"], answer: "Serum" },
        en: { question: "What is the name of a protocol supporting DeFi on Solana?", options: ["Serum", "Uniswap", "Aave", "Compound"], answer: "Serum" },
        difficulty: "صعبة"
    },
    {
        ar: { question: "ما هي تقنية Plasma في إيثيريوم؟", options: ["حل توسيع الطبقة الثانية", "عملة مشفرة", "محفظة رقمية", "بروتوكول إجماع"], answer: "حل توسيع الطبقة الثانية" },
        en: { question: "What is Plasma in Ethereum?", options: ["A layer-2 scaling solution", "A cryptocurrency", "A digital wallet", "A consensus protocol"], answer: "A layer-2 scaling solution" },
        difficulty: "صعبة"
    },
    {
        ar: { question: "ما هو اسم البروتوكول الذي يدعم NFTs على Solana؟", options: ["Magic Eden", "OpenSea", "Rarible", "Foundation"], answer: "Magic Eden" },
        en: { question: "What is the name of a protocol supporting NFTs on Solana?", options: ["Magic Eden", "OpenSea", "Rarible", "Foundation"], answer: "Magic Eden" },
        difficulty: "صعبة"
    },
    {
        ar: { question: "ما هي تقنية State Channels؟", options: ["معاملات خارج السلسلة", "تشفير البيانات", "توزيع العملات", "تخزين المعاملات"], answer: "معاملات خارج السلسلة" },
        en: { question: "What are State Channels?", options: ["Off-chain transactions", "Data encryption", "Coin distribution", "Transaction storage"], answer: "Off-chain transactions" },
        difficulty: "صعبة"
    },
    {
        ar: { question: "ما هو اسم البروتوكول الذي يدعم التمويل اللامركزي على Polygon؟", options: ["QuickSwap", "Uniswap", "Aave", "Compound"], answer: "QuickSwap" },
        en: { question: "What is the name of a protocol supporting DeFi on Polygon?", options: ["QuickSwap", "Uniswap", "Aave", "Compound"], answer: "QuickSwap" },
        difficulty: "صعبة"
    },
    {
        ar: { question: "ما هي تقنية Parachains في بولكادوت؟", options: ["سلاسل موازية", "تشفير البيانات", "توزيع العملات", "تخزين المعاملات"], answer: "سلاسل موازية" },
        en: { question: "What are Parachains in Polkadot?", options: ["Parallel chains", "Data encryption", "Coin distribution", "Transaction storage"], answer: "Parallel chains" },
        difficulty: "صعبة"
    },
    {
        ar: { question: "ما هو اسم البروتوكول الذي يدعم التمويل اللامركزي على Avalanche؟", options: ["Trader Joe", "Uniswap", "Aave", "Compound"], answer: "Trader Joe" },
        en: { question: "What is the name of a protocol supporting DeFi on Avalanche?", options: ["Trader Joe", "Uniswap", "Aave", "Compound"], answer: "Trader Joe" },
        difficulty: "صعبة"
    },
    {
        ar: { question: "ما هي تقنية Zero-Knowledge Proofs؟", options: ["إثبات بدون كشف البيانات", "تشفير البيانات", "توزيع العملات", "تخزين المعاملات"], answer: "إثبات بدون كشف البيانات" },
        en: { question: "What are Zero-Knowledge Proofs?", options: ["Proof without revealing data", "Data encryption", "Coin distribution", "Transaction storage"], answer: "Proof without revealing data" },
        difficulty: "صعبة"
    },
    {
        ar: { question: "ما هو اسم البروتوكول الذي يدعم التمويل اللامركزي على Cosmos؟", options: ["Osmosis", "Uniswap", "Aave", "Compound"], answer: "Osmosis" },
        en: { question: "What is the name of a protocol supporting DeFi on Cosmos?", options: ["Osmosis", "Uniswap", "Aave", "Compound"], answer: "Osmosis" },
        difficulty: "صعبة"
    },
    {
        ar: { question: "ما هي تقنية Byzantine Fault Tolerance؟", options: ["تحمل الأخطاء", "تشفير البيانات", "توزيع العملات", "تخزين المعاملات"], answer: "تحمل الأخطاء" },
        en: { question: "What is Byzantine Fault Tolerance?", options: ["Fault tolerance", "Data encryption", "Coin distribution", "Transaction storage"], answer: "Fault tolerance" },
        difficulty: "صعبة"
    },
    {
        ar: { question: "ما هو اسم البروتوكول الذي يدعم التمويل اللامركزي على Algorand؟", options: ["Yieldly", "Uniswap", "Aave", "Compound"], answer: "Yieldly" },
        en: { question: "What is the name of a protocol supporting DeFi on Algorand?", options: ["Yieldly", "Uniswap", "Aave", "Compound"], answer: "Yieldly" },
        difficulty: "صعبة"
    },
    {
        ar: { question: "ما هي تقنية Sidechains؟", options: ["سلاسل جانبية", "تشفير البيانات", "توزيع العملات", "تخزين المعاملات"], answer: "سلاسل جانبية" },
        en: { question: "What are Sidechains?", options: ["Side chains", "Data encryption", "Coin distribution", "Transaction storage"], answer: "Side chains" },
        difficulty: "صعبة"
    },
    {
        ar: { question: "ما هو اسم البروتوكول الذي يدعم التمويل اللامركزي على Tezos؟", options: ["Quipuswap", "Uniswap", "Aave", "Compound"], answer: "Quipuswap" },
        en: { question: "What is the name of a protocol supporting DeFi on Tezos?", options: ["Quipuswap", "Uniswap", "Aave", "Compound"], answer: "Quipuswap" },
        difficulty: "صعبة"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let highScore = localStorage.getItem('highScore') ? parseInt(localStorage.getItem('highScore')) : 0;
let timer;
let currentLang = 'ar';
let isMuted = false;
const TIME_LIMIT = 10;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score-value');
const highScoreElement = document.getElementById('high-score');
const timerElement = document.getElementById('time');
const timerLabel = document.getElementById('timer');
const resultElement = document.getElementById('result');
const muteButton = document.getElementById('mute-btn');
const restartButton = document.getElementById('restart-btn');
const languageSelection = document.getElementById('language-selection');
const gameSection = document.getElementById('game');
const titleElement = document.getElementById('title');
const progressElement = document.getElementById('current-question');
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const backgroundMusic = document.getElementById('background-music');

function startGame(lang) {
    currentLang = lang;
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    scoreElement.textContent = score;
    highScoreElement.textContent = highScore;
    nextButton.disabled = true;
    languageSelection.style.display = 'none';
    gameSection.style.display = 'block';
    titleElement.textContent = lang === 'ar' ? 'لعبة تحزير الكريبتو' : 'Crypto Quiz Game';
    nextButton.textContent = lang === 'ar' ? 'السؤال التالي' : 'Next Question';
    muteButton.textContent = lang === 'ar' ? 'كتم الصوت' : 'Mute Sound';
    restartButton.textContent = lang === 'ar' ? 'إعادة اللعب' : 'Restart Game';
    timerLabel.textContent = lang === 'ar' ? `الوقت المتبقي: ${TIME_LIMIT} ث` : `Time Remaining: ${TIME_LIMIT} s`;
    progressElement.textContent = 1;
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffd700' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#ffd700', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: 'none', random: true, out_mode: 'out' }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });
    if (!isMuted) backgroundMusic.play().catch(() => {});
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex][currentLang];
    questionElement.textContent = currentQuestion.question;
    progressElement.textContent = currentQuestionIndex + 1;

    const shuffledOptions = [...currentQuestion.options].sort(() => Math.random() - 0.5);
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
    timerLabel.textContent = currentLang === 'ar' ? `الوقت المتبقي: ${TIME_LIMIT} ث` : `Time Remaining: ${TIME_LIMIT} s`;
    nextButton.disabled = true;
    nextButton.style.display = 'inline-block';
    restartButton.style.display = 'none';
    optionsElement.innerHTML = '';
    resultElement.textContent = '';
}

function startTimer() {
    let timeLeft = TIME_LIMIT;
    timerElement.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        timerLabel.textContent = currentLang === 'ar' ? `الوقت المتبقي: ${timeLeft} ث` : `Time Remaining: ${timeLeft} s`;
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
        button.classList.add(button.textContent === currentQuestion.answer ? 'correct' : 
                            button.textContent === selectedOption ? 'wrong' : '');
        button.style.pointerEvents = 'none';
    });

    if (selectedOption === currentQuestion.answer) {
        score += 10;
        correctAnswers++;
        scoreElement.textContent = score;
        resultElement.textContent = currentLang === 'ar' ? 'إجابة صحيحة!' : 'Correct Answer!';
        resultElement.style.color = '#28a745';
        if (!isMuted) correctSound.play().catch(() => {});
    } else {
        resultElement.textContent = currentLang === 'ar' 
            ? `إجابة خاطئة! الإجابة الصحيحة هي: ${currentQuestion.answer}`
            : `Wrong Answer! The correct answer is: ${currentQuestion.answer}`;
        resultElement.style.color = '#dc3545';
        if (!isMuted) wrongSound.play().catch(() => {});
    }

    nextButton.disabled = false;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endGame();
    }
});

muteButton.addEventListener('click', () => {
    isMuted = !isMuted;
    muteButton.textContent = currentLang === 'ar' 
        ? (isMuted ? 'تشغيل الصوت' : 'كتم الصوت') 
        : (isMuted ? 'Unmute Sound' : 'Mute Sound');
    muteButton.classList.toggle('muted', isMuted);
    if (isMuted) {
        backgroundMusic.pause();
    } else {
        backgroundMusic.play().catch(() => {});
    }
});

restartButton.addEventListener('click', () => {
    languageSelection.style.display = 'block';
    gameSection.style.display = 'none';
    backgroundMusic.pause();
});

function endGame() {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore);
        highScoreElement.textContent = highScore;
    }
    const percentage = (correctAnswers / questions.length) * 100;
    questionElement.textContent = currentLang === 'ar' ? 'انتهت اللعبة!' : 'Game Over!';
    optionsElement.innerHTML = '';
    resultElement.textContent = currentLang === 'ar' 
        ? `نقاطك النهائية: ${score} | أعلى نقاط: ${highScore} | نسبة الإجابات الصحيحة: ${percentage.toFixed(2)}%`
