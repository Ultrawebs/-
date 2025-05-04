// F1 Link - JavaScript Code
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
    "FP1": "https://dai.fancode.com/secondary/118391_english_hls_5852ta-no_backup/vod_347_master.m3u8",
    "FP2": "https://dai.fancode.com/secondary/118392_english_hls_5185ta-di_backup/vod_887_master.m3u8",
    "FP3": "https://dai.fancode.com/secondary/118393_english_hls_6984ta-di_backup/vod_985_master.m3u8",
    "Qualifying": "https://dai.fancode.com/secondary/118394_english_hls_8320ta-di_backup/vod_191_master.m3u8",
    "Race": "https://dai.fancode.com/secondary/118395_english_hls_2588ta-di_backup/vod_456_master.m3u8"
  },
  bahrain: {
    "FP1": "https://dai.fancode.com/primary/118396_english_hls_5727ta-di_backup/vod_698_master.m3u8",
    "FP2": "https://dai.fancode.com/primary/118397_english_hls_5782ta-no_backup/vod_743_master.m3u8",
    "FP3": "https://dai.fancode.com/primary/118398_english_hls_5283ta-no_backup/vod_201_master.m3u8",
    "Qualifying": "https://dai.fancode.com/primary/118399_english_hls_4632ta-no_backup/vod_630_master.m3u8",
    "Race": "https://dai.fancode.com/primary/118400_english_hls_411ta-di_backup/vod_375_master.m3u8"
  },
  saudi: {
    "FP1": "https://dai.fancode.com/primary/118401_english_hls_6567ta-di_backup/vod_236_master.m3u8",
    "FP2": "https://dai.fancode.com/primary/118402_english_hls_6446ta-no_backup/vod_225_master.m3u8",
    "FP3": "https://dai.fancode.com/primary/118403_english_hls_5644ta-no_backup/vod_248_master.m3u8",
    "Qualifying": "https://dai.fancode.com/primary/118404_english_hls_5585ta-no_backup/vod_377_master.m3u8",
    "Race": "https://dai.fancode.com/primary/118405_english_hls_6222ta-di_backup/vod_897_master.m3u8"
  },
  miami: {
    "FP1": "https://dai.fancode.com/primary/118406_english_hls_5990ta-di_backup/vod_240_master.m3u8",
    "Sprint Qualifying": "https://dai.fancode.com/primary/118407_english_hls_5896ta-di_h264_backup/vod_288_master.m3u8",
    "Sprint": "https://dai.fancode.com/primary/118408_english_hls_39117ta-di_h264_backup/vod_308_master.m3u8",
    "Qualifying": "https://dai.fancode.com/primary/118409_english_hls_34242ta-di_h264_backup/vod_574_master.m3u8",
    "Race": "https://dai.fancode.com/primary/118410_english_hls_1689ta-di_h264_backup/vod_765_master.m3u8"
  },
  "emiliaromagna": {
    "FP1": "<FP1_Link>",
    "FP2": "<FP2_Link>",
    "FP3": "<FP3_Link>",
    "Qualifying": "<Qualifying_Link>",
    "Race": "<Race_Link>"
  },
  monaco: {
    "FP1": "<FP1_Link>",
    "FP2": "<FP2_Link>",
    "FP3": "<FP3_Link>",
    "Qualifying": "<Qualifying_Link>",
    "Race": "<Race_Link>"
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
  jwplayer("player-container").setup({
    aspectratio: "16:9",
    width: "100%",
    file: videoUrl,
    image: "https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/8382b094-4a8d-4719-a656-3afa74e3818f/156bd909-72ac-47f9-9c65-f8f3b6553de6/1194x672/match/image.jpg",
    autostart: true,
    hlshtml: true,
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
    cast: {
      appid: "CC1AD845", // Chromecast default app ID
    },
    airplay: true,
    sharing: {
      sites: [
        "facebook",
        "twitter",
        "tumblr",
        {
          icon: "https://www.gstatic.com/images/icons/material/system/2x/gmail_64dp.png",
          label: "Gmail",
          src: "mailto:?subject=Check%20out%20this%20video&body=Watch%20this%20video%20here:%20https://yourdomain.com/video-page"
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/25/25686.png",
          label: "Embed",
          src: "javascript:prompt('Embed this video:', `<iframe src='https://yourdomain.com/embed-player.html' width='640' height='360' frameborder='0' allowfullscreen></iframe>`);"
        }
      ]
    }
  });
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
// function speakMessage() {
//   let messageText = document.getElementById("popupMessage").innerText;
//   let speech = new SpeechSynthesisUtterance(messageText);
//   speech.lang = "en-UK"; // British English accent
//   speech.rate = 1;
//   speech.pitch = 1;
//   speech.volume = 1;

//   // Fix for Chrome & Safari: Wait until voices are loaded
//   let voicesLoaded = false;
//   speechSynthesis.onvoiceschanged = function () {
//     if (!voicesLoaded) {
//       let voices = speechSynthesis.getVoices();
//       if (voices.length > 0) {
//         speech.voice = voices.find(voice => voice.lang === "en-UK") || voices[0];
//         speechSynthesis.speak(speech);
//         voicesLoaded = true;
//       }
//     }
//   };
// }
