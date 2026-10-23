import { chords } from "./chords.js";

// STATE
let current;
let selectedNotes = [];
let selectedRel = null;
let selectedAlt = null;
let selectedAltType = null;

let correct = 0;
let wrong = 0;

// UI INIT
export function nextQuestion() {
  document.getElementById("result").innerText = "";

  selectedNotes = [];

  current = chords[Math.floor(Math.random() * chords.length)];

  document.getElementById("question").innerText = current.chord;

  console.log("QUESTION CHOISIE :", current);
  document.getElementById("btn-nextQuestion").style.display = "none";
  document.getElementById("btn-validate").style.display = "grid";
  renderOptions();
}

function renderOptions() {
  const notesGroups = [
    ["A𝄫", "B𝄫", "C𝄫", "D𝄫", "E𝄫", "F𝄫", "G𝄫"],
    ["A♭", "B♭", "C♭", "D♭", "E♭", "F♭", "G♭"],
    ["A", "B", "C", "D", "E", "F", "G"],
    ["A♯", "B♯", "C♯", "D♯", "E♯", "F♯", "G♯"],
    ["A𝄪", "B𝄪", "C𝄪", "D𝄪", "E𝄪", "F𝄪", "G𝄪"],
  ];

  // notes
  const notesDiv = document.getElementById("notes");
  notesDiv.innerHTML = "";

  notesGroups.forEach((group) => {
    const row = document.createElement("div");
    row.classList.add("notes-grid");

    group.forEach((n) => {
      let btn = document.createElement("button");
      btn.innerText = n;

      btn.onclick = () => {
        if (selectedNotes.includes(n)) {
          selectedNotes = selectedNotes.filter((x) => x !== n);
          btn.classList.remove("selected");
        } else {
          selectedNotes.push(n);
          btn.classList.add("selected");
        }
      };

      row.appendChild(btn);
    });

    notesDiv.appendChild(row);
  });
}

function highlight(parent, selectedBtn) {
  [...parent.children].forEach((btn) => btn.classList.remove("selected"));
  selectedBtn.classList.add("selected");
}

// VALIDATION
export function validate() {
  let ok = true;
  selectedNotes = [...new Set(selectedNotes)];

  // LOG des réponses utilisateur
  console.log("=== RÉPONSES UTILISATEUR ===");
  console.log("Relative :", selectedRel);
  console.log("Altérations (nombre) :", selectedAlt);
  console.log("Type altération :", selectedAltType);
  console.log("Notes :", selectedNotes);

  // LOG des bonnes réponses
  console.log("=== BONNES RÉPONSES ===");
  console.log("Relative :", current.rel);
  console.log("Altérations (nombre) :", current.alt);
  console.log("Type altération :", current.altType);
  console.log("Notes :", current.notes);

  // comparaison des notes (triées)
  if (!sameNotes(selectedNotes, current.notes)) {
    ok = false;
  }

  // Résultat
  showFeedback(ok);
  if (ok) {
    correct++;
    document.getElementById("result").innerText = "Correct !";
    document.getElementById("result").className = "correct";
    document.getElementById("btn-nextQuestion").style.display = "grid";
    document.getElementById("btn-validate").style.display = "none";
  } else {
    wrong++;
    document.getElementById("result").innerText = "Faux !";
    document.getElementById("result").className = "wrong";
  }

  document.getElementById("correct").innerText = correct;
  document.getElementById("wrong").innerText = wrong;
}

function sameNotes(a, b) {
  if (a.length !== b.length) return false;

  const sortedA = [...a].sort();
  const sortedB = [...b].sort();

  return sortedA.every((note, i) => note === sortedB[i]);
}

function showFeedback(success) {
  const feedback = document.createElement("div");

  feedback.className = "result-feedback";
  feedback.textContent = success ? "✅" : "❌";

  document.body.appendChild(feedback);

  setTimeout(() => {
    feedback.remove();
  }, 1000);
}

document
  .querySelector("#btn-validate button")
  .addEventListener("click", validate);
document
  .querySelector("#btn-nextQuestion button")
  .addEventListener("click", nextQuestion);

// START
nextQuestion();
