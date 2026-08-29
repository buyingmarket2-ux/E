console.log("UGS game system loaded.");

function loadGameHTML(html) {

    const gameWindow = window.open("", "_blank");

    if (!gameWindow) {
        alert("Please allow pop-ups for this site.");
        return;
    }

    gameWindow.document.open();
    gameWindow.document.write(html);
    gameWindow.document.close();
}
