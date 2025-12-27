document.getElementById("year").textContent = new Date().getFullYear();

const btn = document.getElementById("themeBtn");
const root = document.documentElement;

let isDark = true;


const emailBtn = document.getElementById("copyEmail");
const email = "nacermoufhaha@gmail.com";

emailBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    showToast("Email copied!");
  } catch {
    showToast("Copy failed");
  }
});

function showToast(text) {
  let toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = text;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 1500);
}

const tracks = [
  "music/track1.mp3",
  
];

let currentTrack = 0;
let isPlaying = false;

const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

audio.src = tracks[currentTrack];
audio.volume = 0.25;

playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
  isPlaying = !isPlaying;
});

nextBtn.addEventListener("click", () => {
  currentTrack = (currentTrack + 1) % tracks.length;
  audio.src = tracks[currentTrack];
  audio.play();
  isPlaying = true;
  playBtn.textContent = "⏸";
});

prevBtn.addEventListener("click", () => {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  audio.src = tracks[currentTrack];
  audio.play();
  isPlaying = true;
  playBtn.textContent = "⏸";
});


