document.addEventListener('DOMContentLoaded', () => {
    const initialDialog = document.getElementById('initial-dialog');
    const mainContent = document.getElementById('main-content');
    const longMessageDialog = document.getElementById('long-message-dialog');
    
    const openButton = document.getElementById('open-button');
    const readMoreButton = document.getElementById('read-more-button');
    const closeMessageButton = document.getElementById('close-message-button');
    
    const birthdaySong = document.getElementById('birthday-song');

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
