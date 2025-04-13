// Data: Music lists mapped by category.
const musicList = {
    relax: ["Calm Forest", "Gentle Breeze", "Morning Dew"],
    sad: ["Weeping Willow", "Melancholy Rain", "Lonely Piano"],
    battle: ["Epic Clash", "War Drums", "Combat Charge"],
    mystical: ["Enchanted Realm", "Mystic Vibes", "Hidden Spirits"]
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
  
  // Global objects to store currently playing Audio instances (if needed).
  let currentMusicAudio = null;
  const sfxAudios = new Array(15).fill(null);
  
  // Volume values (0 to 1)
  let musicVolume = document.getElementById("music-volume").value / 100;
  let sfxVolume = document.getElementById("sfx-volume").value / 100;
  
  // References to DOM elements.
  const musicButtonsContainer = document.querySelector(".sound-buttons");
  const musicCategoryButtons = document.querySelectorAll(".music-btn");
  
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
  
  // Track which SFX button is being set.
  let currentSfxIndex = null;
  
  /* -------- Music Functionality -------- */
  
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
      
      // When clicked, play the associated music track.
      btn.addEventListener("click", () => {
        // If there is music already playing, pause it.
        if (currentMusicAudio) {
          currentMusicAudio.pause();
        }
        // Construct a dummy audio file path based on track name.
        // In a real application, you would have valid audio file URLs.
        currentMusicAudio = new Audio(`audio/music/${track.replace(/\s+/g, "_").toLowerCase()}.mp3`);
        currentMusicAudio.volume = musicVolume;
        currentMusicAudio.play();
      });
      
      musicButtonsContainer.appendChild(btn);
    });
  }
  
  /* -------- SFX Functionality -------- */
  
  // When a SFX "Set" button is clicked, open the SFX modal.
  setSfxButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      currentSfxIndex = e.target.getAttribute("data-index");
      openSfxModal();
    });
  });
  
  // When a SFX main button is clicked, play the assigned sound if available.
  sfxButtonElements.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      const sfxName = e.target.textContent;
      if (sfxName && sfxName !== `SFX ${parseInt(index, 10) + 1}`) {
        // Construct a dummy audio file path (replace spaces with underscores)
        const audioPath = `audio/sfx/${sfxName.replace(/\s+/g, "_").toLowerCase()}.mp3`;
        // Stop any previous SFX audio for this button.
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
  
  // Fill the SFX modal list with options.
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
      // Update the large SFX button's text to the chosen name.
      const btn = document.querySelector(`.sfx-btn[data-index="${currentSfxIndex}"]`);
      btn.textContent = sfxName;
    }
  }
  
  /* -------- Volume Controls -------- */
  
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
    // Update volume for any playing SFX.
    sfxAudios.forEach(audio => {
      if (audio) {
        audio.volume = sfxVolume;
      }
    });
  });
  
  /* -------- Help and Settings Popups -------- */
  
  // Help modal open.
  document.getElementById("help").addEventListener("click", () => {
    helpModal.style.display = "block";
  });
  
  // Settings modal open.
  document.getElementById("settings").addEventListener("click", () => {
    settingsModal.style.display = "block";
  });
  
  // Close actions.
  sfxModalClose.addEventListener("click", closeSfxModal);
  helpModalClose.addEventListener("click", () => { helpModal.style.display = "none"; });
  settingsModalClose.addEventListener("click", () => { settingsModal.style.display = "none"; });
  
  // Close modals if clicking outside the modal-content.
  window.addEventListener("click", (event) => {
    if (event.target === sfxModal) { closeSfxModal(); }
    if (event.target === helpModal) { helpModal.style.display = "none"; }
    if (event.target === settingsModal) { settingsModal.style.display = "none"; }
  });
  
  // Notify when everything is done.
  console.log("All functionalities have been implemented.");
  