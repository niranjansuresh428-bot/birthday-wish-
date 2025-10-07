document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("open-button");
    const initialDialog = document.getElementById("initial-dialog");
    const mainContent = document.getElementById("main-content");
    const readMoreButton = document.getElementById("read-more-button");
    const longMessageDialog = document.getElementById("long-message-dialog");
    const closeMessageButton = document.getElementById("close-message-button");
    const birthdaySong = document.getElementById("birthday-song");

    // When the user clicks "Open"
    openButton.addEventListener("click", function () {
        initialDialog.classList.add("hidden");
        mainContent.classList.remove("hidden");
        birthdaySong.play();
    });

    // When the user clicks "Read More"
    readMoreButton.addEventListener("click", function () {
        longMessageDialog.classList.remove("hidden");
        birthdaySong.play();
    });

    // When the user clicks "Close" on the long message
    closeMessageButton.addEventListener("click", function () {
        longMessageDialog.classList.add("hidden");
    });
});
