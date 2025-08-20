const quizData = [
  { question: "1. If A = 1, B = 2, ..., Z = 26, then what does CAT equal?", options: ["24", "27", "26", "29"], answer: "24" },
  { question: "2. Find the odd one out: 2, 4, 8, 16, 34", options: ["4", "8", "16", "34"], answer: "34" },
  { question: "3. Which number should come next? 2, 4, 8, 16, ?", options: ["24", "30", "32", "36"], answer: "32" },
  { question: "4. Find the missing number: 3, 9, 27, ?", options: ["54", "72", "81", "99"], answer: "81" },
  { question: "5. Arrange the words in dictionary order: Mango, Apple, Banana, Grapes", options: ["Mango, Apple, Banana, Grapes", "Apple, Banana, Grapes, Mango", "Banana, Apple, Grapes, Mango", "Grapes, Mango, Apple, Banana"], answer: "Apple, Banana, Grapes, Mango" },
  { question: "6. Which word does NOT belong? Dog, Cat, Cow, Car", options: ["Dog", "Cat", "Cow", "Car"], answer: "Car" },
  { question: "7. If 5 + 3 = 28, 9 + 1 = 810, then 8 + 6 = ?", options: ["48", "86", "214", "96"], answer: "214" },
  { question: "8. A clock shows 3:15. What is the angle between hour and minute hand?", options: ["0°", "7.5°", "15°", "30°"], answer: "7.5°" },
  { question: "9. Ravi is taller than Sita but shorter than Mohan. Who is the tallest?", options: ["Ravi", "Sita", "Mohan", "Cannot Say"], answer: "Mohan" },
  { question: "10. What comes next? J, F, M, A, M, ?", options: ["N", "J", "A", "S"], answer: "J" },
  { question: "11. If 'FLOWER' is coded as 'EKNVDS', then 'GARDEN' is coded as?", options: ["FZQCDM", "FZRDEN", "HZSEFO", "FZQDZM"], answer: "FZQCDM" },
  { question: "12. In a row of 30 students, Ravi is 12th from the left. What is his position from the right?", options: ["17", "18", "19", "20"], answer: "19" },
  { question: "13. If 1=5, 2=25, 3=125, then 4=?", options: ["250", "525", "625", "725"], answer: "625" },
  { question: "14. Find the next term: 7, 14, 28, 56, ?", options: ["84", "100", "112", "128"], answer: "112" },
  { question: "15. Find the odd one: Square, Triangle, Rectangle, Circle", options: ["Square", "Triangle", "Rectangle", "Circle"], answer: "Circle" },
  { question: "16. Pointing to a man, Ravi said, 'He is the son of my grandfather’s only son.' Who is the man?", options: ["Brother", "Uncle", "Cousin", "Father"], answer: "Brother" },
  { question: "17. Which comes next? 2, 6, 12, 20, ?", options: ["28", "30", "32", "36"], answer: "30" },
  { question: "18. A train 100m long crosses a man in 5s. Speed of train?", options: ["10 m/s", "20 m/s", "25 m/s", "30 m/s"], answer: "20 m/s" },
  { question: "19. Choose the missing letter: B, D, G, K, P, ?", options: ["T", "U", "V", "W"], answer: "V" },
  { question: "20. Which number is missing? 11, 14, 17, 20, ?", options: ["21", "22", "23", "24"], answer: "23" }
];

let current = 0, score = 0;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
const progressBar = document.getElementById("progress-bar");

function loadQuestion() {
  nextBtn.style.display = "none";
  optionsEl.innerHTML = "";
  questionEl.innerText = quizData[current].question;

  quizData[current].options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.classList.add("option");
    btn.onclick = () => checkAnswer(btn, option);
    optionsEl.appendChild(btn);
  });

  progressBar.style.width = ((current) / quizData.length) * 100 + "%";
}

function checkAnswer(btn, selected) {
  const correct = quizData[current].answer;
  const optionBtns = document.querySelectorAll(".option");

  optionBtns.forEach(b => b.disabled = true);

  if (selected === correct) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
    optionBtns.forEach(b => {
      if (b.innerText === correct) b.classList.add("correct");
    });
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  current++;
  if (current < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  questionEl.innerText = "🎉 Quiz Finished!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreEl.innerText = `Your Score: ${score} / ${quizData.length}`;
  progressBar.style.width = "100%";
}

loadQuestion();
