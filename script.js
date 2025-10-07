document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("open-button");
    const initialDialog = document.getElementById("initial-dialog");
    const mainContent = document.getElementById("main-content");
    const birthdaySong = document.getElementById("birthday-song");

    openButton.addEventListener("click", function () {
        initialDialog.classList.add("hidden");
        mainContent.classList.remove("hidden");
        birthdaySong.play();
    });
});

    // When the user clicks "Open"
    openButton.addEventListener('click', () => {
        initialDialog.classList.add('hidden');
        mainContent.classList.remove('hidden');
    });

    // When the user clicks "Read More"
    readMoreButton.addEventListener('click', () => {
        longMessageDialog.classList.remove('hidden');
        // Play the song
        birthdaySong.play();
    });

    // When the user clicks "Close" on the long message
    closeMessageButton.addEventListener('click', () => {
        longMessageDialog.classList.add('hidden');
    });
});
