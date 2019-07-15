const synth = new Tone.Synth();
synth.oscillator.type = "sine";
synth.toMaster();
let trigger = false;

const btns = Array.from(document.getElementsByClassName("btn"));
const buttons = document.getElementById("buttons")
buttons.addEventListener("click", e => {

  if(e.target.classList.value === "btn") {
    btns.forEach(btn => {
      btn.classList.remove("activeBtn")
    })
    e.target.classList.add("activeBtn")
  }
})

const pianoKeys = document.getElementById("pianoKeys");


let keys = document.getElementsByClassName("mouse");
for (let item of keys) {
  item.addEventListener("mouseenter", e => {
    e.preventDefault();
    if (trigger) {
      e.target.classList.toggle("active");
      synth.triggerAttack(e.target.dataset.note);
      addOutput(e.target.dataset.note);
    }
  });
  item.addEventListener("mouseleave", e => {
    if (trigger) {
      e.target.classList.toggle("active");
    }
  });
}

pianoKeys.addEventListener("mousedown", e => {
  trigger = true;
  e.target.classList.toggle("active");
  synth.triggerAttack(e.target.dataset.note);
  addOutput(e.target.dataset.note);
});

pianoKeys.addEventListener("mouseup", e => {
  trigger = false;
  e.target.classList.toggle("active");
  synth.triggerRelease();
});

document.addEventListener("keydown", e => {
  if(e.repeat) {
    return;
  }
  switch (e.key) {
    case "a":
    case "w":
    case "s":
    case "d":
    case "r":
    case "f":
    case "t":
    case "g":
    case "h":
    case "u":
    case "j":
    case "i":
    case "k":
    case "o":
    case "l":
    case ";":
    case "[":
    case "'":
      document.getElementById(e.key).classList.toggle("active");
  }

  switch (e.key) {
    case "a":
      addOutput("A3");
      return synth.triggerAttack("A3");
    case "w":
      addOutput("A#3");
      return synth.triggerAttack("A#3");
    case "s":
      addOutput("B3");
      return synth.triggerAttack("B3");
    case "d":
      addOutput("C4");
      return synth.triggerAttack("C4");
    case "r":
      addOutput("C#4");
      return synth.triggerAttack("C#4");
    case "f":
      addOutput("D4");
      return synth.triggerAttack("D4");
    case "t":
      addOutput("D#4");
      return synth.triggerAttack("D#4");
    case "g":
      addOutput("E4");
      return synth.triggerAttack("E4");
    case "h":
      addOutput("F4");
      return synth.triggerAttack("F4");
    case "u":
      addOutput("F#4");
      return synth.triggerAttack("F#4");
    case "j":
      addOutput("G4");
      return synth.triggerAttack("G4");
    case "i":
      addOutput("G#4");
      return synth.triggerAttack("G#4");
    case "k":
      addOutput("A4");
      return synth.triggerAttack("A4");
    case "o":
      addOutput("A#4");
      return synth.triggerAttack("A#4");
    case "l":
      addOutput("B4");
      return synth.triggerAttack("B4");
    case ";":
      addOutput("C5");
      return synth.triggerAttack("C5");
    case "[":
      addOutput("C#5");
      return synth.triggerAttack("C#5");
    case "'":
      addOutput("D5");
      return synth.triggerAttack("D5");
    default:
      return;
  }
});

document.addEventListener("keyup", e => {
  switch (e.key) {
    case "a":
    case "w":
    case "s":
    case "d":
    case "r":
    case "f":
    case "t":
    case "g":
    case "h":
    case "u":
    case "j":
    case "i":
    case "k":
    case "o":
    case "l":
    case ";":
    case "[":
    case "'":
      document.getElementById(e.key).classList.toggle("active");
      synth.triggerRelease();
  }
});

document.querySelector(".button-group").addEventListener("click", e => {
  switch (e.target.id) {
    case "sine":
      return (synth.oscillator.type = "sine");
    case "square":
      return (synth.oscillator.type = "square");
    case "triangle":
      return (synth.oscillator.type = "triangle");
    case "sawtooth":
      return (synth.oscillator.type = "sawtooth");
  }
});

function addOutput(...output_data) {
  let div = document.getElementById("gen-output");
  div.innerHTML += output_data + ",";
}

function eraseText() {
  $("#gen-output").html("");
}