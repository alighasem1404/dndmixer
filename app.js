/*************** Data Arrays and Objects ***************/

// Music lists mapped by category.
const musicList = {
  relax: ["Calm Forest", "Gentle Breeze", "Morning Dew"],
  sad: ["Weeping Willow", "Melancholy Rain", "Lonely Piano"],
  battle: ["Epic Clash", "War Drums", "Combat Charge"],
  mystical: ["Enchanted Realm", "Mystic Vibes", "Hidden Spirits"]
};

// Ambient sound lists mapped by category.
const ambientList = {
  forest: ["Forest Dawn", "Mystical Woods", "Whispering Leaves"],
  city: ["Urban Night", "City Rain", "Street Ambience"],
  ocean: ["Ocean Waves", "Underwater Calm", "Sea Breeze"],
  wind: ["Gentle Wind", "Howling Gale", "Breezy Day"]
};

// Dummy SFX options.
const sfxOptions = [
  "Sword Clash",
  "Thunderstorm",
  "Explosion",
  "Footsteps",
  "Arrow Fly",
  "Magic Spark",
  "Dragon Roar",
  "Creaking Door",
  "Mystery Tone",
  "Battle Cry"
];

/*************** Audio Storage and Volume Variables ***************/

// For music.
let currentMusicAudio = null;
let musicVolume = document.getElementById("music-volume").value / 100;

// For ambient.
let currentAmbientAudio = null;
let ambientVolume = document.getElementById("ambient-volume").value / 100;

// For SFX.
const sfxAudios = new Array(15).fill(null);
let sfxVolume = document.getElementById("sfx-volume").value / 100;

/*************** DOM Element References ***************/
const musicButtonsContainer = document.querySelector(".music-sound-buttons");
const ambientButtonsContainer = document.querySelector(".ambient-sound-buttons");

const musicCategoryButtons = document.querySelectorAll(".music-btn");
const ambientCategoryButtons = document.querySelectorAll(".ambient-btn");

const sfxButtonElements = document.querySelectorAll(".sfx-btn");
const setSfxButtons = document.querySelectorAll(".set-sfx-btn");

// Modal elements.
const sfxModal = document.getElementById("sfxModal");
const sfxModalClose = document.getElementById("sfxModalClose");
const sfxOptionsList = document.getElementById("sfxOptionsList");

const helpModal = document.getElementById("helpModal");
const helpModalClose = document.getElementById("helpModalClose");

const settingsModal = document.getElementById("settingsModal");
const settingsModalClose = document.getElementById("settingsModalClose");

// Variable to track which SFX button is being set.
let currentSfxIndex = null;

/*************** Ambient Sound Functionality ***************/

// When an ambient category button is clicked, load the ambient tracks.
ambientCategoryButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const category = e.target.getAttribute("data-category");
    loadAmbientTracks(category);
  });
});

function loadAmbientTracks(category) {
  // Clear current ambient track buttons.
  ambientButtonsContainer.innerHTML = "";
  const tracks = ambientList[category] || [];

  tracks.forEach(track => {
    const btn = document.createElement("button");
    btn.className = "sound-btn";
    btn.textContent = track;

    // When clicked, play the ambient track.
    btn.addEventListener("click", () => {
      if (currentAmbientAudio) {
        currentAmbientAudio.pause();
      }
      // Construct a dummy audio file path.
      currentAmbientAudio = new Audio(`audio/ambient/${track.replace(/\s+/g, "_").toLowerCase()}.mp3`);
      currentAmbientAudio.volume = ambientVolume;
      currentAmbientAudio.play();
    });

    ambientButtonsContainer.appendChild(btn);
  });
}

/*************** Music Functionality ***************/

// When a music category is clicked, load the list of music tracks.
musicCategoryButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const category = e.target.getAttribute("data-category");
    loadMusicTracks(category);
  });
});

