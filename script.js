// Energy & Profile Data Mappings
const energyTypes = [
  { name: '發電機 (春)', fullName: 'Spring (Dynamo / 發電機)' },
  { name: '火焰 (夏)', fullName: 'Summer (Blaze / 火焰)' },
  { name: '節奏 (秋)', fullName: 'Fall (Tempo / 節奏)' },
  { name: '鋼鐵 (冬)', fullName: 'Winter (Steel / 鋼鐵)' }
];

// 8 Wealth Profiles Data
const profiles = {
  creator: {
    name: "創作者 (Creator)",
    desc: "你擁有極高的創造力與遠見，擅長從無到有創造新產品或新模式。你不喜歡被細節綁住，適合專注在「發起」與「構思」。",
    careers: ["創業家", "產品經理 (PM)", "發明家", "藝術總監", "行銷策劃"]
  },
  star: {
    name: "明星 (Star)",
    desc: "你的個人魅力是你最大的資產。你擅長在人群中發光，透過影響力來創造價值。你不需要自己發明產品，而是讓產品因你而紅。",
    careers: ["網紅/KOL", "演說家", "品牌代言人", "銷售培訓師", "直播主"]
  },
  supporter: {
    name: "支持者 (Supporter)",
    desc: "你是天生的領導者與激勵者。你擅長帶領團隊，讓每個人發揮所長。你的財富來自於「人」，而非產品或系統。",
    careers: ["執行長 (CEO)", "團隊主管", "公關經理", "人資長", "社群經理"]
  },
  deal_maker: {
    name: "媒合者 (Deal Maker)",
    desc: "你擁有敏銳的市場嗅覺與人際手腕。你不需要擁有資產，而是透過撮合買賣雙方來獲利。你靠「談判」與「連結」致富。",
    careers: ["房地產仲介", "創投經紀人", "頂尖業務", "談判專家", "外交官"]
  },
  trader: {
    name: "商人 (Trader)",
    desc: "你對時機點與價格波動非常敏感。你不需要創新，也不需要帶人，你的天賦在於「低買高賣」與服務市場需求。",
    careers: ["金融交易員", "進出口貿易商", "批發零售商", "客服經理", "市場分析師"]
  },
  accumulator: {
    name: "積蓄者 (Accumulator)",
    desc: "你擅長管理與累積。你不喜歡冒險，喜歡透過時間複利與系統化的方式累積資產。你是最可靠的專案守護者。",
    careers: ["專案經理", "會計師", "銀行家", "資產管理師", "律師"]
  },
  lord: {
    name: "地主 (Lord)",
    desc: "你喜歡控制資產與現金流。你不需要露面，喜歡在幕後透過數據與系統來掌控大局。你靠「擁有資產」致富。",
    careers: ["財務長 (CFO)", "包租公/婆", "數據分析師", "礦場主", "後台管理"]
  },
  mechanic: {
    name: "技師 (Mechanic)",
    desc: "你是優化大師。你擅長把現有的東西拆解、改良，讓它跑得更順、更快。你不需要創造新東西，而是把別人的東西變更好。",
    careers: ["系統工程師", "流程優化師", "加盟體系設計", "營運長 (COO)", "架構師"]
  }
};

// State Management
let currentQuestionIndex = 0;
let userAnswers = [];
let myRadarChart = null;

// DOM Elements
const views = {
  welcome: document.getElementById('welcome'),
  quiz: document.getElementById('quiz-container'),
  result: document.getElementById('result')
};

const ui = {
  questionText: document.getElementById('question-text'),
  optionsGrid: document.getElementById('options-grid'),
  progressBar: document.getElementById('progress-bar-fill'),
  progressText: document.getElementById('progress-text'),
  prevBtn: document.getElementById('prev-btn')
};

// Utilities
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  if (typeof quizData === 'undefined') {
    console.error('Quiz data not loaded!');
    return;
  }

  // Initialize answers array
  userAnswers = new Array(quizData.length).fill(null);

  // Update info text
  const infoText = document.getElementById('quiz-info');
  if (infoText) {
    infoText.textContent = `直覺作答 · ${quizData.length}題 · 發現你的致富天賦`;
  }

  // Bind events
  const startBtn = document.getElementById('start-btn');
  if (startBtn) startBtn.addEventListener('click', startQuiz);

  const prevBtn = document.getElementById('prev-btn');
  if (prevBtn) prevBtn.addEventListener('click', goToPrevQuestion);

  const retakeBtn = document.getElementById('retake-btn');
  if (retakeBtn) retakeBtn.addEventListener('click', () => location.reload());
});

function startQuiz() {
  views.welcome.classList.add('hidden');
  views.quiz.classList.remove('hidden');
  currentQuestionIndex = 0;
  renderQuestion();
}

