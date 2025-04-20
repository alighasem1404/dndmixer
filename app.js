//data arrays

// List of ambient options
const ambientList = [
  { name: "City", img: "images/city.jpg" },
  { name: "Marketplace", img: "images/marketplace.jpg" },
  { name: "Tavern/Inn", img: "images/tavern_inn.jpg" },
  { name: "Blacksmith Forge", img: "images/blacksmith_forge.jpg" },
  { name: "Harbour/Docks", img: "images/harbour_docks.jpg" },
  { name: "Dungeon/Prison", img: "images/dungeon_prison.jpg" },
  { name: "Sewers", img: "images/sewers.jpg" },
  { name: "Throne Room", img: "images/throne_room.jpg" },
  { name: "Castle Courtyard", img: "images/castle_courtyard.jpg" },
  { name: "Castle Kitchen", img: "images/castle_kitchen.jpg" },
  { name: "Stables", img: "images/stables.jpg" },
  { name: "Secret Passageway", img: "images/secret_passageway.jpg" },
  { name: "Cathedral/Temple", img: "images/cathedral_temple.jpg" },
  { name: "Sacred Grove", img: "images/sacred_grove.jpg" },
  { name: "Forest", img: "images/forest.jpg" },
  { name: "Enchanted Forest", img: "images/enchanted_forest.jpg" },
  { name: "Swamp", img: "images/swamp.jpg" },
  { name: "Mountain Pass", img: "images/mountain_pass.jpg" },
  { name: "Cave", img: "images/cave.jpg" },
  { name: "Mine", img: "images/mine.jpg" },
  { name: "Battlefield", img: "images/battlefield.jpg" },
  { name: "Training Grounds", img: "images/training_grounds.jpg" },
  { name: "Siege Camp", img: "images/siege_camp.jpg" },
  { name: "Ship Deck", img: "images/ship_deck.jpg" },
  { name: "Open Sea", img: "images/open_sea.jpg" },
  { name: "Pirate Cove", img: "images/pirate_cove.jpg" },
  { name: "Wizard’s Tower", img: "images/wizards_tower.jpg" },
  { name: "Magical Library", img: "images/magical_library.jpg" },
  { name: "Portal", img: "images/portal.jpg" },
  { name: "Desert", img: "images/desert.jpg" },
  { name: "Ruins", img: "images/ruins.jpg" },
  { name: "Graveyard", img: "images/graveyard.jpg" },
];

// List of music options
const musicList = [
  { name: "Calm / Peaceful", img: "images/calm_peaceful.jpg" },
  { name: "Happy / Festive", img: "images/happy_festive.jpg" },
  { name: "Sad / Melancholic", img: "images/sad_melancholic.jpg" },
  { name: "Romantic / Nostalgic", img: "images/romantic_nostalgic.jpg" },
  { name: "Heroic / Epic", img: "images/heroic_epic.jpg" },
  { name: "Adventurous / Energetic", img: "images/adventurous_energetic.jpg" },
  { name: "Tense / Suspenseful", img: "images/tense_suspenseful.jpg" },
  { name: "Mysterious / Mystical", img: "images/mysterious_mystical.jpg" },
  { name: "Magical / Enchanting", img: "images/magical_enchanting.jpg" },
  { name: "Creepy / Eerie", img: "images/creepy_eerie.jpg" },
  { name: "Dark / Sinister", img: "images/dark_sinister.jpg" },
  { name: "Solemn / Majestic", img: "images/solemn_majestic.jpg" },
  { name: "Battle / Action", img: "images/battle_action.jpg" },
  { name: "Ominous / Threatening", img: "images/ominous_threatening.jpg" },
];

// Updated SFX options list
const sfxOptions = [
  { name: "War Cry / Battle Shout", img: "images/war_cry.jpg" },
  { name: "Arrow Volley / Single Shot", img: "images/arrow_volley.jpg" },
  { name: "Magic Surge / Wild Magic Effect", img: "images/magic_surge.jpg" },
  { name: "Fireball Explosion", img: "images/fireball_explosion.jpg" },
  { name: "Lightning Strike", img: "images/lightning_strike.jpg" },
  { name: "Summoning Magic", img: "images/summoning_magic.jpg" },
  { name: "Divine Blessing / Holy Light", img: "images/divine_blessing.jpg" },
  { name: "Teleportation", img: "images/teleportation.jpg" },
  { name: "Portal Activation", img: "images/portal_activation.jpg" },
  { name: "Monster Roar / Creature Reveal", img: "images/monster_roar.jpg" },
  { name: "Dragon Roar", img: "images/dragon_roar.jpg" },
  { name: "Undead Rising / Ghostly Howl", img: "images/undead_rising.jpg" },
  { name: "Trap Trigger / Spike Trap", img: "images/trap_trigger.jpg" },
  { name: "Cracking Ice / Frozen Ground Break", img: "images/cracking_ice.jpg" },
  { name: "Ancient Mechanism / Puzzle Click", img: "images/ancient_mechanism.jpg" },
  { name: "Lock Click / Failed Lockpick", img: "images/lock_click.jpg" },
  { name: "Chest Unlock / Treasure Reveal", img: "images/chest_unlock.jpg" },
  { name: "Coin Drop / Gold Spill", img: "images/coin_drop.jpg" },
  { name: "Cricket Sound at Night", img: "images/cricket_sound.jpg" },
  { name: "Ritual Chanting / Magic Circle", img: "images/ritual_chanting.jpg" },
  { name: "Distant War Horn / Signal Call", img: "images/distant_war_horn.jpg" },
  { name: "Siege Weapons / Catapult Launch", img: "images/siege_weapons.jpg" },
  { name: "Waterfall", img: "images/waterfall.jpg" },
  { name: "Explosion / Collapse", img: "images/explosion_collapse.jpg" },
  { name: "Mysterious Whisper / Distant Voice", img: "images/mysterious_whisper.jpg" },
  { name: "Faint Footsteps", img: "images/faint_footsteps.jpg" },
  { name: "Evil Laugh / Villain Reveal", img: "images/evil_laugh.jpg" },
  { name: "Glass Breaking", img: "images/glass_breaking.jpg" },
  { name: "Bell Toll / Ominous Warning", img: "images/bell_toll.jpg" },
  { name: "Crowd Screaming", img: "images/crowd_screaming.jpg" },
  { name: "Monster Howling", img: "images/monster_howling.jpg" },
  { name: "Faint Crying", img: "images/faint_crying.jpg" },
];


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
    li.classList.add("option-item");

    const img = document.createElement("img");
    img.src = option.img;
    img.alt = option.name;
    img.classList.add("option-image");

    const span = document.createElement("span");
    span.textContent = option.name;

    li.appendChild(img);
    li.appendChild(span);

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
  button.innerHTML = ""; // Clear existing content

  const img = document.createElement("img");
  img.src = option.img;
  img.alt = option.name;
  img.classList.add("button-image");

  const span = document.createElement("span");
  span.textContent = option.name;

  button.appendChild(img);
  button.appendChild(span);
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
