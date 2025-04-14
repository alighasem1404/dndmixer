// Data arrays
const ambientList = ["Forest", "City", "Ocean", "Wind", "Rain", "Cave", "River", "Night", "Thunder", "Snow"];
const musicList = ["Relax", "Sad", "Battle", "Mystical", "Epic", "Calm", "Heroic", "Peaceful", "Suspense", "Adventurous"];
const sfxOptions = ["Sword Clash", "Thunderstorm", "Explosion", "Footsteps", "Arrow Fly", "Magic Spark", "Dragon Roar", "Creaking Door", "Mystery Tone", "Battle Cry"];

// Modal elements
const ambientModal = document.getElementById("ambientModal");
const musicModal = document.getElementById("musicModal");
const sfxModal = document.getElementById("sfxModal");

const ambientModalClose = document.getElementById("ambientModalClose");
const musicModalClose = document.getElementById("musicModalClose");
const sfxModalClose = document.getElementById("sfxModalClose");

const ambientOptionsList = document.getElementById("ambientOptionsList");
const musicOptionsList = document.getElementById("musicOptionsList");
const sfxOptionsList = document.getElementById("sfxOptionsList");

// Buttons to open modals
const setAmbientButtons = document.querySelectorAll(".set-ambient-btn");
const setMusicButtons = document.querySelectorAll(".set-music-btn");
const setSfxButtons = document.querySelectorAll(".set-sfx-btn");

// Functions to open modals
setAmbientButtons.forEach((btn) => {
  btn.addEventListener("click", () => openAmbientModal(btn));
});

setMusicButtons.forEach((btn) => {
  btn.addEventListener("click", () => openMusicModal(btn));
});

setSfxButtons.forEach((btn) => {
  btn.addEventListener("click", () => openSfxModal(btn));
});

// Open modals
function openAmbientModal(button) {
  const index = button.getAttribute("data-index");
  populateOptionsList(ambientList, ambientOptionsList, index, "ambient");
  ambientModal.style.display = "block";
}

function openMusicModal(button) {
  const index = button.getAttribute("data-index");
  populateOptionsList(musicList, musicOptionsList, index, "music");
  musicModal.style.display = "block";
}

function openSfxModal(button) {
  const index = button.getAttribute("data-index");
  populateOptionsList(sfxOptions, sfxOptionsList, index, "sfx");
  sfxModal.style.display = "block";
}

// Populate modal with options
function populateOptionsList(options, listElement, index, type) {
  listElement.innerHTML = "";
  options.forEach((option, i) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => {
      assignOptionToButton(option, index, type);
      closeAllModals();
    });
    listElement.appendChild(li);
  });
}

// Assign selected option to corresponding button
function assignOptionToButton(option, index, type) {
  const button = document.querySelector(`.${type}-btn[data-index="${index}"]`);
  button.textContent = option;
}

// Close all modals
function closeAllModals() {
  ambientModal.style.display = "none";
  musicModal.style.display = "none";
  sfxModal.style.display = "none";
}

// Close modals when clicking the "x" button
ambientModalClose.addEventListener("click", closeAllModals);
musicModalClose.addEventListener("click", closeAllModals);
sfxModalClose.addEventListener("click", closeAllModals);

// Close modals when clicking outside modal content
window.addEventListener("click", (event) => {
  if (event.target === ambientModal) closeAllModals();
  if (event.target === musicModal) closeAllModals();
  if (event.target === sfxModal) closeAllModals();
});


// Modal elements for Help and Settings
const helpModal = document.getElementById("helpModal");
const helpModalClose = document.getElementById("helpModalClose");

const settingsModal = document.getElementById("settingsModal");
const settingsModalClose = document.getElementById("settingsModalClose");

// Buttons to open Help and Settings modals
const helpButton = document.getElementById("help");
const settingsButton = document.getElementById("settings");

// Open Help modal
helpButton.addEventListener("click", () => {
  helpModal.style.display = "block";
});

// Open Settings modal
settingsButton.addEventListener("click", () => {
  settingsModal.style.display = "block";
});

// Close Help modal when clicking the "X" button
helpModalClose.addEventListener("click", () => {
  helpModal.style.display = "none";
});

// Close Settings modal when clicking the "X" button
settingsModalClose.addEventListener("click", () => {
  settingsModal.style.display = "none";
});

// Close modals when clicking outside of modal content
window.addEventListener("click", (event) => {
  if (event.target === helpModal) {
    helpModal.style.display = "none";
  }
  if (event.target === settingsModal) {
    settingsModal.style.display = "none";
  }
});
