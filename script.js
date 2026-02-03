const pages = {
    home: `
    <div class="header">
        <h1>Watching Yu</h1>
        <p>
            Hua Chenyu is a C-pop singer known for powerful vocals and captivating live performances.
        </p>
    </div>
    `,
  
    about: `
        <div class="header">
            <h1>About Hua Chenyu</h1>
            <p>
                Hua Chenyu (华晨宇) is known for genre-defying music, theatrical performances,
                and emotionally intense vocals.
            </p>
        </div>
    `,
  
    albums: `
        <div class="header">
            <h1>Albums, EPs & Singles</h1>
            <p>Click an album to explore songs and lyrics.</p>
        </div>
        <div class="albums">
            <div class="album-card" data-album="album6">
                <img src="albums/tippingpoint.jpeg" alt="Album 6">
                <h3>Tipping Point (量变临界点)</h3>
            </div>
            <div class="album-card" data-album="album5">
                <img src="albums/Hope.jpeg" alt="Album 5">
                <h3>希忘Hope</h3>
            </div>
            <div class="album-card" data-album="album4">
                <img src="albums/NewWorld.jpeg" alt="Album 4">
                <h3>New World (新世界)</h3>
            </div>
            <div class="album-card" data-album="album3">
                <img src="albums/H.jpeg" alt="Album 3">
                <h3>H</h3>
            </div>
            <div class="album-card" data-album="album2">
                <img src="albums/Aliens.jpg" alt="Album 2">
                <h3>Aliens (异类)</h3>
            </div>
            <div class="album-card" data-album="album1">
                <img src="albums/Quasimodo'sGift.jpg" alt="Album 1">
                <h3>Quasimodo's Gift (卡西莫多的礼物)</h3>
            </div>
        </div>
    `,
  
    updates: `
        <div class="header">
            <h1>Updates</h1>
            <p>Latest performances, releases, and news.</p>
        </div>
    `
  };

