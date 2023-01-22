fetch("https://talentmatchingbackend.onrender.com/api/v1/skills").then((response) => response.json()).then((skills) => {
    createElements(skills, "checkboxes"); // Container-ID als Parameter übergeben
    createElements2(skills, "checkboxes_project"); // Container-ID als Parameter übergeben
});

// Skills aus der DB ziehen und in Buttons umwandeln (für Anmelden-Subseite)
async function createElements(skills, containerId) {
    var checkboxes = document.getElementById(containerId);

    for (var i = 0; i < skills.length; i++) {

        var div = document.createElement("div")
        var input = document.createElement("input");
        // Attribute & Inhalt zu dem Input-Feld geben
        input.setAttribute("name", "skills");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", containerId + "_" + i);
        input.value = skills[i].skill_id;

        // Attribute & Inhalt zu dem Label-Feld geben
        var label = document.createElement("label");
        label.setAttribute("class", "checkbox-hide");
        label.setAttribute("for", containerId + "_" + i);
        label.innerHTML = skills[i].name; // Nimm i-tes Element von dem Array

        div.append(input, label);
        checkboxes.appendChild(div);
    }
}

// Skills aus der DB ziehen und in Buttons umwandeln (für Projekt-Starten-Subseite)
async function createElements2(skills, containerId) {
    var checkboxes_project = document.getElementById(containerId);

    for (var i = 0; i < skills.length; i++) {

        var div = document.createElement("div")
        var input = document.createElement("input");
        // Attribute & Inhalt zu dem Input-Feld geben
        input.setAttribute("name", "skills");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", containerId + "_" + i);
        input.value = skills[i].skill_id;

        // Attribute & Inhalt zu dem Label-Feld geben
        var label = document.createElement("label");
        label.setAttribute("class", "checkbox-hide_project");
        label.setAttribute("for", containerId + "_" + i);
        label.innerHTML = skills[i].name; // Nimm i-tes Element von dem Array

        div.append(input, label);
        checkboxes_project.appendChild(div);
    }
}