function renderQuestion() {
  const q = quizData[currentQuestionIndex];
  
  // Update UI Text
  ui.questionText.textContent = q.question;
  ui.progressText.textContent = `Question ${currentQuestionIndex + 1} / ${quizData.length}`;
  
  // Update Progress Bar
  const progressPercent = ((currentQuestionIndex) / quizData.length) * 100;
  ui.progressBar.style.width = `${progressPercent}%`;

  // Handle Prev Button (Only allow going back to immediate previous)
  if (currentQuestionIndex > 0) {
    ui.prevBtn.classList.remove('hidden');
    ui.prevBtn.disabled = false;
  } else {
    ui.prevBtn.classList.add('hidden');
  }

  // Render Options (Shuffled)
  ui.optionsGrid.innerHTML = '';
  const shuffledOptions = shuffleArray(q.options);

  shuffledOptions.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-card';
    btn.textContent = opt.text;
    
    // Check if previously selected (for visual feedback when going back)
    if (userAnswers[currentQuestionIndex] === opt.value) {
      btn.classList.add('selected');
    }

    btn.onclick = () => handleOptionSelect(opt.value, btn);
    ui.optionsGrid.appendChild(btn);
  });
}

function handleOptionSelect(value, btnElement) {
  // Visual feedback
  const allBtns = document.querySelectorAll('.option-card');
  allBtns.forEach(b => b.classList.remove('selected'));
  btnElement.classList.add('selected');

  // Save answer
  userAnswers[currentQuestionIndex] = value;

  // Auto-advance delay
  setTimeout(() => {
    if (currentQuestionIndex < quizData.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      calculateAndShowResults();
    }
  }, 300); // 300ms delay for better UX
}

function goToPrevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

// ... (Result Calculation & Chart.js logic remains the same, ensure to update the final calculate function)
// Copy the calculateAndShowResults function from previous script or prompt Copilot to generate it based on instructions.js
function calculateAndShowResults() {
    views.quiz.classList.add('hidden');
    views.result.classList.remove('hidden');
    
    // 1. Count Scores
    let counts = [0, 0, 0, 0];
    userAnswers.forEach(val => {
        if (val !== null) counts[val]++;
    });

    // 2. Calculate Percentages
    const total = userAnswers.length;
    const percentages = counts.map(c => Math.round((c / total) * 100));

    // 3. Determine Wealth Profile (Vector Calculation)
    // Spring(0)=Up, Summer(1)=Right, Fall(2)=Down, Winter(3)=Left
    const x = counts[1] - counts[3]; // Summer - Winter
    const y = counts[0] - counts[2]; // Spring - Fall
    
    // Calculate angle (0 deg is Right/Summer, counter-clockwise)
    let angle = Math.atan2(y, x) * (180 / Math.PI);
    if (angle < 0) angle += 360;

    // Map angle to 8 profiles (each 45 degrees)
    let profileKey = 'creator'; // Default
    
    if (angle >= 67.5 && angle < 112.5) profileKey = 'creator';       // 90 ± 22.5
    else if (angle >= 22.5 && angle < 67.5) profileKey = 'star';      // 45 ± 22.5
    else if (angle >= 337.5 || angle < 22.5) profileKey = 'supporter';// 0 ± 22.5
    else if (angle >= 292.5 && angle < 337.5) profileKey = 'deal_maker'; // 315 ± 22.5
    else if (angle >= 247.5 && angle < 292.5) profileKey = 'trader';  // 270 ± 22.5
    else if (angle >= 202.5 && angle < 247.5) profileKey = 'accumulator'; // 225 ± 22.5
    else if (angle >= 157.5 && angle < 202.5) profileKey = 'lord';    // 180 ± 22.5
    else if (angle >= 112.5 && angle < 157.5) profileKey = 'mechanic';// 135 ± 22.5

    // Center point case
    if (x === 0 && y === 0) profileKey = 'creator';

    const resultProfile = profiles[profileKey];

    // 4. Update UI Text
    document.getElementById('result-role-name').textContent = resultProfile.name;
    document.getElementById('result-role-desc').textContent = resultProfile.desc;

    // 5. Render Energy Bars
    const energyContainer = document.getElementById('energy-bars');
    energyContainer.innerHTML = '';
    const colors = ['#10B981', '#EF4444', '#F59E0B', '#3B82F6']; // Green, Red, Yellow, Blue
    
    energyTypes.forEach((type, index) => {
      const p = percentages[index];
      const barHtml = `
        <div class="energy-item">
          <div class="energy-label">
            <span>${type.name}</span>
            <span>${p}%</span>
          </div>
          <div class="energy-track">
            <div class="energy-fill" style="width: ${p}%; background-color: ${colors[index]}"></div>
          </div>
        </div>
      `;
      energyContainer.innerHTML += barHtml;
    });

    // 6. Render Career List
    const careerList = document.getElementById('result-careers');
    careerList.innerHTML = resultProfile.careers.map(c => `<li>${c}</li>`).join('');

    // 7. Render Chart
    const ctx = document.getElementById('radarChart').getContext('2d');
    if (myRadarChart) myRadarChart.destroy();

    myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: energyTypes.map(t => t.name),
            datasets: [{
                label: '能量分布',
                data: counts,
                backgroundColor: 'rgba(79, 70, 229, 0.2)',
                borderColor: 'rgba(79, 70, 229, 1)',
                pointBackgroundColor: 'rgba(79, 70, 229, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    suggestedMax: Math.max(...counts) + 1,
                    ticks: { stepSize: 2, display: false }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}