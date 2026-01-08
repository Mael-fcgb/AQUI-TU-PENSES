const questions = [
  { question: "Ton personnage est-il humain ?", oui: 1, non: "P15" },
  { question: "Ton personnage est-il un bébé ?", oui: 2, non: 3 },
  { question: "Ton personnage est-il debout ?", oui: "P3", non: "P15" },
  { question: "Ton personnage est-il une femme ?", oui: 4, non: "P16" },
  { question: "Ton personnage est-il seul (portrait) ?", oui: 5, non: 6 },
  { question: "Ton personnage regarde-t-il vers la gauche du tableau ?", oui: 7, non: "P13" },
  { question: "Ton personnage porte-t-il un vêtement rouge ?", oui: "P14", non: "P12" },
  { question: "Ton personnage est-il en extérieur ?", oui: 8, non: 9 },
  { question: "Ton personnage porte-t-il un vêtement orange ?", oui: "P11", non: 10 },
  { question: "Ton personnage est-il nu ?", oui: "P10", non: "P16" }
];

let currentQuestionIndex = 0;

function answer(response) {
  const currentQuestion = questions[currentQuestionIndex];
  const next = currentQuestion[response];

  if (typeof next === "string") {
    showResult(next);
  } else {
    currentQuestionIndex = next;
    showQuestion();
  }
}

function showQuestion() {
  const questionElement = document.getElementById("question");
  questionElement.textContent = questions[currentQuestionIndex].question;
}

function showResult(result) {
  document.getElementById("question-container").classList.add("hidden");
  document.getElementById("result-container").classList.remove("hidden");
  document.getElementById("result").textContent = `Personnage trouvé : ${result}`;
}

function restart() {
  currentQuestionIndex = 0;
  document.getElementById("result-container").classList.add("hidden");
  document.getElementById("question-container").classList.remove("hidden");
  showQuestion();
}

// Afficher la première question au chargement
showQuestion();