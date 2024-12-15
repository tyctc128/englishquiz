// 單字測驗資料
const QUIZ_LENGTH = 10;

// 取得隨機單字作為測驗題目
const quizData = getRandomVocabulary(QUIZ_LENGTH);

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft;

// DOM 元素
const wordElement = document.getElementById('word');
const optionsContainer = document.getElementById('options');
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');
const timerDiv = document.getElementById('timer');
const speakButton = document.getElementById('speak-btn');

// 語音合成設置
const speech = window.speechSynthesis;
const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    speech.speak(utterance);
};

// 發音按鈕事件
speakButton.onclick = () => {
    speak(quizData[currentQuestion].word);
};

// 開始計時器
function startTimer() {
    clearInterval(timer);
    timeLeft = 15;
    updateTimerDisplay();
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeout();
        }
    }, 1000);
}

// 更新計時器顯示
function updateTimerDisplay() {
    timerDiv.textContent = `剩餘時間: ${timeLeft} 秒`;
    if (timeLeft <= 5) {
        timerDiv.style.color = 'red';
    } else {
        timerDiv.style.color = '#666';
    }
}

// 處理超時
function handleTimeout() {
    showResult(false);
    setTimeout(nextQuestion, 2000);
}

// 載入題目
function loadQuestion() {
    const question = quizData[currentQuestion];
    wordElement.textContent = question.word;
    
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option;
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });

    resultDiv.style.display = 'none';
    updateScore();
    startTimer();
}

// 選擇答案
function selectOption(index) {
    clearInterval(timer);
    const correct = quizData[currentQuestion].correct === index;
    if (correct) {
        score++;
    }
    showResult(correct);
    setTimeout(nextQuestion, 2000);
}

// 顯示結果
function showResult(correct) {
    resultDiv.style.display = 'block';
    if (correct) {
        resultDiv.textContent = '答對了！ 🎉';
        resultDiv.className = 'result correct';
    } else {
        resultDiv.textContent = `答錯了！正確答案是：${quizData[currentQuestion].options[quizData[currentQuestion].correct]}`;
        resultDiv.className = 'result incorrect';
    }
    updateScore();
}

// 下一題
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
}

// 更新分數
function updateScore() {
    scoreDiv.textContent = `目前得分：${score}/${quizData.length}`;
}

// 顯示最終分數
function showFinalScore() {
    const percentage = (score / quizData.length) * 100;
    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.innerHTML = `
        <h2>測驗完成！</h2>
        <p>你的最終得分：${score}/${quizData.length} (${percentage}%)</p>
        <button onclick="restartQuiz()" class="option-button">再試一次</button>
        <p style="margin-top: 20px; color: #666;">
            提示：點擊單字旁的喇叭圖示可以聽發音！
        </p>
    `;
}

// 重新開始測驗
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    location.reload();
}

// 開始測驗
loadQuestion();
