const questions = {
  Q1: {
    text: "Ton personnage est-il humain ?",
    oui: "Q4",
    non: "Q2"
  },
  Q2: {
    text: "Ton personnage est-il debout ?",
    oui: "P19",
    non: "Q3"
  },
  Q3: {
    text: "Ton personnage est-il en train de dormir ?",
    oui: "P20",
    non: "P21"
  },
  Q4: {
    text: "Ton personnage est-il un bébé ?",
    oui: "Q5",
    non: "Q6"
  },
  Q5: {
    text: "Ton personnage est-il debout ?",
    oui: "P3",
    non: "P15"
  },
  Q6: {
    text: "Ton personnage est-il une femme ?",
    oui: "Q7",
    non: "Q18"
  },
  Q7: {
    text: "Ton personnage est-il seul (portrait) ?",
    oui: "Q8",
    non: "Q10"
  },
  Q8: {
    text: "Ton personnage regarde-t-il vers la gauche du tableau ?",
    oui: "Q9",
    non: "P13"
  },
  Q9: {
    text: "Ton personnage porte-t-il un vêtement rouge ?",
    oui: "P14",
    non: "P12"
  },
  Q10: {
    text: "Ton personnage est-il en extérieur ?",
    oui: "Q11",
    non: "Q13"
  },
  Q11: {
    text: "Ton personnage porte-t-il un vêtement orange ?",
    oui: "P11",
    non: "Q12"
  },
  Q12: {
    text: "Ton personnage est-il nu ?",
    oui: "P10",
    non: "P16"
  },
  Q13: {
    text: "Ton personnage est-il debout ?",
    oui: "Q14",
    non: "Q16"
  },
  Q14: {
    text: "Peut-on voir les deux pieds de ton personnage ?",
    oui: "P17",
    non: "Q15"
  },
  Q15: {
    text: "Ton personnage est-il en train de chuchoter ?",
    oui: "P9",
    non: "P1"
  },
  Q16: {
    text: "Ton personnage porte-t-il un bandeau rouge ?",
    oui: "P8",
    non: "Q17"
  },
  Q17: {
    text: "Voit-on les deux yeux de ton personnage ?",
    oui: "P18",
    non: "P2"
  },
  Q18: {
    text: "Ton personnage est-il assis ?",
    oui: "Q19",
    non: "Q20"
  },
  Q19: {
    text: "Ton personnage porte-t-il des chaussures blanches ?",
    oui: "P4",
    non: "P7"
  },
  Q20: {
    text: "Ton personnage est-il nu ?",
    oui: "P10",
    non: "P6"
  }
};

let currentQuestion = "Q1";
let historyStack = [];

// Affiche une question
function showQuestion(id) {
  document.getElementById("question").textContent = questions[id].text;
  document.getElementById("question-container").classList.remove("hidden");
  document.getElementById("result-container").classList.add("hidden");
}

// Gestion des réponses
function answer(response) {
  historyStack.push(currentQuestion);

  const next = questions[currentQuestion][response];

  // Si c'est un résultat
  if (next.startsWith("P")) {
    showResult(next);
  } else {
    currentQuestion = next;
    showQuestion(currentQuestion);
  }
}

// Affiche le résultat final
function showResult(result) {
  document.getElementById("question-container").classList.add("hidden");
  document.getElementById("result-container").classList.remove("hidden");
  document.getElementById("result").textContent =
    "Ton personnage correspond à : " + result;
}

// Question précédente
function goBack() {
  if (historyStack.length > 0) {
    currentQuestion = historyStack.pop();
    showQuestion(currentQuestion);
  }
}

// Initialisation
showQuestion(currentQuestion);
