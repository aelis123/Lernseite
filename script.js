document.addEventListener("DOMContentLoaded", function() {
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;
    const containers = document.querySelectorAll(".container, .osi-model"); // Alle Container und osi-models

    // Initialisierung des Dropdown-Menüs
    dropdownButtons.forEach(button => {
        button.addEventListener("click", function() {
            const dropdownContent = this.nextElementSibling;
            const isVisible = dropdownContent.style.display === "block";

            // Verstecke alle Dropdown-Inhalte
            document.querySelectorAll(".dropdown-content").forEach(content => {
                content.style.display = "none";
            });

            // Zeige oder verstecke den aktuellen Dropdown-Inhalt
            if (!isVisible) {
                dropdownContent.style.display = "block";
            }
        });
    });

    // Prüfen, ob ein Modus im Local Storage gespeichert ist
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        body.classList.add(savedTheme);
        updateButtonIcon(savedTheme);
        updateContainers(savedTheme); // Container auf gespeicherten Modus setzen
    }

    toggleButton.addEventListener("click", function () {
        let newTheme;
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            newTheme = "light-mode";
        } else {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            newTheme = "dark-mode";
        }
        localStorage.setItem("theme", newTheme);
        updateButtonIcon(newTheme);
        updateContainers(newTheme); // Container auf neuen Modus setzen
    });

    function updateButtonIcon(theme) {
        if (theme === "dark-mode") {
            toggleButton.textContent = "🌞"; // Sonne für Dark Mode
        } else {
            toggleButton.textContent = "🌙"; // Mond für Light Mode
        }
    }

    function updateContainers(theme) {
        containers.forEach(container => {
            if (theme === "dark-mode") {
                container.classList.remove("light-mode");
                container.classList.add("dark-mode");
            } else {
                container.classList.remove("dark-mode");
                container.classList.add("light-mode");
            }
        });
    }
});
// Modal-Elemente abrufen
var modal = document.getElementById("imgModal");
var modalImg = document.getElementById("imgPopup");
var captionText = document.getElementById("caption");

// Bei Klick auf ein Bild das Modal öffnen
var images = document.querySelectorAll('.popup-img');
images.forEach(function(image) {
    image.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

// Modal schließen
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}