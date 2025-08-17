
function createGalaxySparkle() {
  const hero = document.querySelector(".hero");
  const sparkle = document.createElement("span");
  sparkle.classList.add("sparkle");
  hero.appendChild(sparkle);

  // Random position inside hero
  const x = Math.random() * hero.offsetWidth;
  const y = Math.random() * hero.offsetHeight;

  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;

  // Random size variation
  const size = Math.random() * 8 + 4; // 4–12px
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;

  // Remove after animation
  setTimeout(() => sparkle.remove(), 2500);
}

// Generate sparkles every 500–1000ms randomly
setInterval(() => {
  if (Math.random() > 0.2) { // ~40% chance per interval
    createGalaxySparkle();
  }
}, 500);
const hero = document.querySelector(".hero");
setTimeout(() => sparkle.remove(), 3500); 


hero.addEventListener("mousemove", (e) => {
  const sparkle = document.createElement("span");
  sparkle.classList.add("sparkle");
  hero.appendChild(sparkle);

  // Position the sparkle at cursor location (relative to hero)
  const x = e.clientX - hero.getBoundingClientRect().left;
  const y = e.clientY - hero.getBoundingClientRect().top;

  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;


  // Remove sparkle after animation ends
  setTimeout(() => {
    sparkle.remove();
  }, 2500);
});
// Optional: cute alert for the contact form
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your sweet message 💖 I'll get back to you soon!");
  });

  


