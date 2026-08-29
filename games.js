const games = [
    {
        name: "Example Game",
        letter: "E",
        url: "https://example.com"
    },
    {
        name: "Another Game",
        letter: "A",
        url: "https://example.com"
    }
];

function loadGames() {
    const container = document.getElementById("sections-container");

    if (!container) return;

    container.innerHTML = "";

    const grouped = {};

    games.forEach(game => {
        const letter = game.letter.toUpperCase();

        if (!grouped[letter]) {
            grouped[letter] = [];
        }

        grouped[letter].push(game);
    });

    Object.keys(grouped)
        .sort()
        .forEach(letter => {

            const section = document.createElement("div");
            section.className = "letter-section";

            section.innerHTML = `
                <div class="letter-header">${letter}</div>
                <div class="buttons-container"></div>
            `;

            const buttons = section.querySelector(".buttons-container");

            grouped[letter].forEach(game => {

                const button = document.createElement("input");

                button.type = "button";
                button.value = game.name;

                button.onclick = () => {
                    window.open(game.url, "_blank");
                };

                buttons.appendChild(button);
            });

            container.appendChild(section);
        });
}

document.addEventListener("DOMContentLoaded", loadGames);
