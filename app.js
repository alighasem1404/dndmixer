// --- 1. FALLBACK DATA (For Preview Environment) ---
const FALLBACK_DATA = {
    ambient: [
        { name: "City", img: "images/city.jpg" },
        { name: "Marketplace", img: "images/marketplace.jpg" },
        { name: "Tavern/Inn", img: "images/tavern_inn.jpg" },
        { name: "Dungeon", img: "images/dungeon_prison.jpg" },
        { name: "Forest", img: "images/forest.jpg" },
        { name: "Battlefield", img: "images/battlefield.jpg" },
        { name: "Storm", img: "images/storm.jpg" },
        { name: "Ocean", img: "images/open_sea.jpg" }
    ],
    music: [
        { name: "Calm", img: "images/calm_peaceful.jpg" },
        { name: "Epic", img: "images/heroic_epic.jpg" },
        { name: "Eerie", img: "images/creepy_eerie.jpg" },
        { name: "Battle", img: "images/battle_action.jpg" },
        { name: "Tavern", img: "images/happy_festive.jpg" },
        { name: "Mystery", img: "images/mysterious_mystical.jpg" }
    ],
    sfx: [
        { name: "Sword Clash", img: "images/war_cry.jpg" },
        { name: "Fireball", img: "images/fireball_explosion.jpg" },
        { name: "Monster Roar", img: "images/monster_roar.jpg" },
        { name: "Gold Drop", img: "images/coin_drop.jpg" },
        { name: "Arrow", img: "images/arrow_volley.jpg" },
        { name: "Trap", img: "images/trap_trigger.jpg" }
    ]
};

// --- 2. GLOBAL VARIABLES ---
let ambientList = [];
let musicList = [];
let sfxOptions = [];

// --- 3. DOM ELEMENTS ---
const ambientModal = document.getElementById("ambientModal");
const musicModal = document.getElementById("musicModal");
const sfxModal = document.getElementById("sfxModal");

const ambientOptionsList = document.getElementById("ambientOptionsList");
const musicOptionsList = document.getElementById("musicOptionsList");
const sfxOptionsList = document.getElementById("sfxOptionsList");

// --- 4. DATA LOADING ---
async function initApp() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        ambientList = data.ambient;
        musicList = data.music;
        sfxOptions = data.sfx;
        console.log("Data loaded successfully from JSON.");
    } catch (error) {
        console.warn("Could not load 'data.json' (Using fallback data).");
        ambientList = FALLBACK_DATA.ambient;
        musicList = FALLBACK_DATA.music;
        sfxOptions = FALLBACK_DATA.sfx;
    }
    setupEventListeners();
}

// --- 5. LOGIC & UI FUNCTIONS ---

function setupEventListeners() {
    // Set Buttons (Open Modals)
    document.querySelectorAll(".set-ambient-btn").forEach((btn) => {
        btn.addEventListener("click", () => openModal(ambientModal, ambientList, ambientOptionsList, btn, "ambient"));
    });

    document.querySelectorAll(".set-music-btn").forEach((btn) => {
        btn.addEventListener("click", () => openModal(musicModal, musicList, musicOptionsList, btn, "music"));
    });

    document.querySelectorAll(".set-sfx-btn").forEach((btn) => {
        btn.addEventListener("click", () => openModal(sfxModal, sfxOptions, sfxOptionsList, btn, "sfx"));
    });

    // Play Buttons (Trigger Sound/Update Player)
    document.querySelectorAll(".ambient-btn, .music-btn, .sfx-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const name = btn.getAttribute("data-sound-name");
            const img = btn.getAttribute("data-sound-img");
            const audioPath = btn.getAttribute("data-sound-audio");
            
            if (btn.classList.contains("ambient-btn")) {
                playTrack("ambient", name, img, audioPath);
            } else if (btn.classList.contains("music-btn")) {
                playTrack("music", name, img, audioPath);
            } else if (btn.classList.contains("sfx-btn")) {
                playTrack("sfx", name, img, audioPath);
            }
        });
    });

    // Close Buttons
    document.getElementById("ambientModalClose").addEventListener("click", () => closeModal(ambientModal));
    document.getElementById("musicModalClose").addEventListener("click", () => closeModal(musicModal));
    document.getElementById("sfxModalClose").addEventListener("click", () => closeModal(sfxModal));

    // Window Click (Close outside)
    window.addEventListener("click", (event) => {
        if (event.target === ambientModal) closeModal(ambientModal);
        if (event.target === musicModal) closeModal(musicModal);
        if (event.target === sfxModal) closeModal(sfxModal);
        if (event.target === document.getElementById("helpModal")) document.getElementById("helpModal").style.display = "none";
        if (event.target === document.getElementById("settingsModal")) document.getElementById("settingsModal").style.display = "none";
    });
    
    // Help & Settings
    document.getElementById("help").addEventListener("click", () => document.getElementById("helpModal").style.display = "flex");
    document.getElementById("helpModalClose").addEventListener("click", () => document.getElementById("helpModal").style.display = "none");
    
    document.getElementById("settings").addEventListener("click", () => document.getElementById("settingsModal").style.display = "flex");
    document.getElementById("settingsModalClose").addEventListener("click", () => document.getElementById("settingsModal").style.display = "none");
}

