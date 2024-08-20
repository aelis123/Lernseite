document.addEventListener("DOMContentLoaded", function() {
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

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
});
