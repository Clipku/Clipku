// Fireworks Effect
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Firework Particles
let particles = [];

function createParticle(x, y) {
    const angle = Math.random() * 2 * Math.PI;
    const speed = Math.random() * 3 + 2;
    const color = `hsl(${Math.random() * 360}, 100%, 70%)`;
    return { x, y, angle, speed, color, life: 100 };
}

function updateParticles() {
    particles.forEach((p, index) => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.life--;
        if (p.life <= 0) particles.splice(index, 1);
    });
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
    });
}

function loop() {
    updateParticles();
    drawParticles();
    requestAnimationFrame(loop);
}

canvas.addEventListener("click", (e) => {
    for (let i = 0; i < 30; i++) {
        particles.push(createParticle(e.clientX, e.clientY));
    }
});

loop();

// Page Navigation
const usernameInput = document.getElementById("username");
const submitNameButton = document.getElementById("submitName");
const displayName = document.getElementById("displayName");
const nextButton = document.getElementById("nextButton");

submitNameButton.addEventListener("click", () => {
    const name = usernameInput.value.trim();
    if (name) {
        displayName.textContent = name;
        document.getElementById("home").classList.add("hidden");
        document.getElementById("message").classList.remove("hidden");
    } else {
        alert("Silakan masukkan nama terlebih dahulu!");
    }
});

nextButton.addEventListener("click", () => {
    document.getElementById("message").classList.add("hidden");
    document.getElementById("goodbye").classList.remove("hidden");
});
