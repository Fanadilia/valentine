document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect (Loops Continuously)
    const message = "My heart, My soul,My Bimv,My everything! 💖";
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