function loadMusicTracks(category) {
  // Clear current music buttons.
  musicButtonsContainer.innerHTML = "";
  const tracks = musicList[category] || [];

  tracks.forEach(track => {
    const btn = document.createElement("button");
    btn.className = "sound-btn";
    btn.textContent = track;

    // When clicked, play the music track.
    btn.addEventListener("click", () => {
      if (currentMusicAudio) {
        currentMusicAudio.pause();
      }
      currentMusicAudio = new Audio(`audio/music/${track.replace(/\s+/g, "_").toLowerCase()}.mp3`);
      currentMusicAudio.volume = musicVolume;
      currentMusicAudio.play();
    });

    musicButtonsContainer.appendChild(btn);
  });
}

/*************** SFX Functionality ***************/

// When a SFX "Set" button is clicked, open the SFX modal.
setSfxButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    currentSfxIndex = e.target.getAttribute("data-index");
    openSfxModal();
  });
});

// When a SFX main button is clicked, play its assigned sound if available.
sfxButtonElements.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const index = e.target.getAttribute("data-index");
    const sfxName = e.target.textContent;
    if (sfxName && sfxName !== `SFX ${parseInt(index, 10) + 1}`) {
      const audioPath = `audio/sfx/${sfxName.replace(/\s+/g, "_").toLowerCase()}.mp3`;
      if (sfxAudios[index]) {
        sfxAudios[index].pause();
      }
      sfxAudios[index] = new Audio(audioPath);
      sfxAudios[index].volume = sfxVolume;
      sfxAudios[index].play();
    } else {
      alert("No SFX assigned. Please click the Set button first.");
    }
  });
});

// Populate the SFX modal with options.
function populateSfxModal() {
  sfxOptionsList.innerHTML = "";
  sfxOptions.forEach(sfx => {
    const li = document.createElement("li");
    li.textContent = sfx;
    li.addEventListener("click", () => {
      assignSfxToButton(sfx);
      closeSfxModal();
    });
    sfxOptionsList.appendChild(li);
  });
}

function openSfxModal() {
  populateSfxModal();
  sfxModal.style.display = "block";
}

function closeSfxModal() {
  sfxModal.style.display = "none";
}

// Assign the selected SFX to the corresponding SFX button.
function assignSfxToButton(sfxName) {
  if (currentSfxIndex !== null) {
    const btn = document.querySelector(`.sfx-btn[data-index="${currentSfxIndex}"]`);
    btn.textContent = sfxName;
  }
}

/*************** Volume Controls ***************/

// Update ambient volume.
document.getElementById("ambient-volume").addEventListener("input", (e) => {
  ambientVolume = e.target.value / 100;
  if (currentAmbientAudio) {
    currentAmbientAudio.volume = ambientVolume;
  }
});

// Update music volume.
document.getElementById("music-volume").addEventListener("input", (e) => {
  musicVolume = e.target.value / 100;
  if (currentMusicAudio) {
    currentMusicAudio.volume = musicVolume;
  }
});

// Update SFX volume.
document.getElementById("sfx-volume").addEventListener("input", (e) => {
  sfxVolume = e.target.value / 100;
  sfxAudios.forEach(audio => {
    if (audio) {
      audio.volume = sfxVolume;
    }
  });
});

/*************** Help and Settings Popups ***************/

// Help modal open.
document.getElementById("help").addEventListener("click", () => {
  helpModal.style.display = "block";
});

// Settings modal open.
document.getElementById("settings").addEventListener("click", () => {
  settingsModal.style.display = "block";
});

// Close modal actions.
sfxModalClose.addEventListener("click", closeSfxModal);
helpModalClose.addEventListener("click", () => { helpModal.style.display = "none"; });
settingsModalClose.addEventListener("click", () => { settingsModal.style.display = "none"; });

// Close modals when clicking outside their content.
window.addEventListener("click", (event) => {
  if (event.target === sfxModal) { closeSfxModal(); }
  if (event.target === helpModal) { helpModal.style.display = "none"; }
  if (event.target === settingsModal) { settingsModal.style.display = "none"; }
});

console.log("All functionalities have been implemented and UI updated.");
