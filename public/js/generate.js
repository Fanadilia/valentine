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

        "Through every storm, through every tide,\nI’ll always stand right by your side. 💗",

"Endless Love💖   Like the moon that lights the midnight sky, Your love shines bright, I can’t deny. A gentle touch, a whispered word, In your embrace, my heart is stirred.\
Through storm and calm, through dark and light, You are my peace, my soul’s delight. Forevermore, my heart is true, For every beat, it beats for you.",

"A Love💕 Like Spring     Your love is like the bloom of May,Fresh and bright in every way. It melts the cold, it sparks the fire, A whisper soft, yet strong desire.\
With every petal, every hue, My world is warm because of you. Like springtime's kiss upon the air, You fill my life with love so rare.",

"Across the Stars🌟🌟   If love could span the endless night, I'd chase the stars to hold you tight. Across the galaxies so wide, I'd sail the cosmos by your side.\
No space too vast, no time too long, For in your love, I do belong. The universe may stretch and grow, But you’re the only home I know.",

"Whispers🗣️ of You     In every song, in every rhyme, Your voice echoes through all time. A fleeting breeze, a touch so light, You fill my dreams each silent night.\
No distance far, no road too wide, For love like ours will never hide.It lingers soft, like morning dew, Forever here—whispers of you.",

"My Heart’s Keeper🫀   You hold the key, my heart's embrace, A love so wild, yet full of grace. With every glance, with every smile, You make this life feel so worthwhile.\
No golden crown, no throne so high, Could match the stars within your eyes. For you, my love, I'll stand and fight, My heart is yours—both day and night.",

"The Essence of Love🥰   Love is a fire, burning bright, A guiding star in endless night. Beauty shines in hearts so true,\
A glow that time cannot subdue. Faith holds firm through storm and tide, With hands entwined, we walk with pride. Respect is woven, thread by thread,\
In every word we’ve ever said. Romance blossoms, soft yet strong, A melody, a timeless song. With every whisper, every glance,\
We dance within love’s sweet expanse. Bound by trust, embraced by fate, In your arms, life feels so great.Forevermore, just me and you, A love so deep, so pure, so true.",
    
"Eternal Love❤️‍🔥     Love is the light in darkest night, A flame that burns forever bright. Beauty shines in a heart so true,\
A gentle touch, a perfect view. Faith stands strong when times are weak, A whispered vow, the words we speak.\
Respect is felt in all we share, A bond unbroken, beyond compare. Romance lingers in each embrace,\
A timeless dance, a slow-paced grace. With every heartbeat, every sigh, Love’s sweet echo will never die.",

"The Heart’s Promise💕   Love is patient, love is kind, A force that never stays confined. Beauty glows in eyes so deep, A memory our souls will keep.\
True devotion never sways, Faithful through the longest days. Respect is built on trust so strong, A melody, a perfect song.\
Romance lives in whispered dreams, In moonlit walks and golden beams. Hand in hand, we’ll journey far, Guided by our love’s bright star.",

"A Love So True💛   Love is more than words can say, It lives in actions, day by day. Beauty shines from deep inside, A truth that time cannot divide.\
Faith in us will never break, A vow that neither storm can shake. Respect in kindness, soft yet strong, A love that sings its sweetest song.\
Romance in a touch so light,In stolen kisses, late at night. With every breath, with every sigh, My love for you will never die.",

"The Essence of Us 🌹   Love is magic, love is free, A whisper floating on the sea. Beauty glows in words unspoken, A love that never will be broken.\
Faith in you, in all we do, A promise made, forever true. Respect is found in tender care, A feeling neither can compare.\
Romance lives in every glance, A rhythm felt within our dance.With every step, with every vow, Our love will shine, both then and now.",

"Love’s Symphony🫶     Love is music, sweet and pure, A melody that will endure.Beauty sings in every note,\
A harmony we softly wrote. True affection, deep and bright, Like constellations in the night. Faithful hearts will stand as one,\
Together till the end is done. Respect is woven, thread by thread, In every tear and word we’ve said.\
Romance lingers, hand in hand, A love that only we understand.",

"A Love Divine🫂       Love is endless, bold, and vast, A story written to forever last. Beauty glows in all we share, A love beyond all words compare.\
True devotion, hand in hand, Side by side, we firmly stand. Faith in us, so strong, so bright, A guiding star through endless night.\
Respect and trust, a sacred bond, A melody, a love so fond. Romance lives in every kiss, A moment wrapped in perfect bliss.",


"A Love Unbreakable👩‍❤️‍💋‍👨      Love is not just in the day,\
But in the trials that come our way. Beauty lies in love so true, A soul that only beats for you. Faithful hearts will never part,\
Bound together from the start. Respect is found in what we give, The way we love, the way we live. Romance glows in candle’s light,\
In gentle words, in holding tight. Through every season, near or far, Love will always be our star.",

"Love’s Timeless Dance💘     Love is laughter, love is pain, A fire that rises once again.Beauty grows in hearts that care, A spark that lingers in the air.\
True devotion, strong and deep, A promise that our souls will keep. Faith in us, through high and low, A love that only seems to grow.\
Respect is shown in every deed, In every time we meet a need. Romance whispers, soft and bright, A dance beneath the moon’s pure light.",

"Bound by Love💓      Love’s embrace, so warm, so true, A journey meant for me and you. Beauty shines in all we do, A masterpiece in golden hue. Faith is found in trust we build,\
A love so strong, a heart fulfilled. Respect in every word and deed, A kindness that our souls will feed. Romance lives in stolen time,\
In poetry, in love’s sweet rhyme. Through all we face, through all we see,Love’s the bond of you and me.",
];

    window.generatePoem = function () {
        const poemDisplay = document.getElementById("poem-display");
        const randomPoem = poems[Math.floor(Math.random() * poems.length)];
        poemDisplay.textContent = randomPoem;
    };
});