// Helper function to construct audio path from name
function constructAudioPath(type, name) {
    // Sanitize the name to match file naming (remove special chars, spaces, etc.)
    const sanitizedName = name
        .replace(/[\/\\]/g, '')  // Remove slashes
        .replace(/\s+/g, ' ')     // Normalize spaces
        .trim();
    
    // Construct path: audio/{type}/{sanitizedName}.mp3
    return `audio/${type}/${sanitizedName}.mp3`;
}

// --- PLAYBACK LOGIC ---
function playTrack(type, name, imgSrc, audioPath) {
    if (!name) return; // Button is empty

    // Select the display image and audio player for the correct panel
    const panel = document.querySelector(`.${type}-panel`);
    const displayImg = panel ? panel.querySelector('.sfx-image') : null;
    const audioPlayer = document.getElementById(`${type}-mp3-player`);

    if (!audioPlayer) {
        console.error(`Audio player not found for type: ${type}`);
        return;
    }

    // Update Image
    if (displayImg && imgSrc) {
        displayImg.src = imgSrc;
        // Add a simple fade animation reset
        displayImg.style.opacity = '0.5';
        setTimeout(() => displayImg.style.opacity = '1', 50);
    }

    // Use provided audio path or construct one
    const finalAudioPath = audioPath || constructAudioPath(type, name);
    
    // Set audio source and play
    audioPlayer.src = finalAudioPath;
    audioPlayer.load(); // Reload the audio element
    
    // Play the audio
    audioPlayer.play().catch(error => {
        console.warn(`Could not play audio: ${finalAudioPath}`, error);
        // If the file doesn't exist, you might want to try alternative paths or show an error
    });
    
    console.log(`Playing ${type}: ${name} from ${finalAudioPath}`);
}

function openModal(modal, dataList, listElement, button, type) {
    populateOptionsList(dataList, listElement, button, type);
    modal.style.display = "flex";
}

function closeModal(modal) {
    modal.style.display = "none";
}

function populateOptionsList(options, listElement, setButton, type) {
    listElement.innerHTML = "";
    
    options.forEach((option) => {
        const li = document.createElement("li");
        
        const img = document.createElement("img");
        img.src = option.img;
        img.alt = option.name;
        img.onerror = function() { 
            this.src = "https://via.placeholder.com/100?text=Icon"; 
        };

        const span = document.createElement("span");
        span.textContent = option.name;

        li.appendChild(img);
        li.appendChild(span);

        li.addEventListener("click", () => {
            assignOptionToButton(option, setButton, type);
            closeModal(setButton.closest('body').querySelector('#' + type + 'Modal'));
        });

        listElement.appendChild(li);
    });
}

// --- KEY FIX HERE ---
function assignOptionToButton(option, setButton, type) {
    // 1. Get index from the clicked SET button
    const index = setButton.getAttribute("data-index");

    // 2. Find the corresponding PLAY button (which is the sibling button with class .{type}-btn)
    // Example: If type is 'ambient', looking for .ambient-btn with data-index="0"
    const playButton = document.querySelector(`.${type}-btn[data-index="${index}"]`);
    
    if (!playButton) {
        console.error("Play button not found for index:", index);
        return;
    }

    // 3. Update the PLAY button content
    playButton.innerHTML = ""; // Clear existing "Empty" text

    const img = document.createElement("img");
    img.src = option.img;
    img.className = "button-icon";
    img.alt = option.name;
    img.onerror = function() { this.style.display = 'none'; };

    const text = document.createElement("span");
    text.textContent = option.name;
    text.className = "button-text";

    playButton.appendChild(img);
    playButton.appendChild(text);

    // 4. Store data on the play button so we know what to play when clicked
    playButton.setAttribute("data-sound-name", option.name);
    playButton.setAttribute("data-sound-img", option.img);
    
    // Store audio path if it exists in the option, otherwise construct it
    const audioPath = option.audio || constructAudioPath(type, option.name);
    playButton.setAttribute("data-sound-audio", audioPath);
    
    playButton.style.borderColor = "#e8d69d"; // Visual feedback that it's active
}

document.addEventListener("DOMContentLoaded", initApp);