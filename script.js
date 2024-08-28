document.addEventListener("DOMContentLoaded", function() {
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;
    const containers = document.querySelectorAll(".container, .osi-model");

    // Initialisierung des Dropdown-Menüs
    dropdownButtons.forEach(button => {
        button.addEventListener("click", function() {
            const dropdownContent = this.nextElementSibling;
            const isVisible = dropdownContent.style.display === "block";

            document.querySelectorAll(".dropdown-content").forEach(content => {
                content.style.display = "none";
            });

            if (!isVisible) {
                dropdownContent.style.display = "block";
            }
        });
    });

    // Prüfen, ob ein Modus im Local Storage gespeichert ist
    const savedTheme = localStorage.getItem("theme") || "light-mode";
    body.classList.add(savedTheme);
    updateButtonIcon(savedTheme);
    updateContainers(savedTheme);

    toggleButton.addEventListener("click", function () {
        let newTheme = body.classList.contains("dark-mode") ? "light-mode" : "dark-mode";
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");
        localStorage.setItem("theme", newTheme);
        updateButtonIcon(newTheme);
        updateContainers(newTheme);
    });

    function updateButtonIcon(theme) {
        toggleButton.textContent = theme === "dark-mode" ? "🌞" : "🌙";
    }

    function updateContainers(theme) {
        containers.forEach(container => {
            container.classList.toggle("dark-mode", theme === "dark-mode");
            container.classList.toggle("light-mode", theme === "light-mode");
        });
    }

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
    var closeModal = document.querySelectorAll(".modal .close");
    closeModal.forEach(function(span) {
        span.onclick = function() {
            var currentModal = span.closest('.modal');
            currentModal.style.display = "none";
        }
    });

    // Modal für Risiko-Einschätzungs-Matrix
    var riskMatrixModal = document.getElementById('riskMatrixModal');
    var openModalBtn = document.querySelector('.open-modal-btn');

    openModalBtn.onclick = function () {
        riskMatrixModal.style.display = 'block';
    }

    window.onclick = function (event) {
        if (event.target === riskMatrixModal) {
            riskMatrixModal.style.display = 'none';
        }
    }
});
