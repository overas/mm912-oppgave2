let rndTall = Math.floor(Math.random() * 100) + 1;

function myFunction() {
  let x = document.getElementById("numb").value;
  let text;

  if (x == rndTall) {
    text =
      "<li>Du gjettet " +
      x +
      ' det er riktig <img src="icecream.png" width=20"></li>';
  } else if (x < rndTall) {
    text = "<li>Du gjettet " + x + " det for lavt</li>";
  } else {
    text = "<li>Du gjettet " + x + " det for høyt</li>";
  }

  // document.getElementById("svar").innerHTML = text;
  document.getElementById("svar").insertAdjacentHTML("afterbegin", text);
}