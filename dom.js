// let btnsPlus = Array.from(document.getElementsByClassName("plus"));
// let qtes = Array.from(document.getElementsByClassName("qte"));

// for (let btn of btnsPlus) {
//   btn.addEventListener("click", function () {
//     btn.previousElementSibling.innerHTML =
//       Number(btn.previousElementSibling.innerHTML) + 1;

//   });
// }

let btnsPlus = document.getElementsByClassName("plus");
let qtes = document.getElementsByClassName("qte");

for (let i = 0; i < qtes.length; i++) {
  btnsPlus[i].addEventListener("click", function () {
    qtes[i].innerHTML = +qtes[i].innerHTML + 1;
    sum();
  });
}

let btnsMoins = document.getElementsByClassName("moins");

for (let i = 0; i < qtes.length; i++) {
  btnsMoins[i].addEventListener("click", function () {
    if (qtes[i].innerHTML > 0) {
      qtes[i].innerHTML = +qtes[i].innerHTML - 1;
      sum();
    }
  });
}

let prices = document.getElementsByClassName("prix");

function sum() {
  let s = 0;

  for (let i = 0; i < prices.length; i++) {
    s = s + prices[i].innerHTML * qtes[i].innerHTML;
  }

  return (document.getElementsByClassName("totalprix")[0].innerHTML =
    "Shoopin bag total : $ " + s);
}

let btnsRemove = document.getElementsByClassName("fa-trash-alt");

for (let btnremove of btnsRemove) {
  btnremove.addEventListener("click", function () {
    btnremove.parentNode.remove();
  });
}

let hearts = document.querySelectorAll(".fa-heart");

for (let heart of hearts) {
  heart.addEventListener("click", function () {
    if (heart.style.color === "gray") {
      heart.style.color = "red";
    } else {
      heart.style.color = "gray";
    }
  });
}
