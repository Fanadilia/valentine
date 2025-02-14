document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect (Loops Continuously)
    const message = "You are my heart, my soul, my everything! 💖";
    let index = 0;

    function typeMessage() {
        if (index < message.length) {
            document.getElementById("typing-text").textContent += message.charAt(index);
            index++;
            setTimeout(typeMessage, 100);
        } else {
            setTimeout(() => {
                document.getElementById("typing-text").textContent = ""; // Clear text
                index = 0; // Reset index
                typeMessage(); // Restart typing effect
            }, 1000); // Pause before restarting
        }
    }
    typeMessage();
});
document.addEventListener("DOMContentLoaded", function () {
    // Floating Hearts Animation
    const heartEmojis = ["💓", "💕", "❣", "💗",
        "🩷","💘","❤‍🔥","💯","💋"
    ]; // Array of heart emojis

    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)]; // Random heart emoji
        document.body.appendChild(heart);

        heart.style.left = Math.random() * 100 + "vw"; // Random horizontal position
        heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random animation duration

        setTimeout(() => {
            heart.remove(); // Remove heart after animation ends
        }, 5000);
    }, 800); // Create a new heart every 0.8 seconds
});

document.addEventListener("DOMContentLoaded", function () {
    const poems = [
        "Roses are red, violets are blue,\nMy heart beats only for you. 💖",
        "In your eyes, I see the stars,\nTogether, forever, no matter how far. 💕",
        "Your love is like a gentle breeze,\nBringing warmth and endless peace. ❣",
        "Through every storm, through every tide,\nI’ll always stand right by your side. 💗"
    ];

    window.generatePoem = function () {
        const poemDisplay = document.getElementById("poem-display");
        const randomPoem = poems[Math.floor(Math.random() * poems.length)];
        poemDisplay.textContent = randomPoem;
    };
});