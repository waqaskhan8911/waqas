document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('dynamic-text');
    const text = 'FRONTEND DEVELOPER';
    const typingSpeed = 100; // Speed of typing effect in milliseconds
    const erasingSpeed = 50; // Speed of erasing effect in milliseconds
    const pauseDuration = 1000; // Pause duration before restarting

    let index = 0;
    let isTyping = true;

    function type() {
        if (isTyping) {
            if (index < text.length) {
                textElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, typingSpeed);
            } else {
                isTyping = false;
                setTimeout(type, pauseDuration);
            }
        } else {
            if (index > 0) {
                textElement.textContent = textElement.textContent.slice(0, -1);
                index--;
                setTimeout(type, erasingSpeed);
            } else {
                isTyping = true;
                setTimeout(type, pauseDuration);
            }
        }
    }

    // Initialize the dynamic text with empty content
    textElement.textContent = '';
    // Start the typing effect
    setTimeout(type, 1500); // Delay to ensure the page is fully loaded
});
