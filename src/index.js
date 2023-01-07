//import "./styles.css";

document.getElementById("app").innerHTML = `
<h4>Das ist ein Platzhalter für spätere Anpassung</h4>
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
/*
const body = {
  email: "",
  javascript: false,
  holzarbeit: false,
  webdesign: false,
  dreiddruck: false,
  textilarbeit: false,
  software: false,
  produktdesign: false,
  goldschmied: false,
};*/

const registerForm = document.querySelector("#register-skill-form");

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const body = {
    email: event.target[0].value,
    javascript: event.target[1].checked,
    holzarbeit: event.target[2].checked,
    webdesign: event.target[3].checked,
    dreiddruck: event.target[4].checked,
    textilarbeit: event.target[5].checked,
    software: event.target[6].checked,
    produktdesign: event.target[7].checked,
    goldschmied: event.target[8].checked,
  };

  console.log("das ist body" + body);
  console.log("das ist body stringified" + JSON.stringify(body));
  console.log(event.target[0].value);
  console.log(event.target[1].checked);
  /*console.log(event.target[2].checked);*/
  //console.log(event);
  try {
    //const body = { description };
    const response = await fetch("https://talentmatchingbackend.onrender.com/api/v1/talents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    //console.log(response);
    //console.log("das ist body" + JSON.stringify(body));
  } catch (err) {
    console.error(err.message);
  }
});

const searchSkill = () => {
  alert("Your Talent will be notified");
};