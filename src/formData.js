// FormData für die Form auf der Anmelden-Seite.

const skillForm = document.getElementById("register-skill-form");

skillForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(skillForm);

    if (!formData.has("skills")) {
        alert("Du musst mindestens einen Skill auswählen!")
        return
    }

    for (item of formData) {
        console.log(item[0], item[1]);
    }
    fetch("https://talentmatchingbackend.onrender.com/api/v1/users", {
        method: "POST",
        body: formData,
    })
        .then(res => res.json())
        .then(res => console.log(res))
        .then(() => notifyUser());

})


// FormData für die Form auf der Projekt-Starten-Seite.

const projectForm = document.getElementById("register-project-form");

projectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(projectForm);

    if (!formData.has("skills")) {
        alert("Du musst mindestens einen Skill auswählen!")
        return
    }

    for (item of formData) {
        console.log(item[0], item[1]);
    }
    fetch("https://talentmatchingbackend.onrender.com/api/v1/projects", {
        method: "POST",
        body: formData,
    })
        .then(res => res.json())
        .then(res => console.log(res))
        .then(() => notifyUser());

})