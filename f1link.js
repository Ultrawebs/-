// Load JW Player key
jwplayer.key = 'XSuP4qMl+9tK17QNb+4+th2Pm9AWgMO/cYH8CI0HGGr7bdjo';

const videoLinks = {
    australian: {
        FP1: "https://dai.fancode.com/primary/114686_english_hls_6567ta-di_backup/vod_93_master.m3u8",
        FP2: "https://dai.fancode.com/primary/114687_english_hls_6308ta-no_backup/vod_160_master.m3u8",
        FP3: "https://dai.fancode.com/primary/114688_english_hls_6234ta-di_backup/vod_825_master.m3u8",
        Qualifying: "https://dai.fancode.com/primary/114689_english_hls_5992ta-di_backup/vod_707_master.m3u8",
        Race: "https://example.com/australian_race.m3u8"
    },
    chinese: {
        FP1: "https://example.com/bahrain_fp1.m3u8",
        Sprint Qualifying: "https://dai.fancode.com/primary/114689_english_hls_5992ta-di_backup/vod_707_master.m3u8",
        Sprint: "https://example.com/bahrain_fp3.m3u8",
        Qualifying: "https://example.com/bahrain_qualifying.m3u8",
        Race: "https://example.com/bahrain_race.m3u8"
    },
    monaco: {
        FP1: "https://example.com/monaco_fp1.m3u8",
        FP2: "https://example.com/monaco_fp2.m3u8",
        FP3: "https://example.com/monaco_fp3.m3u8",
        Qualifying: "https://example.com/monaco_qualifying.m3u8",
        Race: "https://example.com/monaco_race.m3u8"
    }
};

function updateSessionOptions() {
    const gpSelection = document.getElementById("gpSelection").value;
    const sessionSelection = document.getElementById("sessionSelection");

    sessionSelection.innerHTML = '<option value="" disabled selected>Select Session</option>';
    sessionSelection.disabled = false;

    Object.keys(videoLinks[gpSelection]).forEach(session => {
        let option = document.createElement("option");
        option.value = videoLinks[gpSelection][session];
        option.textContent = session;
        sessionSelection.appendChild(option);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const gpSelection = document.getElementById("gpSelection");
    const dropdownIcon = document.querySelector(".dropdown-icon");

    gpSelection.addEventListener("click", function () {
        dropdownIcon.classList.toggle("rotate");
    });

    gpSelection.addEventListener("blur", function () {
        dropdownIcon.classList.remove("rotate");
    });
});


function playVideo(videoUrl) {
    jwplayer("player-container").setup({
        aspectratio: '16:9',
        width: '100%',
        file: videoUrl,
        image: 'https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/8382b094-4a8d-4719-a656-3afa74e3818f/156bd909-72ac-47f9-9c65-f8f3b6553de6/1194x672/match/image.jpg',
        autostart: true,
        captions: { color: '#ffb800', fontSize: 30, backgroundOpacity: 0 },
        abouttext: 'Ultrawebs(HM)',
        aboutlink: 'https://linktr.ee/ultrawebs',
        logo: {
            file: 'https://media.formula1.com/image/upload/f_auto,c_limit,w_285,q_auto/f_auto/q_auto/fom-website/etc/designs/fom-website/images/F1_75_Logo',
            position: 'bottom-right',
            margin: '20',
            hide: 'false',
            size: '05%'
        },
        fullscreen: {
            enabled: true,
            displayLabel: true,
            label: 'Exit Fullscreen',
        },
        playbackRateControls: true
    });
}
