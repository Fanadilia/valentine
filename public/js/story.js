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
    const paragraphs = document.querySelectorAll(".story p");
    let delay = 500;

    paragraphs.forEach((p, index) => {
        setTimeout(() => {
            p.style.opacity = "1";
        }, delay * (index + 1));
    });

    // 🎵 Play/Pause Music
    const audio = document.getElementById("loveSong");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const volumeSlider = document.getElementById("volumeSlider");

    audio.volume = 0.5; // Set initial volume

    playPauseBtn.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            playPauseBtn.innerHTML = "⏸ Pause";
        } else {
            audio.pause();
            playPauseBtn.innerHTML = "🎵 Play";
        }
    });

    // 🎚 Volume Control
    volumeSlider.addEventListener("input", function () {
        audio.volume = volumeSlider.value;
    });
});
