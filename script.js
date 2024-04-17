// Récupérartion des différents éléments
const hoursDisplay = document.querySelector(".hours");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
const format = document.querySelector(".format");

const displayDigitalClock = () => {
  // Création des variables
  let date = new Date();
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let timeFormat = "AM";

  // Mise en place des conditions ternaires
  timeFormat = hours >= 12 ? "PM" : "AM";
  hours = hours == 0 ? 12 : hours;
  hours = hours > 12 ? hours - 12 : hours;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Affichage des heures, minutes, secondes, du format et du jour
  hoursDisplay.textContent = hours;
  minutesDisplay.textContent = minutes;
  secondsDisplay.textContent = seconds;
  format.textContent = timeFormat;

  let todaysDay = document.querySelector(`.weekdays :nth-child(${day + 1})`);
  todaysDay.classList.add("active");
};

// Appel de la fonction displayDigitalClock toutes les secondes
setInterval(displayDigitalClock, 1000);
