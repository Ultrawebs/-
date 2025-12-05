// F1 Link - JavaScript Code
// Video Links Data
const videoLinks = {
  australian: {
    "Practice 1": "https://dai.fancode.com/primary/114686_english_hls_6567ta-di_backup/vod_93_master.m3u8",
    "Practice 2": "https://dai.fancode.com/primary/114687_english_hls_6308ta-no_backup/vod_160_master.m3u8",
    "Practice 3": "https://dai.fancode.com/primary/114688_english_hls_6234ta-di_backup/vod_825_master.m3u8",
    "Qualifying": "https://dai.fancode.com/primary/114689_english_hls_5992ta-di_backup/vod_707_master.m3u8",
    "Race": "https://dai.fancode.com/primary/114690_english_hls_4902ta-no_backup/vod_103_master.m3u8"
  },
  chinese: {
    "Practice 1": "https://dai.fancode.com/primary/118386_english_hls_6228ta-no_backup/vod_379_master.m3u8",
    "Sprint Qualifying": "https://dai.fancode.com/primary/118387_english_hls_6067ta-di_backup/vod_821_master.m3u8",
    "Sprint": "https://dai.fancode.com/secondary/118388_english_hls_5414ta-di_backup/vod_363_master.m3u8",
    "Qualifying": "https://dai.fancode.com/secondary/118389_english_hls_5305ta-di_backup/vod_142_master.m3u8",
    "Race": "https://dai.fancode.com/secondary/118390_english_hls_6251ta-no_backup/vod_112_master.m3u8"
  },
  japanese: {
    "Practice 1": "https://dai.fancode.com/secondary/118391_english_hls_5852ta-no_backup/vod_347_master.m3u8",
    "Practice 2": "https://dai.fancode.com/secondary/118392_english_hls_5185ta-di_backup/vod_887_master.m3u8",
    "Practice 3": "https://dai.fancode.com/secondary/118393_english_hls_6984ta-di_backup/vod_985_master.m3u8",
    "Qualifying": "https://dai.fancode.com/secondary/118394_english_hls_8320ta-di_backup/vod_191_master.m3u8",
    "Race": "https://dai.fancode.com/secondary/118395_english_hls_2588ta-di_backup/vod_456_master.m3u8"
  },
  bahrain: {
    "Practice 1": "https://dai.fancode.com/primary/118396_english_hls_5727ta-di_backup/vod_698_master.m3u8",
    "Practice 2": "https://dai.fancode.com/primary/118397_english_hls_5782ta-no_backup/vod_743_master.m3u8",
    "Practice 3": "https://dai.fancode.com/primary/118398_english_hls_5283ta-no_backup/vod_201_master.m3u8",
    "Qualifying": "https://dai.fancode.com/primary/118399_english_hls_4632ta-no_backup/vod_630_master.m3u8",
    "Race": "https://dai.fancode.com/primary/118400_english_hls_411ta-di_backup/vod_375_master.m3u8"
  },
  saudi: {
    "Practice 1": "https://dai.fancode.com/primary/118401_english_hls_6567ta-di_backup/vod_236_master.m3u8",
    "Practice 2": "https://dai.fancode.com/primary/118402_english_hls_6446ta-no_backup/vod_225_master.m3u8",
    "Practice 3": "https://dai.fancode.com/primary/118403_english_hls_5644ta-no_backup/vod_248_master.m3u8",
    "Qualifying": "https://dai.fancode.com/primary/118404_english_hls_5585ta-no_backup/vod_377_master.m3u8",
    "Race": "https://dai.fancode.com/primary/118405_english_hls_6222ta-di_backup/vod_897_master.m3u8"
  },
  miami: {
    "Practice 1": "https://dai.fancode.com/primary/118406_english_hls_5990ta-di_backup/vod_240_master.m3u8",
    "Sprint Qualifying": "https://dai.fancode.com/primary/118407_english_hls_5896ta-di_h264_backup/vod_288_master.m3u8",
    "Sprint": "https://dai.fancode.com/primary/118408_english_hls_39117ta-di_h264_backup/vod_308_master.m3u8",
    "Qualifying": "https://dai.fancode.com/primary/118409_english_hls_34242ta-di_h264_backup/vod_574_master.m3u8",
    "Race": "https://dai.fancode.com/primary/118410_english_hls_1689ta-di_h264_backup/vod_765_master.m3u8"
  },
  "emiliaromagna": {
    "Practice 1": "https://dai.fancode.com/primary/118411_english_hls_10486ta-di_h264_backup/vod_517_master.m3u8",
    "Practice 2": "https://dai.fancode.com/primary/118412_english_hls_19011ta-di_h264_backup/vod_107_master.m3u8",
    "Practice 3": "https://dai.fancode.com/primary/118413_english_hls_47187ta-di_h264_backup/vod_798_master.m3u8",
    "Qualifying": "https://dai.fancode.com/primary/118414_english_hls_70319ta-di_h264_backup/vod_975_master.m3u8",
    "Race": "https://dai.fancode.com/primary/118415_english_hls_27728ta-di_h264_backup/vod_408_master.m3u8"
  },
  monaco: {
    "Practice 1": "https://dai.fancode.com/primary/118416_english_hls_5820ta-di_h264_backup/vod_993_master.m3u8",
    "Practice 2": "https://dai.fancode.com/primary/118417_english_hls_70306ta-di_h264_backup/vod_483_master.m3u8",
    "Practice 3": "https://dai.fancode.com/primary/118418_english_hls_92070ta-di_h264_backup/vod_951_master.m3u8",
    "Qualifying": "https://dai.fancode.com/primary/118419_english_hls_85151ta-di_h264_backup/vod_46_master.m3u8",
    "Race": "https://dai.fancode.com/secondary/118420_english_hls_54361ta-di_h264_backup/vod_152_master.m3u8"
  },
  spanish: {
    "Practice 1": "https://dai.fancode.com/primary/118421_english_hls_25827ta-di_h264_backup/vod_546_master.m3u8",
    "Practice 2": "https://dai.fancode.com/secondary/118422_english_hls_41851ta-di_h264_backup/vod_459_master.m3u8",
    "Practice 3": "https://dai.fancode.com/secondary/118423_english_hls_96739ta-di_h264_backup/vod_869_master.m3u8",
    "Qualifying": "https://dai.fancode.com/secondary/118424_english_hls_78898ta-di_h264_backup/vod_568_master.m3u8",
    "Race": "https://dai.fancode.com/secondary/118425_english_hls_43851ta-di_h264_backup/vod_208_master.m3u8"
  },
  canadian: {
    "Practice 1": "https://dai.fancode.com/secondary/118426_english_hls_10720ta-di_h264_backup/vod_380_master.m3u8",
    "Practice 2": "https://dai.fancode.com/primary/118427_english_hls_49507ta-di_h264_backup/vod_936_master.m3u8",
    "Practice 3": "https://dai.fancode.com/secondary/118428_english_hls_51272ta-di_h264_backup/vod_789_master.m3u8",
    "Qualifying": "https://dai.fancode.com/secondary/118429_english_hls_34953ta-di_h264_backup/vod_464_master.m3u8",
    "Race": "https://dai.fancode.com/secondary/118430_english_hls_70552ta-di_h264_backup/vod_715_master.m3u8"
  },
  austrian: {
    "Practice 1": "https://dai.fancode.com/secondary/118431_english_hls_70820ta-di_h264_backup/vod_272_master.m3u8",
    "Practice 2": "https://dai.fancode.com/secondary/118432_english_hls_14216ta-di_h264_backup/vod_81_master.m3u8",
    "Practice 3": "https://dai.fancode.com/secondary/118433_english_hls_13110ta-di_h264_backup/vod_841_master.m3u8",
    "Qualifying": "https://dai.fancode.com/secondary/118434_english_hls_84566ta-di_h264_backup/vod_953_master.m3u8",
    "Race": "https://dai.fancode.com/secondary/118435_english_hls_97553ta-di_h264_backup/vod_207_master.m3u8"
  },
  british: {
    "Practice 1": "https://dai.fancode.com/secondary/118436_english_hls_8809ta-di_h264_backup/vod_902_master.m3u8",
    "Practice 2": "https://in-mc-vod.fancode.com/delhi/118437_english_hls_70462ta-di_h264_backup/vod_551_index.m3u8",
    "Practice 3": "https://in-mc-vod.fancode.com/delhi/118438_english_hls_32454ta-di_h264_backup/vod_771_index.m3u8",
    "Qualifying": "https://in-mc-vod.fancode.com/delhi/118439_english_hls_67086ta-di_h264_backup/vod_392_index.m3u8",
    "Race": "https://in-mc-vod.fancode.com/delhi/118440_english_hls_46346ta-di_h264_backup/vod_243_index.m3u8"
  },
  belgian: {
    "Practice 1": "https://in-mc-vod.fancode.com/delhi/118441_english_hls_61743ta-di_h264_backup/vod_773_index.m3u8",
    "Sprint Qualifying": "https://in-mc-vod.fancode.com/delhi/118442_english_hls_49925ta-di_h264_backup/vod_778_index.m3u8",
    "Sprint": "https://in-mc-vod.fancode.com/delhi/118443_english_hls_50075ta-di_h264_backup/vod_699_index.m3u8",
    "Qualifying": "https://in-mc-vod.fancode.com/delhi/118444_english_hls_17828ta-di_h264_backup/vod_444_index.m3u8",
    "Race": "https://in-mc-vod.fancode.com/delhi/118445_english_hls_1572ta-di_h264_backup/vod_894_index.m3u8"
  },
  hungarian: {
    "Practice 1": "https://in-mc-vod.fancode.com/delhi/118446_english_hls_1954ta-di_h264_backup/vod_765_index.m3u8",
    "Practice 2": "https://in-mc-vod.fancode.com/delhi/118447_english_hls_44779ta-di_h264_backup/vod_398_index.m3u8",
    "Practice 3": "https://in-mc-vod.fancode.com/delhi/118448_english_hls_71018ta-di_h264_backup/vod_55_index.m3u8",
    "Qualifying": "https://in-mc-vod.fancode.com/delhi/118449_english_hls_71829ta-di_h264_backup/vod_515_index.m3u8",
    "Race": "https://in-mc-vod.fancode.com/delhi/118450_english_hls_4808ta-di_h264_backup/vod_215_index.m3u8"
  },
  dutch: {
    "Practice 1": "https://in-mc-vod.fancode.com/delhi/118451_english_hls_4d4276e2ac75189ta-di_h264_backup/vod_893_index.m3u8",
    "Practice 2": "https://in-mc-vod.fancode.com/delhi/118452_english_hls_d4d6aae2f868537ta-di_h264_backup/vod_652_index.m3u8",
    "Practice 3": "https://in-mc-vod.fancode.com/delhi/118453_english_hls_7cb1a5f9c580379ta-di_h264_backup/vod_275_index.m3u8",
    "Qualifying": "https://in-mc-vod.fancode.com/delhi/118454_english_hls_75b049919132925ta-di_h264_backup/vod_594_index.m3u8",
    "Race": "https://in-mc-vod.fancode.com/delhi/118455_english_hls_a0c6e33c7d56203ta-di_h264_backup/vod_252_index.m3u8"
  },
  italian: {
    "Practice 1": "https://in-mc-vod.fancode.com/mumbai/118456_english_hls_41b9d06e6a58434ta-di_h264_backup/vod_739_index.m3u8",
    "Practice 2": "https://in-mc-vod.fancode.com/delhi/118457_english_hls_ac3f3ca6d231808ta-di_h264_backup/vod_48_index.m3u8",
    "Practice 3": "https://in-mc-vod.fancode.com/delhi/118458_english_hls_5d9f3f4f9290897ta-di_h264_backup/vod_45_index.m3u8",
    "Qualifying": "https://in-mc-vod.fancode.com/delhi/118459_english_hls_1b2d96c26e69200ta-di_h264_backup/vod_204_index.m3u8",
    "Race": "https://in-mc-vod.fancode.com/delhi/118460_english_hls_5871eb29c118066ta-di_h264_backup/vod_59_index.m3u8"
  },
  azerbaijan: {
    "Practice 1": "https://in-mc-vod.fancode.com/delhi/118461_english_hls_622a351da356645ta-di_h264_backup/vod_127_index.m3u8",
    "Practice 2": "https://in-mc-vod.fancode.com/delhi/118462_english_hls_feb4efd2ea4782ta-di_h264_backup/vod_457_index.m3u8",
    "Practice 3": "https://in-mc-vod.fancode.com/delhi/118463_english_hls_a98f8ba8bb77588ta-di_h264_backup/vod_484_index.m3u8",
    "Qualifying": "https://in-mc-vod.fancode.com/delhi/118464_english_hls_8c7076f28b65802ta-di_h264_backup/vod_686_index.m3u8",
    "Race": "https://in-mc-vod.fancode.com/delhi/118465_english_hls_003449eec030703ta-di_h264_backup/vod_648_index.m3u8"
  },
  singapore: {
    "Practice 1": "https://in-mc-vod.fancode.com/delhi/118466_english_hls_c948f12e2572869ta-di_h264_backup/vod_147_index.m3u8",
    "Practice 2": "https://in-mc-vod.fancode.com/delhi/118467_english_hls_d5ee897ccb96314ta-di_h264_backup/vod_899_index.m3u8",
    "Practice 3": "https://in-mc-vod.fancode.com/delhi/118468_english_hls_8d3f3e437861695ta-di_h264_backup/vod_399_index.m3u8",
    "Qualifying": "https://in-mc-vod.fancode.com/delhi/118469_english_hls_3daf63bf4b16145ta-di_h264_backup/vod_594_index.m3u8",
    "Race": "https://in-mc-vod.fancode.com/delhi/118470_english_hls_d326dd77a870043ta-di_h264_backup/vod_923_index.m3u8"
  },
  us: {
    "Practice 1": "https://in-mc-vod.fancode.com/mumbai/118471_english_hls_bac4923b1d3256ta-di_h264_backup/vod_95_index.m3u8",
    "Sprint Qualifying": "https://in-mc-vod.fancode.com/mumbai/118472_english_hls_eab5007fdf35308ta-di_h264_backup/vod_693_index.m3u8",
    "Sprint": "https://in-mc-vod.fancode.com/mumbai/118473_english_hls_a44c373cbd14000ta-di_h264_backup/vod_739_index.m3u8",
    "Qualifying": "https://in-mc-vod.fancode.com/mumbai/118474_english_hls_584f9a763a55278ta-di_h264_backup/vod_721_index.m3u8",
    "Race": "https://in-mc-vod.fancode.com/mumbai/118475_english_hls_8d5fa32b4758656ta-di_h264_backup/vod_828_index.m3u8"
  },
  mexico: {
    "Practice 1": "https://in-mc-vod.fancode.com/mumbai/118476_english_hls_30943ca9cd22107ta-di_h264_backup/vod_422_index.m3u8",
    "Practice 2": "https://in-mc-vod.fancode.com/mumbai/118477_english_hls_882310dcf938273ta-di_h264_backup/vod_864_index.m3u8",
    "Practice 3": "https://in-mc-vod.fancode.com/mumbai/118478_english_hls_4e2c6007f727797ta-di_h264_backup/vod_219_index.m3u8",
    "Qualifying": "https://in-mc-vod.fancode.com/mumbai/118479_english_hls_44aa7c496664266ta-di_h264_backup/vod_120_index.m3u8",
    "Race": "https://in-mc-vod.fancode.com/delhi/118480_english_hls_ade6b7414290855ta-di_h264_backup/vod_767_index.m3u8"
  },
  brazilian: {
    "Practice 1": "https://in-mc-vod.fancode.com/delhi/118481_english_hls_90075d19fd34960_1ta-di_h264_backup/vod_280_index.m3u8",
    "Sprint Qualifying": "https://in-mc-vod.fancode.com/delhi/118482_english_hls_6d35c9eae528043_1ta-di_h264_backup/vod_953_index.m3u8",
    "Sprint": "https://in-mc-vod.fancode.com/delhi/118483_english_hls_74edb8d9e494192_1ta-di_h264_backup/vod_145_index.m3u8",
    "Qualifying": "https://in-mc-vod.fancode.com/delhi/118484_english_hls_de92015d7657272_1ta-di_h264_backup/vod_930_index.m3u8",
    "Race": "https://in-mc-vod.fancode.com/delhi/118485_english_hls_155190a67c54463_1ta-di_h264_backup/vod_104_index.m3u8"
  },
  lasvegas: {
    "Practice 1": "https://in-mc-vod.fancode.com/mumbai/118486_english_hls_85280cd21371743_1ta-di_h264_backup/vod_753_index.m3u8",
    "Practice 2": "https://in-mc-vod.fancode.com/delhi/118487_english_hls_f8d5fa9f4f23514_1ta-di_h264_backup/vod_298_index.m3u8",
    "Practice 3": "https://in-mc-vod.fancode.com/delhi/118488_english_hls_bf2167a08a44876_1ta-di_h264_backup/vod_12_index.m3u8",
    "Qualifying": "https://in-mc-vod.fancode.com/delhi/118489_english_hls_4fb7cbb32a24937_1ta-di_h264_backup/vod_288_index.m3u8",
    "Race": "https://in-mc-vod.fancode.com/delhi/118490_english_hls_fa6f9ea74513356_1ta-di_h264_backup/vod_632_index.m3u8"
  },
  qatar: {
    "Practice 1": "https://in-mc-vod.fancode.com/delhi/118491_english_hls_af47e256a981621_1ta-di_h264_backup/vod_205_index.m3u8",
    "Sprint Qualifying": "https://in-mc-vod.fancode.com/delhi/118492_english_hls_81d0a509129493_1ta-di_h264_backup/vod_672_index.m3u8",
    "Sprint": "https://in-mc-vod.fancode.com/delhi/118493_english_hls_bb93db6b3391387_1ta-di_h264_backup/vod_579_index.m3u8",
    "Qualifying": "https://in-mc-vod.fancode.com/delhi/118494_english_hls_87e3ca5ff380629_1ta-di_h264_backup/vod_614_index.m3u8",
    "Race": "https://in-mc-vod.fancode.com/delhi/118495_english_hls_d6f249569a4975_1ta-di_h264_backup/vod_7_index.m3u8"
  },
  abudhabi: {
    "Practice 1": "https://in-mc-vod.fancode.com/delhi/118496_english_hls_4add3c4fc669938_1ta-di_h264_backup/vod_703_index.m3u8",
    "Practice 2": "https://in-mc-vod.fancode.com/delhi/118497_english_hls_2fb6515cfe6260_1ta-di_h264_backup/vod_714_index.m3u8",
    "Practice 3": "link",
    "Qualifying": "link",
    "Race": "link"
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
