function evaluatee() {
  let count = 0;
  for (let i = 1; i < 11; i++) {
    let name = "q" + i;
    const selected = document.querySelector(`input[name="${name}"]:checked`);
    if (selected) {
      if (selected.value === "true") {
        count++;
      }
    }
  }
  let score = (count / 10) * 100;

  if (score > 70) {
    alert("Congrats, You got " + score + "%");
    window.location.href = "../../index.html";
  } else {
    alert("You got " + score + "% \nTry again");
  }
}

function warning() {
  alert("To access the quizes, please access the Lessons first.");
  window.location.href = "./lessons/lessons.html";
}
