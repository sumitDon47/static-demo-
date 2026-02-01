const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgMusic");

// safety check
if (!yesBtn || !noBtn || !music) {
  console.error("Missing element: check IDs in HTML");
}

noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  music.volume = 0.3;
  music.play().catch(() => {
    console.log("Audio blocked, but continuing");
  });

  setTimeout(() => {
    window.location.href = "roses.html";
  }, 400);
});
