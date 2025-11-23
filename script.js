// Energy & Profile Data Mappings
const energyTypes = [
  { name: '發電機 (春)', fullName: 'Spring (Dynamo / 發電機)' },
  { name: '火焰 (夏)', fullName: 'Summer (Blaze / 火焰)' },
  { name: '節奏 (秋)', fullName: 'Fall (Tempo / 節奏)' },
  { name: '鋼鐵 (冬)', fullName: 'Winter (Steel / 鋼鐵)' }
];

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

    // 2. Render Chart
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
                    suggestedMin: 0,
                    suggestedMax: 10, // Approx max
                    ticks: { stepSize: 2 }
                }
            }
        }
    });

    // 3. Calculate Profile (Simplified logic for demo - ask Copilot for full Profile logic)
    const maxScore = Math.max(...counts);
    const mainEnergyIndex = counts.indexOf(maxScore);
    document.getElementById('result-title').textContent = `你的主能量：${energyTypes[mainEnergyIndex].name}`;
}