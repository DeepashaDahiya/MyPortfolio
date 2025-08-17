
const hero = document.querySelector(".hero");

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
  }, 800);
});
// Optional: cute alert for the contact form
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your sweet message 💖 I'll get back to you soon!");
  });

  
