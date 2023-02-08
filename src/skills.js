fetch("https://talentmatchingbackend.onrender.com/api/v1/skills").then((response) => response.json()).then((skills) => {
    // Nimm die jeweilige Container-ID bezüglich der Fakultaet-ID -> Zuweisung unter richtige Div
    createElements(skills.filter(skill => skill.fakultaet_id == 1) , "register_gestaltung_checkboxes"); 
    createElements(skills.filter(skill => skill.fakultaet_id == 2) , "register_wirtschaft_checkboxes");
    createElements(skills.filter(skill => skill.fakultaet_id == 3) , "register_technik_checkboxes");
    createElements(skills.filter(skill => skill.fakultaet_id == 1) , "project_gestaltung_checkboxes"); 
    createElements(skills.filter(skill => skill.fakultaet_id == 2) , "project_wirtschaft_checkboxes");
    createElements(skills.filter(skill => skill.fakultaet_id == 3) , "project_technik_checkboxes");
});

// Skills aus der DB ziehen und in Buttons umwandeln (für Anmelden-Subseite)
async function createElements(skills, containerId) {
    var checkboxes = document.getElementById(containerId);

    for (var i = 0; i < skills.length; i++) {

        var div = document.createElement("div");
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
