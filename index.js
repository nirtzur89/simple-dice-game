function random() {
  return Math.floor(Math.random()*6)+1;
}

var randomNumber1 = random()
var randomNumber2 = random()

  document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
  document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "player 1 won"
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "player 2 won"
  } else {
    document.querySelector("h1").textContent = "It's a draw"
  }
