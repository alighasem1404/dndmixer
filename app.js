/*************** Data Arrays and Objects ***************/

// Dummy data for ambient sounds, music, and SFX.
const ambientList = ["Forest", "City", "Ocean", "Wind", "Rain", "Cave", "River", "Night", "Thunder", "Snow"];
const musicList = ["Relax", "Sad", "Battle", "Mystical", "Epic", "Calm", "Heroic", "Peaceful", "Suspense", "Adventurous"];
const sfxOptions = ["Sword Clash", "Thunderstorm", "Explosion", "Footsteps", "Arrow Fly", "Magic Spark", "Dragon Roar", "Creaking Door", "Mystery Tone", "Battle Cry"];

/*************** Modal Elements ***************/
const ambientModal = document.getElementById("ambientModal");
const musicModal = document.getElementById("musicModal");
const sfxModal = document.getElementById("sfxModal");

const ambientModalClose = document.getElementById("ambientModalClose");
const musicModalClose = document.getElementById("musicModalClose");
const sfxModalClose = document.getElementById("sfxModalClose");

const ambientOptionsList = document.getElementById("ambientOptionsList");
const musicOptionsList = document.getElementById("musicOptionsList");
const sfxOptionsList = document.getElementById("sfxOptionsList");

/*************** Buttons to Open Modals ***************/
const setAmbientButtons = document.querySelectorAll(".set-ambient-btn");
const setMusicButtons = document.querySelectorAll(".set-music-btn");
const setSfxButtons = document.querySelectorAll(".set-sfx-btn");

/*************** Functions for Opening Modals ***************/

// Open Ambient Modal
setAmbientButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => openAmbientModal(index));
});

// Open Music Modal
setMusicButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => openMusicModal(index));
});

// Open SFX Modal
setSfxButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => openSfxModal(index));
});

// Populate and open Ambient Modal
function openAmbientModal(index) {
  populateOptionsList(ambientList, ambientOptionsList, index);
  ambientModal.style.display = "block";
}

// Populate and open Music Modal
function openMusicModal(index) {
  populateOptionsList(musicList, musicOptionsList, index);
  musicModal.style.display = "block";
}

// Populate and open SFX Modal
function openSfxModal(index) {
  populateOptionsList(sfxOptions, sfxOptionsList, index);
  sfxModal.style.display = "block";
}

/*************** Populate Options in Modals ***************/
function populateOptionsList(options, listElement, index) {
  listElement.innerHTML = "";
  options.forEach((option, i) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => {
      assignOptionToButton(option, index);
      closeAllModals();
    });
    listElement.appendChild(li);
  });
}

/*************** Assign Option to Button ***************/
function assignOptionToButton(option, index) {
  if (index < 10) {
    const panelType = index < 10 ? "ambient" : "music";
    const button = document.querySelector(`.${panelType}-btn[data-index="${index}"]`);
    button.textContent = option;
  }
}

/*************** Close All Modals ***************/
function closeAllModals() {
  ambientModal.style.display = "none";
  musicModal.style.display = "none";
  sfxModal.style.display = "none";
}

// Close modals when clicking the "x" button
ambientModalClose.addEventListener("click", closeAllModals);
musicModalClose.addEventListener("click", closeAllModals);
sfxModalClose.addEventListener("click", closeAllModals);

// Close modals if clicking outside of modal content
window.addEventListener("click", (event) => {
  if (event.target === ambientModal) closeAllModals();
  if (event.target === musicModal) closeAllModals();
  if (event.target === sfxModal) closeAllModals();
});
