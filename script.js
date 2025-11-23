// Energy type names mapping
const energyTypes = [
  { name: '發電機 (春)', fullName: 'Spring (Dynamo / 發電機)' },
  { name: '火焰 (夏)', fullName: 'Summer (Blaze / 火焰)' },
  { name: '節奏 (秋)', fullName: 'Fall (Tempo / 節奏)' },
  { name: '鋼鐵 (冬)', fullName: 'Winter (Steel / 鋼鐵)' }
];

// User answers storage
let userAnswers = [];

// Shuffle array function (Fisher-Yates shuffle)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Initialize quiz
function initQuiz() {
  const quizContainer = document.getElementById('quiz-container');
  const questionsDiv = document.getElementById('questions');
  
  questionsDiv.innerHTML = '';
  
  quizData.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-card';
    
    const questionTitle = document.createElement('h3');
    questionTitle.textContent = q.question;
    questionDiv.appendChild(questionTitle);
    
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';
    
    // Shuffle options for this question
    const shuffledOptions = shuffleArray(q.options);
    
    shuffledOptions.forEach((option, optionIndex) => {
      const label = document.createElement('label');
      label.className = 'option';
      
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = `question-${index}`;
      radio.value = option.value;
      
      const span = document.createElement('span');
      span.textContent = option.text;
      
      label.appendChild(radio);
      label.appendChild(span);
      optionsDiv.appendChild(label);
    });
    
    questionDiv.appendChild(optionsDiv);
    questionsDiv.appendChild(questionDiv);
  });
}

// Start quiz
function startQuiz() {
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block';
}

// Calculate results
function calculateResults() {
  // Collect answers
  userAnswers = [];
  let allAnswered = true;
  
  for (let i = 0; i < quizData.length; i++) {
    const selected = document.querySelector(`input[name="question-${i}"]:checked`);
    if (!selected) {
      allAnswered = false;
      break;
    }
    userAnswers.push(parseInt(selected.value));
  }
  
  if (!allAnswered) {
    alert('請回答所有問題！');
    return;
  }
  
  // Count each energy type
  const counts = [0, 0, 0, 0];
  userAnswers.forEach(answer => {
    counts[answer]++;
  });
  
  // Find main energy type
  const maxCount = Math.max(...counts);
  const mainTypeIndex = counts.indexOf(maxCount);
  
  // Show results
  showResults(counts, mainTypeIndex);
}

// Show results
function showResults(counts, mainTypeIndex) {
  document.getElementById('quiz-container').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  
  // Display main energy type
  const resultTitle = document.getElementById('result-title');
  resultTitle.textContent = `你的主能量：${energyTypes[mainTypeIndex].name}`;
  
  // Create radar chart
  createRadarChart(counts);
}

// Create radar chart using Chart.js
function createRadarChart(counts) {
  const ctx = document.getElementById('radarChart').getContext('2d');
  
  // Destroy existing chart if any
  if (window.myRadarChart) {
    window.myRadarChart.destroy();
  }
  
  window.myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: energyTypes.map(t => t.name),
      datasets: [{
        label: '能量分布',
        data: counts,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: {
            display: true
          },
          suggestedMin: 0,
          suggestedMax: Math.max(...counts) + 2,
          ticks: {
            stepSize: 1
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top'
        }
      }
    }
  });
}

// Retake quiz
function retakeQuiz() {
  location.reload();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initQuiz();
  
  // Add event listeners
  document.getElementById('start-btn').addEventListener('click', startQuiz);
  document.getElementById('submit-btn').addEventListener('click', calculateResults);
  document.getElementById('retake-btn').addEventListener('click', retakeQuiz);
});
