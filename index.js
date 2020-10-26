let cardN = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

let cardT = ["hearts", "spades", "clubs", "diamond"];

let r = (arr) => Math.floor(Math.random() * arr.length);

function cardSort(arr) {
  return arr.map((e) =>
    e[0] === 11
      ? (e = ["J", e[1]])
      : e[0] === 12
      ? (e = ["Q", e[1]])
      : e[0] === 13
      ? (e = ["K", e[1]])
      : e[0] === 14
      ? (e = ["A", e[1]])
      : e
  );
}

function numberSort(n) {
  switch (n) {
    case 11:
      return "J";
    case 12:
      return "Q";
    case 13:
      return "K";
    case 14:
      return "A";
    default:
      return n;
  }
}
//  JDOM

let drawButton = document.querySelector(".draw");
let container = document.querySelector(".display");


var newArr = [];
let display;

drawButton.addEventListener("click", (e) => {
  let sorting = document.querySelectorAll(".rowDiv")
  for (let p of sorting) {
    p.innerHTML = ""
  }
  container.innerHTML = "";

  
  let amount = document.getElementById("input").value;
  newArr = [];

  if (parseInt(amount) > 30) {
    alert("Number is to high");
  } else {
    for (let i = 1; i <= parseInt(amount); i++) {
      let cardNumber = cardN[r(cardN)];
      let cardType = cardT[r(cardT)];
      newArr.push([cardNumber, cardType]);
    }
  }

  display = cardSort(newArr);

  for (let j = 0; j < display.length; j++) {
    let div = document.createElement("div");
    

    div.innerHTML +=
      '<div class="card mx-1"><div class="row top"><div class="col-md-12 d-flex justify-content-start icon1"><span class="icon ' +
      display[j][1] +
      '">&' +
      display[j][1] +
      ";</span><div></div></div></div>" +
      '<div class="row middle"><div class="col-md-12 d-flex justify-content-center align-items-center numberP"><p class="number ' +
      display[j][1] +
      '">' +
      display[j][0] +
      "</p></div></div>" +
      '<div class="row bot"><div class="col-md-12 d-flex justify-content-end align-items-end icon2"><span class="icon ' +
      display[j][1] +
      '">&' +
      display[j][1] +
      ";</span></div></div></div>";

    container.appendChild(div);
  }
});

let fluid = document.querySelector(".container-fluid");

let sortButton = document.querySelector(".sort");

let logy = document.querySelector(".logy");

let bubble = (arr) => {
  let wall = arr.length - 1;
  let counter = 0;
  while (wall > 0) {
    let i = 0;

    while (i < wall) {
      if (arr[i][0] > arr[i + 1][0]) {
        let aux = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = aux;
      }
      let newDiv = document.createElement("div");
      newDiv.classList.add("rowDiv")
      newDiv.classList.add("row");

      let spam = document.createElement("span");
      spam.classList.add("iteracion");
      spam.innerHTML = "<p>" + counter + "</p>";

      newDiv.appendChild(spam);

      for (let e of arr) {
        newDiv.innerHTML +=
          '<div class="card mx-1 my-2"><div class="row top"><div class="col-md-12 d-flex justify-content-start icon1"><span class="icon ' +
          e[1] +
          '">&' +
          e[1] +
          ";</span><div></div></div></div>" +
          '<div class="row middle"><div class="col-md-12 d-flex justify-content-center align-items-center numberP"><p class="number ' +
          e[1] +
          '">' +
          numberSort(e[0]) +
          "</p></div></div>" +
          '<div class="row bot"><div class="col-md-12 d-flex justify-content-end align-items-end icon2"><span class="icon ' +
          e[1] +
          '">&' +
          e[1] +
          ";</span></div></div>";

          fluid.appendChild(newDiv);
      }
      i++;
      counter++;
    }
    wall--;
  }
};

sortButton.addEventListener("click", (e) => {
  bubble(newArr);
});
