// Load JW Player key
jwplayer.key = "XSuP4qMl+9tK17QNb+4+th2Pm9AWgMO/cYH8CI0HGGr7bdjo";

// Video Links Data
const videoLinks = {
  australian: {
    "FP1": "https://dai.fancode.com/primary/114686_english_hls_6567ta-di_backup/vod_93_master.m3u8",
    "FP2": "https://dai.fancode.com/primary/114687_english_hls_6308ta-no_backup/vod_160_master.m3u8",
    "FP3": "https://dai.fancode.com/primary/114688_english_hls_6234ta-di_backup/vod_825_master.m3u8",
    "Qualifying": "https://dai.fancode.com/primary/114689_english_hls_5992ta-di_backup/vod_707_master.m3u8",
    "Race": "https://dai.fancode.com/primary/114690_english_hls_4902ta-no_backup/vod_103_master.m3u8"
  },
  chinese: {
    "FP1": "https://dai.fancode.com/primary/118386_english_hls_6228ta-no_backup/vod_379_master.m3u8",
    "Sprint Qualifying": "https://dai.fancode.com/primary/118387_english_hls_6067ta-di_backup/vod_821_master.m3u8",
    "Sprint": "https://dai.fancode.com/secondary/118388_english_hls_5414ta-di_backup/vod_363_master.m3u8",
    "Qualifying": "https://dai.fancode.com/secondary/118389_english_hls_5305ta-di_backup/vod_142_master.m3u8",
    "Race": "https://dai.fancode.com/secondary/118390_english_hls_6251ta-no_backup/vod_112_master.m3u8"
  },
  japanese: {
    "FP1": "https://example.com/bahrain_fp1.m3u8",
    "FP2": "https://example.com/bahrain_fp2.m3u8",
    "FP3": "https://example.com/bahrain_fp3.m3u8",
    "Qualifying": "https://example.com/bahrain_qualifying.m3u8",
    "Race": "https://example.com/bahrain_race.m3u8"
  }
};

// Update session options based on selected Grand Prix
function updateSessionOptions() {
  const gpSelection = document.getElementById("gpSelection").value;
  const sessionSelection = document.getElementById("sessionSelection");

  sessionSelection.innerHTML = '<option value="" disabled selected>Select Session</option>';
  sessionSelection.disabled = false;

  Object.keys(videoLinks[gpSelection]).forEach((session) => {
    let option = document.createElement("option");
    option.value = videoLinks[gpSelection][session];
    option.textContent = session;
    sessionSelection.appendChild(option);
  });
}

// Initialize JW Player
function initializePlayer(videoUrl) {
  const player = jwplayer("player-container").setup({
    aspectratio: "16:9",
    width: "100%",
    file: videoUrl,
    image: "https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/8382b094-4a8d-4719-a656-3afa74e3818f/156bd909-72ac-47f9-9c65-f8f3b6553de6/1194x672/match/image.jpg",
    autostart: true,
    hlshtml: true,
    captions: { color: "#ffb800", fontSize: 30, backgroundOpacity: 0 },
    abouttext: "Ultrawebs(HM)",
    aboutlink: "https://linktr.ee/ultrawebs",
    logo: {
      file: "https://media.formula1.com/image/upload/f_auto,c_limit,w_285,q_auto/f_auto/q_auto/fom-website/etc/designs/fom-website/images/F1_75_Logo",
      position: "bottom-right",
      margin: "20",
      hide: "false",
      size: "05%",
    },
    fullscreen: {
      enabled: true,
      displayLabel: true,
      label: "Exit Fullscreen",
    },
    playbackRateControls: true,
    cast: { active: true }, // Enable Chromecast
    airplay: true // Enable AirPlay
  });

  // Add Chromecast & AirPlay buttons manually
  addCastingButtons(player);
}

// Function to add AirPlay & Chromecast buttons dynamically
function addCastingButtons(player) {
  let controls = document.getElementById("player-container");

  // Remove existing buttons if already present
  document.querySelectorAll(".cast-button, .airplay-button").forEach(btn => btn.remove());

  // Create Chromecast Button
  let castButton = document.createElement("button");
  castButton.innerHTML = "📺 Chromecast";
  castButton.classList.add("cast-button");
  castButton.onclick = () => {
    if (player.cast) {
      player.cast.start();
    } else {
      alert("Chromecast is not available on this device.");
    }
  };

  // Create AirPlay Button
  let airplayButton = document.createElement("button");
  airplayButton.innerHTML = "🎵 AirPlay";
  airplayButton.classList.add("airplay-button");
  airplayButton.onclick = () => {
    if (window.WebKitPlaybackTargetAvailabilityEvent) {
      player.cast.airPlay();
    } else {
      alert("AirPlay is not available on this device.");
    }
  };

  controls.appendChild(castButton);
  controls.appendChild(airplayButton);
}

// Play video when session is selected
function playVideo(videoUrl) {
  initializePlayer(videoUrl);
}

// Show popup on page load
window.onload = function () {
  setTimeout(() => {
    document.getElementById("coffeePopup").classList.add("active");
    setTimeout(speakMessage, 1000); // Delay speech slightly
  }, 500);
};

// Redirect to Buy Me a Coffee
function redirectToCoffee() {
  window.open("https://buymeacoffee.com/haritmengar", "_blank");
  closePopup();
}

// Close popup
function closePopup() {
  document.getElementById("coffeePopup").classList.remove("active");
}

// Speak the popup message aloud
function speakMessage() {
  let messageText = document.getElementById("popupMessage").innerText;
  let speech = new SpeechSynthesisUtterance(messageText);
  speech.lang = "en-UK"; // British English accent
  speech.rate = 1;
  speech.pitch = 1;
  speech.volume = 1;

  // Fix for Chrome & Safari: Wait until voices are loaded
  let voicesLoaded = false;
  speechSynthesis.onvoiceschanged = function () {
    if (!voicesLoaded) {
      let voices = speechSynthesis.getVoices();
      if (voices.length > 0) {
        speech.voice = voices.find(voice => voice.lang === "en-UK") || voices[0];
        speechSynthesis.speak(speech);
        voicesLoaded = true;
      }
    }
  };
}

// Load Google Cast SDK
(function () {
  var js = document.createElement("script");
  js.src = "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js";
  js.onload = function () {
    console.log("Google Cast SDK Loaded");
  };
  document.body.appendChild(js);
})();
