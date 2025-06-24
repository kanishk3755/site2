const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correct: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats"
    ],
    correct: "Cascading Style Sheets"
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "None of the above"],
    correct: "1995"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "HyperText Markup Language",
      "HyperText Marketing Language",
      "Hyper Transfer Markup Language"
    ],
    correct: "HyperText Markup Language"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Mozilla", "Netscape", "Microsoft", "Oracle"],
    correct: "Netscape"
  },
  {
    question: "Which tag is used to link a CSS file in HTML?",
    options: ["<css>", "<script>", "<link>", "<style>"],
    correct: "<link>"
  },
  {
    question: "Which keyword is used to define a constant in JavaScript?",
    options: ["var", "const", "let", "static"],
    correct: "const"
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const scoreEl = document.getElementById("score");

  scoreEl.innerText = "";

  const q = quizData[currentQuestion];
  questionEl.innerText = q.question;

  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.onclick = () => {
      if (option === q.correct) {
        score++;
      }
      document.querySelectorAll("#options button").forEach(btn => {
        btn.disabled = true;
        if (btn.innerText === q.correct) {
          btn.style.backgroundColor = "green";
        } else {
          btn.style.backgroundColor = "red";
        }
      });
    };
    optionsEl.appendChild(button);
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    document.getElementById("quiz").innerHTML = `
      <h2>Quiz Finished</h2>
      <p>Your Score: ${score} / ${quizData.length}</p>
    `;
  }
}

window.onload = showQuestion;