const albums = {
    album1: `
        <div class="header">
            <h1>Quasimodo's Gift (卡西莫多的礼物)</h1>
            <div class="album-display">
                <img src="albums/Quasimodo'sGift.jpg" alt="Album 1">
                <div class="tracklist">
                    <span style="text-decoration: underline;" data-track="WhyNobodyFights">Why Nobody Fights</span>
                    <span style="text-decoration: underline;" data-track="Shimmer">Shimmer (微光)</span>
                    <span style="text-decoration: underline;" data-track="LetYouGo">Let You Go</span>
                    <span style="text-decoration: underline;" data-track="AshesFromFireworks">Ashes From Fireworks (烟火里的尘埃)</span>
                    <span style="text-decoration: underline;" data-track="BombSquad">Bomb Squad (拆弹专家)</span>
                    <span style="text-decoration: underline;" data-track="Travelling">Travelling (环游)</span>
                    <span style="text-decoration: underline;" data-track="AllLonely">All Lonely (我们都是孤独的)</span>
                    <span style="text-decoration: underline;" data-track="Eternity">Eternity (不朽)</span>
                    <span style="text-decoration: underline;" data-track="Quasimodo'sGift">Quasimodo's Gift (卡西莫多的礼物)</span>
                    <span style="text-decoration: underline;" data-track="BedtimeStory">Bedtime Story (枕边故事)</span>
                </div>
            </div>
        </div>
    `,
  
    album2: `
        <div class="header">
            <h1>Aliens (异类)</h1>
            <div class="album-display">
                <img src="albums/Aliens.jpg" alt="Album 2">
                <div class="tracklist">
                    <span style="text-decoration: underline;" data-track="IDon'tCare">I Don't Care (我管你)</span>
                    <span style="text-decoration: underline;" data-track="KingsandPaupers">Kings and Paupers (国王与乞丐) feat. Aska Yang</span>
                    <span style="text-decoration: underline;" data-track="TheMayfly">The Mayfly (浮游)</span>
                    <span style="text-decoration: underline;" data-track="TheAntonym">The Antonym (反义词)</span>
                    <span style="text-decoration: underline;" data-track="Aliens">Aliens (异类)</span>
                    <span style="text-decoration: underline;" data-track="TheEscapefromUtopia">The Escape from Utopia (逃离乌托邦)</span>
                    <span style="text-decoration: underline;" data-track="TheWorldisaZoo">The World is a Zoo (世界是个动物园)</span>
                    <span style="text-decoration: underline;" data-track="TheMask">The Mask (变相怪杰)</span>
                    <span style="text-decoration: underline;" data-track="ForMyFutureChild">For My Future Child (写给未来的孩子)</span>
                    <span style="text-decoration: underline;" data-track="TheSaltoftheEarth">The Salt of the Earth (地球之盐)</span>
                    <span style="text-decoration: underline;" data-track="TheGiantinSorrow">The Giant in Sorrow (忧伤的巨人)</span>
                </div>
            </div>
        </div>
    `,
  
    album3: `
        <div class="header">
            <h1>H</h1>
            <div class="album-display">
                <img src="albums/H.jpeg" alt="Album 3">
                <div class="tracklist">
                    <span style="text-decoration: underline;" data-track="HereWeAre">Here We Are</span>
                    <span style="text-decoration: underline;" data-track="HugeDeer">Huge Deer (巨鹿)</span>
                    <span style="text-decoration: underline;" data-track="ToBeFree">To Be Free</span>
                    <span style="text-decoration: underline;" data-track="ForForever">For Forever</span>
                    <span style="text-decoration: underline;" data-track="AFewMilesAwayFromLoneliness">A Few Miles Away From Loneliness (我离孤单几公里)</span>
                    <span style="text-decoration: underline;" data-track="TheYesterdayThatDisappeared">The Yesterday That Disappeared (消失的昨天)</span>
                    <span style="text-decoration: underline;" data-track="TheCreator">The Creator (造物者)</span>
                    <span style="text-decoration: underline;" data-track="MySkateShoes">My Skate Shoes 2016 (我的滑板鞋2016)</span>
                </div>
            </div>
        </div>
    `,
  
    album4: `
        <div class="header">
            <h1>New World (新世界)</h1>
            <div class="album-display">
                <img src="albums/NewWorld.jpeg" alt="Album 4">
                <div class="tracklist">
                    <span style="text-decoration: underline;" data-track="Bullfighting">Bullfighting (斗牛)</span>
                    <span style="text-decoration: underline;" data-track="IReallyWantToLoveThisWorld">I Really Want To Love This World (好想爱这个世界啊)</span>
                    <span style="text-decoration: underline;" data-track="Madhouse">Madhouse (疯人院)</span>
                    <span style="text-decoration: underline;" data-track="TalkingtoMartianChildren">Talking to Martian Children (与火星的孩子说话)</span>
                    <span style="text-decoration: underline;" data-track="SevenPersonalities">Seven Personalities (七重人格)</span>
                    <span style="text-decoration: underline;" data-track="GodTree">God Tree (神树)</span>
                    <span style="text-decoration: underline;" data-track="Arrival">Arrival (降临)</span>
                    <span style="text-decoration: underline;" data-track="NewWorld">New World (新世界)</span>
                </div>
            </div>
        </div>
    `,
    album5: `
        <div class="header">
            <h1>希忘Hope</h1>
            <div class="album-display">
                <img src="albums/Hope.jpeg" alt="Album 5">
                <div class="tracklist">
                    <span style="text-decoration: underline;" data-track="AirplaneMode">Airplane Mode (飞行模式)</span>
                    <span style="text-decoration: underline;" data-track="TheFlowerinthSmallTown">The Flower in the Small Town (小镇里的花)</span>
                    <span style="text-decoration: underline;" data-track="TheFlowerinthSmallTownTradVersion">The Flower in the Small Town - Traditional Music Version (小镇里的花-民乐版)</span>
                    <span style="text-decoration: underline;" data-track="BlackandWhiteArtist">Black and White Artist (黑白艺术家)</span>
                    <span style="text-decoration: underline;" data-track="IReallyWantMyselfBack">I Really Want Myself Back (好想我回来啊)</span>
                    <span style="text-decoration: underline;" data-track="MeetWhenFlowersFall">Meet When Flowers Fall (花落时相遇)</span>
                    <span style="text-decoration: underline;" data-track="WatchtheSunriseTogether">Come, Let's Watch the Sunrise Together (走，一起去看日出吧)</span>
                    <span style="text-decoration: underline;" data-track="GrowingTowardstheSun">Growing Towards the Sun (向阳而生)</span>
                    <span style="text-decoration: underline;" data-track="LighttheBonfireattheEndoftheMilkyWay">Light the Bonfire at the End of the Milky Way (点燃银河尽头的篝火)</span>
                    <span style="text-decoration: underline;" data-track="WhentheWorldHasForgottenMe">When the World Has Forgotten Me (当全世界忘了我)</span>
                    <span style="text-decoration: underline;" data-track="IllusionsandReality">Illusions and Reality (虚幻与现实)</span>
                </div>
            </div>
        </div>
    `,
    album6: `
        <div class="header">
            <h1>Tipping Point (量变临界点)</h1>
            <div class="album-display">
                <img src="albums/tippingpoint.jpeg" alt="Album 6">
                <div class="tracklist">
                    <span style="text-decoration: underline;" data-track="SeaofWind">Sea of Wind (风之海)</span>
                    <span style="text-decoration: underline;" data-track="OrdinarytoUnordinaryLife">Ordinary to Unordinary Life (普通到不普通的人生)</span>
                    <span style="text-decoration: underline;" data-track="The Beauties Unknown to Me">The Beauties Unknown to Me (那些我尚未知道的美丽)</span>
                    <span style="text-decoration: underline;" data-track="TheFlameThatWillNeverBeExtinguished">The Flame That Will Never Be Extinguished (永不熄灭的火焰)</span>
                    <span style="text-decoration: underline;" data-track="TheShipofTheseus">The Ship of Theseus (忒修斯的船)</span>
                    <span style="text-decoration: underline;" data-track="BizarrePsychology">Bizarre Psychology (怪诞心理学)</span>
                    <span style="text-decoration: underline;" data-track="WarmHouse">Warm House (温暖的房子)</span>
                    <span style="text-decoration: underline;" data-track="NeverMeetAgain">Never Meet Again (不重逢)</span>
                    <span style="text-decoration: underline;" data-track="LoveofHumans">Love of Humans (人之爱)</span>
                    <span style="text-decoration: underline;" data-track="IntheMorningLight">In the Morning Light, There's You (晨光里有你)</span>
                </div>
            </div>
        </div>
    `
  };

const content = document.getElementById("content");

function loadPage(page) {
    content.classList.remove("fade");
  
    void content.offsetWidth;
  
    content.innerHTML = pages[page] || pages.home;
    content.classList.add("fade");
  }

  function loadAlbum(album) {
    content.classList.remove("fade");
  
    void content.offsetWidth;
  
    content.innerHTML = albums[album];
    content.classList.add("fade");
  }
  

document.querySelectorAll(".navigation span").forEach(item => {
    item.addEventListener("click", () => {
      loadPage(item.dataset.page);
    });
  });

loadPage("home");

content.addEventListener("click", (e) => {
    const card = e.target.closest(".album-card");
    if (!card) return;
  
    loadAlbum(card.dataset.album);
  });
  


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
