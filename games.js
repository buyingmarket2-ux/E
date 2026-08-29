const games = [
    {
        name: "Awesome Game",
        letter: "A",
        url: "https://example.com/game1"
    },

    {
        name: "Basketball Game",
        letter: "B",
        url: "https://example.com/game2"
    },

    {
        name: "Car Game",
        letter: "C",
        url: "https://example.com/game3"
    },

    {
        name: "Driving Game",
        letter: "D",
        url: "https://example.com/game4"
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
