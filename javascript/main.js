const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");
function setHand(hand, degree) {
  hand.style.transform = `rotate(${degree}deg)`;
};
function setDay() {
  const day = new Date().toLocaleDateString();
  document.getElementById("day").innerHTML = `Today Is ${day}`;
};
setInterval(() => {
  const date = new Date();
  setHand(hourHand, 30 * date.getHours());
  setHand(minuteHand, 6 * date.getMinutes());
  setHand(secondHand, 6 * date.getSeconds());
}, 1000);
setDay();
