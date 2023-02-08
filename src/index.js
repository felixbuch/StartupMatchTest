document.getElementById("footer").innerHTML = `
<!-- <h4>Das ist ein Platzhalter für spätere Anpassungen</h4> -->
`;

document.querySelector("#register").addEventListener("click", function (event) {
  event.target.classList.add("btn-active");
  event.target.classList.remove("btn-inactive");
  document.getElementById("search").classList.add("btn-inactive");
  document.getElementById("search").classList.remove("btn-active");
  document.getElementById("register-skill").style.display = "flex";
  document.getElementById("search-skill").style.display = "none";
});

document.querySelector("#search").addEventListener("click", function (event) {
  event.target.classList.add("btn-active");
  event.target.classList.remove("btn-inactive");
  document.getElementById("register").classList.add("btn-inactive");
  document.getElementById("register").classList.remove("btn-active");
  document.getElementById("search-skill").style.display = "flex";
  document.getElementById("register-skill").style.display = "none";
});

const registerSkill = (event) => {
  event.preventDefault();
  console.log("submitted");
};

// Alert anzeigen, dass das Submitten geklappt hat. Danach wird die Seite neu geladen.

const notifyUser = () => {
  alert("Deine Einträge wurden erfolgreich der Datenbank hinzugefügt.");
  location.reload();
};

// Faklutaets-Buttons die Unterbuttons anzeigen lassen 

function extendButtons(elementid) {
  var buttonDetect = document.getElementById(elementid);
  if (buttonDetect.style.display === "none") {
    buttonDetect.style.display = "flex";
  } else {
    buttonDetect.style.display = "none";
  }
}