document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchInput");

    if (!searchInput) return;

    searchInput.addEventListener("input", () => {

        const query = searchInput.value.toLowerCase().trim();

        const sections = document.querySelectorAll(".letter-section");

        sections.forEach(section => {

            const buttons = section.querySelectorAll(
                'input[type="button"]'
            );

            let visible = 0;

            buttons.forEach(button => {

                const name = button.value.toLowerCase();

                if (name.includes(query)) {
                    button.style.display = "";
                    visible++;
                } else {
                    button.style.display = "none";
                }
            });

            section.style.display = visible > 0 ? "" : "none";
        });
    });
});
