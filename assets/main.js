// Promo copy
document.getElementById("copyPromo")?.addEventListener("click", () => {
  navigator.clipboard.writeText("LUCKYLUNA");
});

// Bonus slider
const slider = document.getElementById("bonusSlider");
const value = document.getElementById("bonusValue");
if (slider && value) {
  slider.oninput = () => value.textContent = slider.value;
}

// Exit intent
let modalShown = false;
document.addEventListener("mouseout", e => {
  if (e.clientY < 0 && !modalShown && window.innerWidth > 768) {
    document.getElementById("exitModal").style.display = "block";
    modalShown = true;
  }
});

// Particles
const canvas = document.getElementById("particles");
if (canvas) {
  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  const dots = Array.from({ length: 40 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1
  }));
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    dots.forEach(d => {
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI*2);
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}
