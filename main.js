const randomLetters = () => {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "*",
    "+",
    "<",
    ">",
    "!",
    "&",
    "#",
    "%",
    "$",
    "@",
  ];
  return letters[Math.floor(Math.random() * letters.length)];
};

const rain = () => {
  const cloud = document.querySelector(".cloud");
  const div = document.createElement("div");
  let left = Math.floor(Math.random() * 290);
  let size = Math.random() * 1.5;
  let duration = Math.random() * 1;
  div.classList.add("letter");
  cloud.appendChild(div);
  div.textContent = randomLetters();
  div.style.left = left + 10+ "px";
  div.style.fontSize = 0.5 + size + "em";
  div.style.animationDuration = 1 + duration + "s";
  setTimeout(() => {
    div.remove();
  }, 2000);
};
setInterval(() => {
  rain();
}, 20);
