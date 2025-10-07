document.addEventListener('DOMContentLoaded', () => {
    // Get all the elements we need to control
    const initialDialog = document.getElementById('initial-dialog');
    const mainContent = document.getElementById('main-content');
    const longMessageDialog = document.getElementById('long-message-dialog');

    // Get all the buttons
    const openButton = document.getElementById('open-button');
    const readMoreButton = document.getElementById('read-more-button');
    const closeMessageButton = document.getElementById('close-message-button');

    // Get the audio player
    const birthdaySong = document.getElementById('birthday-song');

    // When the user clicks "Open"
    openButton.addEventListener('click', () => {
        initialDialog.classList.add('hidden');    // Hide the initial pop-up
        mainContent.classList.remove('hidden'); // Show the main content
    });

    // When the user clicks "Read More"
    readMoreButton.addEventListener('click', () => {
        longMessageDialog.classList.remove('hidden'); // Show the long message

        // Try to play the song. The .catch prevents errors if it fails.
        birthdaySong.play().catch(error => {
            console.log("Audio play was prevented by the browser.");
        });
    });

    // When the user clicks "Close" on the long message
    closeMessageButton.addEventListener('click', () => {
        longMessageDialog.classList.add('hidden'); // Hide the long message
    });
});
