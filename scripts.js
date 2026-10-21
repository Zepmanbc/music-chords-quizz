// DATA
const chords = [
  {
    chord: "C△7",
    notes: ["C", "E", "G", "B"],
  },
  {
    chord: "Cm7",
    notes: ["C", "E♭", "G", "B♭"],
  },
  {
    chord: "C7",
    notes: ["C", "E", "G", "B♭"],
  },
  {
    chord: "C⌀",
    notes: ["C", "E♭", "G♭", "B♭"],
  },
  {
    chord: "A△7",
    notes: ["A", "C#", "E", "G#"],
  },
  {
    chord: "Am7",
    notes: ["A", "C", "E", "G"],
  },
  {
    chord: "A7",
    notes: ["A", "C#", "E", "G"],
  },
  {
    chord: "A⌀",
    notes: ["A", "C", "E♭", "G"],
  },
  {
    chord: "B△7",
    notes: ["B", "D#", "F#", "A#"],
  },
  {
    chord: "Bm7",
    notes: ["B", "D", "F#", "A"],
  },
  {
    chord: "B7",
    notes: ["B", "D#", "F#", "A"],
  },
  {
    chord: "B⌀",
    notes: ["B", "D", "F", "A"],
  },
  {
    chord: "D△7",
    notes: ["D", "F#", "A", "C#"],
  },
  {
    chord: "Dm7",
    notes: ["D", "F", "A", "C"],
  },
  {
    chord: "D7",
    notes: ["D", "F#", "A", "C"],
  },
  {
    chord: "D⌀",
    notes: ["D", "F", "A♭", "C"],
  },
  {
    chord: "E△7",
    notes: ["E", "G#", "B", "D#"],
  },
  {
    chord: "Em7",
    notes: ["E", "G", "B", "D"],
  },
  {
    chord: "E7",
    notes: ["E", "G#", "B", "D"],
  },
  {
    chord: "E⌀",
    notes: ["E", "G", "B♭", "D"],
  },
  {
    chord: "F△7",
    notes: ["F", "A", "C", "E"],
  },
  {
    chord: "Fm7",
    notes: ["F", "A♭", "C", "E♭"],
  },
  {
    chord: "F7",
    notes: ["F", "A", "C", "E♭"],
  },
  {
    chord: "F⌀",
    notes: ["F", "A♭", "C♭", "E♭"],
  },
  {
    chord: "G△7",
    notes: ["G", "B", "D", "F#"],
  },
  {
    chord: "Gm7",
    notes: ["G", "B♭", "D", "F"],
  },
  {
    chord: "G7",
    notes: ["G", "B", "D", "F"],
  },
  {
    chord: "G⌀",
    notes: ["G", "B♭", "D♭", "F"],
  },
  {
    chord: "A♭△7",
    notes: ["A♭", "C", "E♭", "G"],
  },
  {
    chord: "A♭m7",
    notes: ["A♭", "C♭", "E♭", "G♭"],
  },
  {
    chord: "A♭7",
    notes: ["A♭", "C", "E♭", "G♭"],
  },
  {
    chord: "B♭△7",
    notes: ["B♭", "D", "F", "A"],
  },
  {
    chord: "B♭m7",
    notes: ["B♭", "D♭", "F", "A♭"],
  },
  {
    chord: "B♭7",
    notes: ["B♭", "D", "F", "A♭"],
  },
  {
    chord: "B♭⌀",
    notes: ["B♭", "D♭", "F♭", "A♭"],
  },
  {
    chord: "E♭△7",
    notes: ["E♭", "G", "B♭", "D"],
  },
  {
    chord: "E♭m7",
    notes: ["E♭", "G♭", "B♭", "D♭"],
  },
  {
    chord: "E♭7",
    notes: ["E♭", "G", "B♭", "D♭"],
  },
  {
    chord: "D♭△7",
    notes: ["D♭", "F", "A♭", "C"],
  },
  {
    chord: "D♭m7",
    notes: ["D♭", "F♭", "A♭", "C♭"],
  },
  {
    chord: "D♭7",
    notes: ["D♭", "F", "A♭", "C♭"],
  },
  {
    chord: "G♭△7",
    notes: ["G♭", "B♭", "D♭", "F"],
  },
  {
    chord: "G♭m7",
    notes: ["G♭", "A", "D♭", "F♭"],
  },
  {
    chord: "G♭7",
    notes: ["G♭", "B♭", "D♭", "F♭"],
  },
  {
    chord: "G♭⌀",
    notes: ["G♭", "A", "C", "F♭"],
  },
  {
    chord: "C#△7",
    notes: ["C#", "E#", "G#", "B#"],
  },
  {
    chord: "C#m7",
    notes: ["C#", "E", "G#", "B"],
  },
  {
    chord: "C#7",
    notes: ["C#", "E#", "G#", "B"],
  },
  {
    chord: "C#⌀",
    notes: ["C#", "E", "G", "B"],
  },
  {
    chord: "F#△7",
    notes: ["F#", "A#", "C#", "E#"],
  },
  {
    chord: "F#m7",
    notes: ["F#", "A", "C#", "E"],
  },
  {
    chord: "F#7",
    notes: ["F#", "A#", "C#", "E"],
  },
  {
    chord: "F#⌀",
    notes: ["F#", "A", "C", "E"],
  },
  {
    chord: "G#m7",
    notes: ["G#", "B", "D#", "F#"],
  },
  {
    chord: "G#7",
    notes: ["G#", "B#", "D#", "F#"],
  },
  {
    chord: "G#⌀",
    notes: ["G#", "B", "D", "F#"],
  },
];

// STATE
let current;
let selectedNotes = [];
let selectedRel = null;
let selectedAlt = null;
let selectedAltType = null;

let correct = 0;
let wrong = 0;

// UI INIT
function nextQuestion() {
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
    ["A♭", "B♭", "C♭", "D♭", "E♭", "F♭", "G♭"],
    ["A", "B", "C", "D", "E", "F", "G"],
    ["A#", "B#", "C#", "D#", "E#", "F#", "G#"],
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
function validate() {
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

// START
nextQuestion();
