const h1 = document.createElement("h1");
h1.textContent = "Content to be changed later";
document.querySelector("body").appendChild(h1);
//for fun
let n=0;
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        if (n === 0) {
            alert("You cannot escape me");
            n++;
        }
        else if (n === 1) {
            alert("Do you want to play a game?");
            n++;
        }
        else if (n === 2) {
            alert("No? Then you're stuck here!");
            n++;
        }
        else if (n >= 10) {
            alert("Fine! You're free to go!");
        }
        else {
            alert(`There's not point in trying to escape! You've already tried ${n} times! You're mine now!`);
            n++;
        }
    }
  });