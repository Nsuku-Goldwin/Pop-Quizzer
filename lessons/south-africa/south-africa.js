function evaluata() {
  let count = 0; // ✅ initialize count

  for (let i = 1; i < 11; i++) {
    let name = "q" + i;
    const selected = document.querySelector(`input[name="${name}"]:checked`);

    if (selected) {
      // ✅ only check value if something is selected
      if (selected.value) {
        count++;
      }
    }
  }

  let score = (count / 10) * 100; // ✅ better to keep score separate

  if (score > 70) {
    alert("Congrats, You got " + score + "%");
  } else {
    alert("You got " + score + "% \nTry again");
  }
}
