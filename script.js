console.log("script.js loaded");

let player;
let isPlaying = false;
let playerReady = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'eSvnAyHFoyo',
        playerVars: {
          autoplay: 0,
          controls: 0,
          loop: 1,
          playlist: 'eSvnAyHFoyo'
        },
        events: {
          onReady: () => {
            playerReady = true;
            console.log("YouTube player ready");
          }
        }
      });
    }


document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("music-toggle");

  button.addEventListener("click", () => {
    console.log("button clicked, ready =", playerReady);
  
    if (!playerReady) return;
  
    if (!isPlaying) {
      player.playVideo();
      button.textContent = "⏸ Pause Music";
    } else {
      player.pauseVideo();
      button.textContent = "▶ Play Music";
    }
  
    isPlaying = !isPlaying;
  });
  
});
