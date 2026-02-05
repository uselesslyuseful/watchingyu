const pages = {
    home: `
        <div class="header">
            <h1>Watching Yu</h1>
            <h2><span lang="zh">欢迎回家。</span> Welcome home.</h2>
            <iframe width="840" height="473" src="https://www.youtube.com/embed/2nCdyxknOKU?si=ZvPX_2hUCQxtw9Ya" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div class="about">
                <div class="about-text">
                    <h2>About Hua Chenyu</h2>
                    <p>Hua Chenyu <span lang="zh">(华晨宇)</span> is a C-pop singer known for powerful vocals and captivating live performances. Born on 7th Feb, 1990, he debuted in 2013 through the Super Boy <span lang="zh">(快乐男声)</span> variety show. Since then, he has won many awards for his music and concerts, and remains one of the top singers in China. He is currently touring, with Mars Concerts coming up in Shenzhen.</p>
                    <p>Having been interested in songwriting since he was a kid, Hua Chenyu majored in music at the Wuhan Conservatory of Music. He plays multiple instruments, ranging from the flute to the piano, and has written music in a wide variety of genres. Through all of his music, his individuality and uniqueness shines, his style utterly irreplaceble and beloved by many.</p>
                    <p>Hua Chenyu's concerts - Mars concerts - are well-known for their beauty. His concerts have never failed to bring something new to the table, from 3-D visual effects to drones and fireworks. In 2024, Hua Chenyu held a Sunrise concert that started at 3am. During this concert, him and more than 130k fans watched the sunrise together.</p>
                    <p>Some of Hua Chenyu's awards include:</p>
                    <ul>
                        <li>2016 MAMA Best Chinese Artist</li>
                        <li>Champion of 2020 Singer competition, Runner-up of 2018 Singer competition</li>
                        <li>2025 Most Album Sales (China)</li>
                        <li>2021、2023、2024 Platinum MUSE Design Awards (Mars Concerts)</li>
                    </ul>
                    <p>Here are all of Hua Chenyu's official socials: <a href="https://open.spotify.com/artist/7v7bP8NfcMYh4sDADEAy6Z">Spotify</a>, <a href="https://www.youtube.com/@HuaChenYu_huachenyu0207">Youtube</a>, <a href="https://weibo.com/u/1624923463">Weibo</a>, <a href="https://space.bilibili.com/477569206">Bilibili (Studio)</a>, <a href="https://space.bilibili.com/490346911">Bilibili (Concerts)</a>
                </div>
                <img src="sunrise-image.jpeg" alt="HomeImg">
            </div>
        </div>
    `,
  
    about: `
        <div class="header">
            <h1>About Us</h1>
            <p>
                This is an unofficial fansite. The owner of this fansite has no contact or correlation with Hua Chenyu, nor his team. The fansite is mainly a personal project, with zero monetization or commercial value. 
            </p>
            <h3>Contact Us</h3>
            <p>Gmail: sleep.cats.books@gmail.com</p>
            <p>I assume you know my github considering there's no other way you could have gotten here</p>
        </div>
    `,
  
    albums: `
        <div class="header">
            <h1>Discography</h1>
            <h2>Albums</h2>
            <p>Click an album to explore songs and lyrics.</p>
        </div>
        <div class="albums">
            <div class="display-card" data-album="album6" data-type="album">
                <img src="albums/tippingpoint.jpeg" alt="Album 6">
                <h3>Tipping Point <span lang="zh">(量变临界点)</span></h3>
            </div>
            <div class="display-card" data-album="album5" data-type="album">
                <img src="albums/Hope.jpeg" alt="Album 5">
                <h3><span lang="zh">希忘</span>Hope</h3>
            </div>
            <div class="display-card" data-album="album4" data-type="album">
                <img src="albums/NewWorld.jpeg" alt="Album 4">
                <h3>New World <span lang="zh">(新世界)</span></h3>
            </div>
            <div class="display-card" data-album="album3" data-type="album">
                <img src="albums/H.jpeg" alt="Album 3">
                <h3>H</h3>
            </div>
            <div class="display-card" data-album="album2" data-type="album">
                <img src="albums/Aliens.jpg" alt="Album 2">
                <h3>Aliens <span lang="zh">(异类)</span></h3>
            </div>
            <div class="display-card" data-album="album1" data-type="album">
                <img src="albums/Quasimodo'sGift.jpg" alt="Album 1">
                <h3>Quasimodo's Gift <span lang="zh">(卡西莫多的礼物)</span></h3>
            </div>
        </div>

        <div class="header">
            <p></p>
            <h2>Singles</h2>
            <p>Click a single to explore lyrics.</p>
        </div>
        <div class="songs">
            <div class="display-card" data-track="Cancer" data-type="song">
                <img src="songs/Cancer.jpg" alt="Song 1">
                <h3>Cancer <span lang="zh">(癌)</span></h3>
            </div>
            <div class="display-card" data-track="Search" data-type="song">
                <img src="songs/Search.jpeg" alt="Song 2">
                <h3>Search <span lang="zh">(寻)</span></h3>
            </div>
            <div class="display-card" data-track="EqualtoHeaven" data-type="song">
                <img src="songs/EqualtoHeaven.jpg" alt="Song 3">
                <h3>Equal to Heaven <span lang="zh">(齐天)</span></h3>
            </div>
            <div class="display-card" data-track="ImBoring" data-type="song">
                <img src="songs/I'mBoring.jpeg" alt="Song 4">
                <h3>I'm Boring <span lang="zh">(无聊人)</span></h3>
            </div>
            <div class="display-card" data-track="IQ" data-type="song">
                <img src="songs/IQ.jpg" alt="Song 5">
                <h3>250 IQ <span lang="zh">(智商250)</span></h3>
            </div>
            <div class="display-card" data-track="JackdawYouth" data-type="song">
                <img src="songs/JackdawYouth.jpg" alt="Song 6">
                <h3>Jackdaw Youth <span lang="zh">(寒鸦少年)</span></h3>
            </div>
            <div class="display-card" data-track="FlyingConductor" data-type="song">
                <img src="songs/FlyingConductor.jpeg" alt="Song 7">
                <h3>Flying Conductor <span lang="zh">(飞行指挥家)</span></h3>
            </div>
            <div class="display-card" data-track="IconicScene" data-type="song">
                <img src="songs/IconicScene.jpg" alt="Song 8">
                <h3>Iconic Scene <span lang="zh">(名场面)</span></h3>
            </div>
            <div class="display-card" data-track="NoFearofHeat" data-type="song">
                <img src="songs/NoFearofHeat.jpeg" alt="Song 9">
                <h3>No Fear of Heat <span lang="zh">(肆无惧燥)</span></h3>
            </div>
            <div class="display-card" data-track="GrowingTowardstheSunSunrise" data-type="song">
                <img src="songs/GrowingTowardstheSunSunrise.jpg" alt="Song 10">
                <h3>Growing Towards the Sun - Sunrise Version <span lang="zh">(向阳而生-日出版)</span></h3>
            </div>
        </div>
    `,
  
    updates: `
        <div class="header">
            <h1>Updates</h1>
            <p>Latest performances, releases, and news.</p>
        </div>
        <div class="updates">
            <div class="update">
                <img src="updates/ShenZhen.jpeg" alt="ShenZhenConcert">
                <div class="update-text">
                    <h3>Shen Zhen Closing Concert</h3>
                    <p>On Feb 6-8th, Hua Chenyu will be hosting three concerts at Shenzhen Universiade Sports Centre <span lang="zh">(深圳大运中心)</span>, as the closers for his most rceent tour. These concerts will also mark the final time the current four-sided stage design will be used. Hua has implied that a new stage design - and a possible new stage model entirely - will be used in future concerts. Bilibili fan videos will be linked once the concerts have taken place.</p>
                </div>
            </div>
            <div class="update">
                <img src="updates/ShengMingYuanYang.webp" alt="SoundTrek">
                <div class="update-text">
                    <h3>Sound Trek 2025 <span lang="zh">(声名远扬2025)</span></h3>
                    <p>Hua Chenyu participated on this variety show as a teacher. The show achieved considerable popularity due to the interactions between the three main mentors, Na Ying, Duan Xiumei, and Hua Chenyu. The program was streamed every Sunday for 12 episodes, and ended on Jan 25. Replays can be found in <a href="https://www.youtube.com/watch?v=vEnznPJqRwI&list=PLUM8x224JrX9axJTlmFd2jNbfEoKEjer9">this playlist<a>.</p>
                </div>
            </div>
            <div class="update">
                <img src="updates/HunanTV.jpg" alt="KuaNian">
                <div class="update-text">
                    <h3>Hunan TV 2026 New Year's Concert <span lang="zh">(湖南卫视跨年演唱会2026)</span></h3>
                    <p>Hua Chenyu was the closing performance on Hunan TV's 2026 New Year's Concert, singing a solo medley of "Great Sage Equal to Heaven", "The King and the Pauper", as well as "Growing Towards the Sun". He also led the idol group Teens in Times in a parade, as well as the six Sound Trek 2025 finalists in singing his signature single, "I Don't Care". Fans embraced the new year together with him at the centre of the performers. An interaction between him and Jackson Wang went viral, when Hua, a day after the event, reported that Jackson shaking his arm at the event had fixed an old issue with his shoulder. </p>
                </div>
            </div>

        </div>

    `
  };

const albums = {
    album1: `
        <div class="header">
            <h1>Quasimodo's Gift (<span lang="zh">卡西莫多的礼物</span>)</h1>
            <div class="album-display">
                <img src="albums/Quasimodo'sGift.jpg" alt="Album 1">
                <div class="tracklist">
                    <span style="text-decoration: underline;" data-track="WhyNobodyFights">Why Nobody Fights</span>
                    <span style="text-decoration: underline;" data-track="Shimmer">Shimmer (<span lang="zh">微光</span>)</span>
                    <span style="text-decoration: underline;" data-track="LetYouGo">Let You Go</span>
                    <span style="text-decoration: underline;" data-track="AshesFromFireworks">Ashes From Fireworks (<span lang="zh">烟火里的尘埃</span>) </span>
                    <span style="text-decoration: underline;" data-track="BombSquad">Bomb Squad (<span lang="zh">拆弹专家</span>)</span>
                    <span style="text-decoration: underline;" data-track="Travelling">Travelling (<span lang="zh">环游</span>)</span>
                    <span style="text-decoration: underline;" data-track="AllLonely">All Lonely (<span lang="zh">我们都是孤独的</span>)</span>
                    <span style="text-decoration: underline;" data-track="Eternity">Eternity (<span lang="zh">不朽</span>)</span>
                    <span style="text-decoration: underline;" data-track="Quasimodo'sGift">Quasimodo's Gift (<span lang="zh">卡西莫多的礼物</span>)</span>
                    <span style="text-decoration: underline;" data-track="BedtimeStory">Bedtime Story (<span lang="zh">枕边故事</span>)</span>
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
                    <span style="text-decoration: underline;" data-track="IDon'tCare">I Don't Care (<span lang="zh">我管你</span>)</span>
                    <span style="text-decoration: underline;" data-track="KingsandPaupers">Kings and Paupers (<span lang="zh">国王与乞丐</span>) feat. Aska Yang</span>
                    <span style="text-decoration: underline;" data-track="TheMayfly">The Mayfly (<span lang="zh">浮游</span>)</span>
                    <span style="text-decoration: underline;" data-track="TheAntonym">The Antonym (<span lang="zh">反义词</span>)</span>
                    <span style="text-decoration: underline;" data-track="Aliens">Aliens (<span lang="zh">异类</span>)</span>
                    <span style="text-decoration: underline;" data-track="TheEscapefromUtopia">The Escape from Utopia (<span lang="zh">逃离乌托邦</span>)</span>
                    <span style="text-decoration: underline;" data-track="TheWorldisaZoo">The World is a Zoo (<span lang="zh">世界是个动物园</span>)</span>
                    <span style="text-decoration: underline;" data-track="TheMask">The Mask (<span lang="zh">变相怪杰</span>)</span>
                    <span style="text-decoration: underline;" data-track="ForMyFutureChild">For My Future Child (<span lang="zh">写给未来的孩子</span>)</span>
                    <span style="text-decoration: underline;" data-track="TheSaltoftheEarth">The Salt of the Earth (<span lang="zh">地球之盐</span>)</span>
                    <span style="text-decoration: underline;" data-track="TheGiantinSorrow">The Giant in Sorrow (<span lang="zh">忧伤的巨人</span>)</span>
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
                    <span style="text-decoration: underline;" data-track="HugeDeer">Huge Deer (<span lang="zh">巨鹿</span>)</span>
                    <span style="text-decoration: underline;" data-track="ToBeFree">To Be Free</span>
                    <span style="text-decoration: underline;" data-track="ForForever">For Forever</span>
                    <span style="text-decoration: underline;" data-track="AFewMilesAwayFromLoneliness">A Few Miles Away From Loneliness (<span lang="zh">我离孤单几公里</span>)</span>
                    <span style="text-decoration: underline;" data-track="TheYesterdayThatDisappeared">The Yesterday That Disappeared (<span lang="zh">消失的昨天</span>)</span>
                    <span style="text-decoration: underline;" data-track="TheCreator">The Creator (<span lang="zh">造物者</span>)</span>
                    <span style="text-decoration: underline;" data-track="MySkateShoes">My Skate Shoes 2016 (<span lang="zh">我的滑板鞋2016</span>)</span>
                </div>
            </div>
        </div>
    `,
  
    album4: `
        <div class="header">
            <h1>New World (<span lang="zh">新世界</span>)</h1>
            <div class="album-display">
                <img src="albums/NewWorld.jpeg" alt="Album 4">
                <div class="tracklist">
                    <span style="text-decoration: underline;" data-track="Bullfighting">Bullfighting (<span lang="zh">斗牛</span>)</span>
                    <span style="text-decoration: underline;" data-track="IReallyWantToLoveThisWorld">I Really Want To Love This World (<span lang="zh">好想爱这个世界啊</span>)</span>
                    <span style="text-decoration: underline;" data-track="Madhouse">Madhouse (<span lang="zh">疯人院</span>)</span>
                    <span style="text-decoration: underline;" data-track="ConversationsWithMartianChildren">Conversations With Martian Children (<span lang="zh">与火星的孩子说话</span>)</span>
                    <span style="text-decoration: underline;" data-track="SevenPersonalities">Seven Personalities (<span lang="zh">七重人格</span>)</span>
                    <span style="text-decoration: underline;" data-track="GodTree">God Tree (<span lang="zh">神树</span>)</span>
                    <span style="text-decoration: underline;" data-track="Arrival">Arrival (<span lang="zh">降临</span>)</span>
                    <span style="text-decoration: underline;" data-track="NewWorld">New World (<span lang="zh">新世界</span>)</span>
                </div>
            </div>
        </div>
    `,
    album5: `
        <div class="header">
            <h1><span lang="zh">希忘</span>Hope</h1>
            <div class="album-display">
                <img src="albums/Hope.jpeg" alt="Album 5">
                <div class="tracklist">
                    <span style="text-decoration: underline;" data-track="AirplaneMode">Airplane Mode (<span lang="zh">飞行模式</span>)</span>
                    <span style="text-decoration: underline;" data-track="TheFlowerinthSmallTown">The Flower in the Small Town (<span lang="zh">小镇里的花</span>)</span>
                    <span style="text-decoration: underline;" data-track="TheFlowerinthSmallTownTradVersion">The Flower in the Small Town - Traditional Music Version (<span lang="zh">小镇里的花-民乐版</span>)</span>
                    <span style="text-decoration: underline;" data-track="BlackandWhiteArtist">Black and White Artist (<span lang="zh">黑白艺术家</span>)</span>
                    <span style="text-decoration: underline;" data-track="IReallyWantMyselfBack">I Really Want Myself Back (<span lang="zh">好想我回来啊</span>)</span>
                    <span style="text-decoration: underline;" data-track="MeetWhenFlowersFall">Meet When Flowers Fall (<span lang="zh">花落时相遇</span>)</span>
                    <span style="text-decoration: underline;" data-track="WatchtheSunriseTogether">Come, Let's Watch the Sunrise Together (<span lang="zh">走，一起去看日出吧</span>)</span>
                    <span style="text-decoration: underline;" data-track="GrowingTowardstheSun">Growing Towards the Sun (<span lang="zh">向阳而生</span>)</span>
                    <span style="text-decoration: underline;" data-track="LighttheBonfireattheEndoftheMilkyWay">Light the Bonfire at the End of the Milky Way (<span lang="zh">点燃银河尽头的篝火</span>)</span>
                    <span style="text-decoration: underline;" data-track="WhentheWorldHasForgottenMe">When the World Has Forgotten Me (<span lang="zh">当全世界忘了我</span>)</span>
                    <span style="text-decoration: underline;" data-track="IllusionsandReality">Illusions and Reality (<span lang="zh">虚幻与现实</span>)</span>
                </div>
            </div>
        </div>
    `,
    album6: `
        <div class="header">
            <h1>Tipping Point (<span lang="zh">量变临界点</span>)</h1>
            <div class="album-display">
                <img src="albums/tippingpoint.jpeg" alt="Album 6">
                <div class="tracklist">
                    <span style="text-decoration: underline;" data-track="SeaofWind">Sea of Wind (<span lang="zh">风之海</span>)</span>
                    <span style="text-decoration: underline;" data-track="OrdinarytoUnordinaryLife">Ordinary to Unordinary Life (<span lang="zh">普通到不普通的人生</span>)</span>
                    <span style="text-decoration: underline;" data-track="The Beauties Unknown to Me">The Beauties Unknown to Me (<span lang="zh">那些我尚未知道的美丽</span>)</span>
                    <span style="text-decoration: underline;" data-track="TheFlameThatWillNeverBeExtinguished">The Flame That Will Never Be Extinguished (<span lang="zh">永不熄灭的火焰</span>)</span>
                    <span style="text-decoration: underline;" data-track="TheShipofTheseus">The Ship of Theseus (<span lang="zh">忒修斯的船</span>)</span>
                    <span style="text-decoration: underline;" data-track="BizarrePsychology">Bizarre Psychology (<span lang="zh">怪诞心理学</span>)</span>
                    <span style="text-decoration: underline;" data-track="WarmHouse">Warm House (<span lang="zh">温暖的房子</span>)</span>
                    <span style="text-decoration: underline;" data-track="NeverMeetAgain">Never Meet Again (<span lang="zh">不重逢</span>)</span>
                    <span style="text-decoration: underline;" data-track="LoveofHumans">Love of Humans (<span lang="zh">人之爱</span>)</span>
                    <span style="text-decoration: underline;" data-track="IntheMorningLight">In the Morning Light, There's You (<span lang="zh">晨光里有你</span>)</span>
                </div>
            </div>
        </div>
    `
  };

  const songs = {
    Search: `
        <div class="header">
            <h1>Search <span lang="zh">(寻)</span></h1>
            <p></p>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/OqyNCTg2ShI?si=0oKSAxbqN8p0xY1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p>The theme song of a vacation-style variety show released in 2017, Search is meant to convey a feeling of freedom, with friends next to you. Through many layers of instrumentals, the song mimics the sounds of nature.</p>
        <p><br></p>
        <p><span lang="zh">枕边没有风浪怎么我们会跌荡摇晃<br>
            伸手不见月光怎么繁星能闪耀光芒<br>
            脚印会旧而梦还在走<br>
            太阳尚远但一定会有<br>
            等到天亮我们都寻找到最漂亮愿望<br>
            好景多长 路上还有 暗香<br>
            天色渐淡 迎面还有 风凉<br>
            世界多广 转身还有 故乡<br>
            找一个方向</span><br>
            Let us fly<br>
            Let us fly<br>
            Let us fly<br>
            <span lang="zh">沿途风景如歌变幻 再辗转<br>
            人山人海的对白换一句等待<br>
            看不懂黑白却听得到钟摆<br>
            去新世界冒险和内心作伴<br>
            风吹刹那不知你在向哪片日落张望<br>
            很多话想说转过身只看见荒漠空旷<br>
            一个人难免崇拜流浪<br>
            却变成和自己的迷藏<br>
            最好的旅途是让我们记住爱的模样<br>
            好景多长 路上还有 暗香<br>
            天色渐淡 迎面还有 风凉<br>
            世界多广 转身还有 故乡<br>
            只要你在旁</span><br>
            Let us fly<br>
            Let us fly<br>
            Let us fly<br>
            <span lang="zh">我看着你在花的梦中坐下<br>
            你牵着我在山的宽阔中睡下<br>
            毕竟我们只有一生这么长<br>
            要用力给人间留下些印象</span><br>
            Let us fly<br>
            Let us fly<br>
            Let us fly<br>
            <span lang="zh">沿路旅途如歌变幻 在游览<br>
            还给大地昨天的喜怒和烦忧<br>
            下个春天回来我就会回家<br>
            爱如少年把故事说完长大<br>
            长大</span><br>
            <br>
        </p>
    `,
    Cancer: `
        <div class="header">
            <h1>Cancer <span lang="zh">(癌)</span></h1>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RSUKQHqSTR0?si=C05hCkTzEMlfViQf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p>Cancer is a song without lyrics. Hua Chenyu wrote it as an exploration of cancer cells - not patients, when his mother was afflicted with cancer. While this song has received considerable amounts of hate, remember that it was written to be uncomfortable.</p>
    `,
    EqualtoHeaven: `
        <div class="header">
            <h1>Equal to Heaven <span lang="zh">(齐天)</span></h1>
            <p></p>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/HqrrMdwcVgI?si=O1klrRFo-iDnva6j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p>Equal to Heaven is a song that pays homage to Sun Wukong, a famous character from Journey of the West who was titled "Great Sage Equal to Heaven". As the theme of the 2014 movie "Story of Wukong" <span lang="zh">悟空传</span>, the song switches rapidly between rap and emotional singing, with strong traditional Chinese-style throughout. The song focuses on the tragedy of Sun Wukong's story, without forgetting his arrogance and pride.</p>
        <p><br></p>
        <p><span lang="zh">日和月在重演<br>
            谁号令齐天齐天断恩怨<br>
            爱与恨连成线<br>
            逃不出指间指间天高远<br>
            问一句生死因果<br>
            生我又是为何既带我来如何不解我惑<br>
            道一声立地成佛<br>
            是不是成了佛世间便没了魔谁来告诉我<br>
            看风沙障日入目昏黄<br>
            天宫之上那月亮和花果山上也没两样<br>
            一战功成名扬换来天罗地网<br>
            你胜之不武我暗箭难防<br>
            不声不响错过多少霞光<br>
            结局和真相一步两步张望不到前方<br>
            梦里桃花香<br>
            多倔强却抵抗不了一出双簧<br>
            黑白真相等天亮<br>
            是否能亲笔写上天生的擅长<br>
            三尖两刃出鞘龙凤塌麒麟倒<br>
            玉阶纷飞金箍摇再无岁月可回头<br>
            千百年天地间只剩下这一棒<br>
            胜仗为何孤独收场<br>
            梦里风在说着谁<br>
            我一句承让偏不认输<br>
            踏平南天意决众河山再望断天涯<br>
            问谁轻狂年少不枉谁给我个信仰<br>
            春未了月相照有心打扰<br>
            可惜风早相见不巧天色刚刚破晓<br>
            紧箍还没做好我还能微笑<br>
            爱恨忧怖成满眼迷雾<br>
            十万雷霆轰动乾坤却不能将我禁锢<br>
            百万天兵纵横捭阖也休想让我降服<br>
            这不是你能决定的胜负<br>
            一棒把天宫闹翻颠覆<br>
            什么人命天定我说天命由心<br>
            我要这山断不了来路<br>
            我要这水挡不住归途<br>
            我要天地都为我让步<br>
            我棒尖一点山崩地裂你拈花一笑落霞满天<br>
            哭过笑过爱过恨过痴过嗔过<br>
            有什么放不下<br>
            我要这荒诞的规矩当作个闹剧给结束<br>
            乾坤下一朝进退石心两难<br>
            所谓虚无是同归来处的放逐<br>
            潮起潮落原来一无所有<br>
            就叫做齐天大圣<br>
            </span><br>
            <br>
        </p>
    `,
    ImBoring: `
        <div class="header">
            <h1>I'm Boring <span lang="zh">(无聊人)</span></h1>
            <p></p>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0OsDqo5phEI?si=mc6RCMvDnnVxho9b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p>With a combination of rap and ballad-style singing, this song talks of many of Hua Chenyu's personal experiences. In it, he demands philosophical questions, mentions childhood memories, and explores the pain of growing up in a broken family. Like much of his music, the base color of this song is loneliness.</p>
        <p><br></p>
        <p><span lang="zh">我嚼着最贵的晚餐<br>
            可惜我无所谓应对这账单<br>
            左右逢源不是个好习惯<br>
            旁若无人要不要试试看<br>
            好不容易脱下天价的衣衫<br>
            不如说我卸下拖累的金砖<br>
            是人是鬼一眼就看的穿<br>
            不用非要学贵族的装扮<br>
            太多废话都无关感情<br>
            太多动作都始于环境<br>
            就像青春期的小孩会被大人酷刑<br>
            理由是 逼迫15岁的心灵<br>
            比成人要理性<br>
            那些道理我们从小就听<br>
            长大后不得不听命运的命v
            不是 道理多难履行<br>
            而是现实它太任性<br>
            多少人能看懂人心的空镜<br>
            只不过活着活着只活出了年龄<br>
            我攥着别人遥不可及的东西<br>
            一边自嘲一边冷眼那些肮脏的事情<br>
            如果真话<br>
            搅局假话不如闭嘴来的清静<br>
            鄙视那含蓄的交易<br>
            都像强心针样的陷阱<br>
            让人 无时无刻高速运转<br>
            该怎么保持清醒<br>
            趁你们还热爱浑水摸鱼的游戏<br>
            一本正经<br>
            披着羊皮创造你们的使命<br>
            当真的傻子乐此不疲在消耗着热情<br>
            装傻的戏子<br>
            你可赚到了吐沫飞溅的缓刑<br>
            怕被拆穿还没被拆穿<br>
            本就是你要的刺激</span><br>
            I'm boring <span lang="zh">我只想一个人不说话</span><br>
            I'm boring <span lang="zh">我只想一个人不用笑<br>
            我很想望着一闪一闪发光的星星<br>
            像其他同学一样唱着亮晶晶<br>
            可我的眼前饱满<br>
            来自虚伪世界的轰鸣<br>
            我还有很多事做很多歌听<br>
            可我就想窝在沙发做些无聊的点评<br>
            朋友<br>
            在醉酒后咒骂世界不公平<br>
            滑稽的排列组合让我想起了曾经<br>
            那时候爸妈总算分开的场景<br>
            和我高举成绩单强颜镇定的表情<br>
            老爸你揣着银子<br>
            到底是应酬还是旅行<br>
            闹吧<br>
            我总算找到适者生存的途径<br>
            总有人说的好听做起来像个逃兵<br>
            过河拆桥 真的好吗<br>
            但凡是活着就得习惯<br>
            这附带悬念的案情<br>
            我大脑都是各种嘴脸在抢镜<br>
            行吧<br>
            我看够了自私的目的 生硬的交情<br>
            我听够了善意的欺瞒 辩驳的矫情<br>
            所谓的个性 并非教养的不明<br>
            谁来解释下为什么好人卡那么流行<br>
            得到它 等于判定了人性</span><br>
            I'm boring <span lang="zh">我只想一个人不说话</span><br>
            I'm boring <span lang="zh">我只想一个人不用笑<br>
            我嚼着最贵的晚餐<br>
            可惜我无所谓应对这账单<br>
            左右逢源不是个好习惯<br>
            旁若无人要不要试试看<br>
            </span><br>
            <br>
        </p>
    `,
    IQ: `
        <div class="header">
            <h1>250 IQ <span lang="zh">(智商250)</span></h1>
            <p></p>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/sxySu3isvig?si=kE07cE4fM0jy5TsC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p>This is the theme song of Luban the 7th in the MOBA game Honour of Kings. With multiple digital effects, and a rap style that hasn't shown up in any other song, Hua Chenyu's IQ 250 perfectly embodies Luban 7th's character.</p>
        <p><br></p>
        <p><span lang="zh">看世界太平庸我宅到没朋友<br>
            直来直去不造作深藏一生追求<br>
            原谅我重要时候短路爱出糗<br>
            只怪疯狂不需要理由<br>
            我想我最大的能力<br>
            有种天赋叫科技<br>
            震慑对手的威力<br>
            连我自己都不信<br>
            赌我钟爱的发明<br>
            攻克地心的引力<br>
            下一季 整理表情<br>
            深吸口气 <span lang="en">a body</span><br>
            谁在扛着舆论的压力<br>
            走的瞬息又随意<br>
            别急<br>
            绝不喊停将是唯一的理性<br>
            短腿蹦跶没敌意<br>
            料想趁你不注意<br>
            就霸气 绝地反击<br>
            你没脾气 <span lang="en">a body</span><br>
            看世界太平庸我宅到没朋友<br>
            直来直去不造作深藏一生追求<br>
            原谅我重要时候短路爱出糗<br>
            只怪疯狂不需要理由<br>
            我不懂特别的关系<br>
            肾上腺素会暴击<br>
            我自卖自夸的神经<br>
            竟也学不会谈情<br>
            烧脑驰骋大环境 读心术别想侵袭<br>
            别客气 加句前提 杀伤无力 <span lang="en">a body</span><br>
            我这造型拍也拍不出帅气<br>
            夸也夸不好听<br>
            谁说古怪神经搭错专为破解谜底<br>
            我冒着可爱的傻气<br>
            当你降低防备力<br>
            不小心 取之有理 赢得彻底 <span lang="en">a body</span><br>
            看世界太平庸我宅到没朋友<br>
            直来直去不造作深藏一生追求<br>
            原谅我重要时候短路爱出糗<br>
            只怪疯狂不需要理由<br>
            智商随意收割全场 骄傲又嚣张<br>
            越是不见光的死宅<br>
            越有突然爆表冲上云霄的蹊径<br>
            我没想多拼命只因为热爱此行<br>
            大可不当娱乐精 我的较劲不是病<br>
            没关系 抬起眼皮 瞪大眼睛 <span lang="en">a body</span><br>
            或许人类复杂的情绪感染<br>
            太多的铁杆迷失主义<br>
            可我就坚持最简单的<br>
            才是有力的回击<br>
            淘气地取悦我自己<br>
            尴尬地愣在人群里<br>
            超劲的游戏有个蠢萌的你 <span lang="en">a body</span><br>
            看世界太平庸我宅到没朋友<br>
            直来直去不造作深藏一生追求<br>
            原谅我重要时候短路爱出糗<br>
            只怪疯狂不需要理由<br>
            头脑风暴侵占我所有<br>
            </span><br>
            <br>
        </p>
    `,
    JackdawYouth: `
        <div class="header">
            <h1>Jackdaw Youth <span lang="zh">(寒鸦少年)</span></h1>
            <p></p>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/A5PpHkstEgE?si=hpgWKk9Ez7d27jwC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p>As the song Hua Chenyu used to win the first episode of Singer 2020, Jackdaw Boy is also the theme song of Battle Through the Heavens. The inspiration for this song came from a character in the novel "Kafka By the Shore". With dramatic, hard rock and mocking lyrics, the core theme of this song is fighting against destiny, depicting a full arc from falling to rebirth.</p>
        <p><br></p>
        <p><span lang="zh">像一出默剧<br>
            视线有雾气<br>
            试探的证据<br>
            暴晒很彻底<br>
            月光正坐下在祷告<br>
            乌鸦张开嘴巴 嘴巴 嘴巴<br>
            我收拾好骄傲<br>
            原谅脆弱的玩笑<br>
            走吧 走吧 别随便歌颂<br>
            我拉开了双拳<br>
            瞄准沸腾的时间<br>
            走吧 走吧 别大声反驳<br>
            在等我巡游<br>
            变暗的字轴 终场的困兽<br>
            当决斗问候<br>
            焦黑的烟斗 乱线的图谋<br>
            向暴戾迎击<br>
            收敛起稚气练习<br>
            再反转<br>
            意料和预谋<br>
            扮生旦净丑<br>
            谁恶意搀扶<br>
            放暗箭带路<br>
            屈辱当药服<br>
            谢谢你让我都看透<br>
            别当我是傻瓜 傻瓜 傻瓜<br>
            我收拾好骄傲<br>
            原谅脆弱的玩笑<br>
            走吧 走吧 别随便歌颂<br>
            我拉开了双拳<br>
            瞄准沸腾的时间<br>
            走吧 走吧 别大声反驳<br>
            在等我巡游<br>
            变暗的字轴 终场的困兽<br>
            当决斗问候<br>
            焦黑的烟斗 乱线的图谋<br>
            向暴戾迎击<br>
            收敛起稚气练习<br>
            再反转<br>
            意料和预谋<br>
            世界太长时间太短<br>
            有什么值得庆祝<br>
            来不及回顾忘记有归途<br>
            最难是把自己驯服<br>
            想哭时不如停住<br>
            倒流的泪会变得坚固<br>
            去守护<br>
            我收拾好骄傲<br>
            原谅脆弱的玩笑<br>
            走吧 走吧 别随便歌颂<br>
            我拉开了双拳<br>
            瞄准沸腾的时间<br>
            走吧 走吧 别大声反驳<br>
            在等我巡游<br>
            变暗的字轴 终场的困兽<br>
            当决斗问候<br>
            焦黑的烟斗 乱线的图谋<br>
            向暴戾迎击<br>
            反转后重写默剧<br>
            让真相<br>
            痛快去演奏<br>
            </span><br>
            <br>
        </p>
    `,
    FlyingConductor: `
        <div class="header">
            <h1>Flying Conductor <span lang="zh">(飞行指挥家)</span></h1>
            <p></p>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jXZi79QlvPA?si=0AwaCyWU5Q2kQ3B6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p><br></p>
        <p><span lang="zh">冒险的派对<br>
            全世界就位<br>
            注意全神戒备<br>
            用热血去追<br>
            突破了极限<br>
            看子弹向后退<br>
            冲破 心的宇宙<br>
            让热爱失控<br>
            冲锋 <span lang="en">oh</span><br>
            去追逐<br>
            那个超越想象的痛快<br>
            决赛圈再拥抱新期待<br>
            去开启新的未来<br>
            想象为翼 起飞<br>
            用信号枪 指挥<br>
            突破平庸 包围<br>
            淘汰热血 多愚蠢 多狼狈<br>
            用极速的 无畏<br>
            摆脱地心 支配<br>
            向着未来起飞<br>
            精彩变成绝对<br>
            <span lang="en">No one gonna make me down</span><br>
            不存在反派<br>
            也没有障碍<br>
            只有自我淘汰<br>
            笑异想天开<br>
            我偏用热爱<br>
            翻盘赢个精彩<br>
            我决定要无限的痛快<br>
            决赛圈再拥抱新期待<br>
            去开启新的未来<br>
            想象为翼 起飞<br>
            用信号枪 指挥<br>
            突破平庸 包围<br>
            淘汰热血 多愚蠢 多狼狈<br>
            用极速的 无畏<br>
            摆脱地心 支配<br>
            向着未来起飞<br>
            精彩变成绝对<br>
            <span lang="en">No one gonna make me down</span><br>
            气流急速后退 朝着目标起飞<br>
            随时做好准备 品尝胜利滋味<br>
            梦境 启动 平行时空<br>
            打开无限的可能<br>
            身体失重 像漂浮太空<br>
            挣脱了平庸<br>
            每个举动 每个毛孔<br>
            都像在蠢蠢欲动<br>
            <span lang="en">Are you ready to win now</span><br>
            想象为翼 起飞<br>
            做好战斗 准备<br>
            乍放太阳 光辉<br>
            不管黑夜 多强大 多深邃<br>
            用极速的 无畏<br>
            摆脱地心 支配<br>
            向着未来起飞<br>
            精彩变成绝对</span><br>
            Right now<br>
            No one gonna make me down<br>
            Wu oh<br>
            Born to win born to win yeah<br>
            Wu oh<br>
            Keep flying Keep fighting<br>
            Wu oh <span lang="zh">不撤退 不后悔<br>
            想象为翼 想象为翼<br>
            向未来起飞</span> yeah<br>
            No one gonna make me down<br>
            <br>
        </p>
    `,
    IconicScene: `
        <div class="header">
            <h1>Iconic Scene <span lang="zh">(名场面)</span></h1>
            <p></p>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/qt4fHdzKNus?si=5chxBcS5Ji6OzPFk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p><br></p>
        <p>Fight to win or die
            <span lang="zh">在风中降落<br>
            全方位搜索<br>
            天地多辽阔<br>
            有梦更执着<br>
            信号闪烁目光似火<br>
            挣脱了枷锁<br>
            冷眼算什么<br>
            <span lang="en">Fight to win or die<br>
            Fire higher</span><br>
            犹豫就成盒<br>
            够敢才够格<br>
            <span lang="en">Fire higher</span><br>
            名场面集合<br>
            圈定这一刻<br>
            <span lang="en">Fight to win or die</span><br>
            置身于漩涡<br>
            更坚定自我<br>
            击退这封锁<br>
            更胜券在握<br>
            空投预兆着陆信号<br>
            并肩的配合<br>
            踏平所有阻隔<br>
            <span lang="en">Fight to win or die<br>
            Fire higher</span><br>
            犹豫就成盒<br>
            够敢才够格<br>
            <span lang="en">Fire higher</span><br>
            名场面集合<br>
            圈定这一刻<br>
            <span lang="en">Fight to win or die</span><br>
            是为决赛圈见的承诺<br>
            心照不宣百战不折<br>
            承受皇冠的负荷<br>
            <span lang="en">Fight to win or die<br>
            Fire higher</span><br>
            犹豫就成盒<br>
            够敢才够格<br>
            <span lang="en">Fire higher</span><br>
            名场面集合<br>
            圈定这一刻</span><br>
            Fight to win or die<br>
            <br>
        </p>
    `,
    NoFearofHeat: `
        <div class="header">
            <h1>No Fear of Heat<span lang="zh">(肆无惧燥)</span></h1>
            <p></p>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6O6qqshKZck?si=_iOYbhgra1JaDdFd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p><br></p>
        <p>
            <span lang="zh">再黑的墨镜它都不能挡住你的眼睛<br>
            精準的锁定 锁定我在24小时里<br>
            开心或怪脾气 无底线的宠溺<br>
            你那滚烫的热情 都快要让我窒息<br>
            我 我想我此刻正需要<br>
            迅速恢复心跳<br>
            需要 需要 让自己冷静一秒<br>
            滚烫的气流 随它热切嘶吼<br>
            我在我的宇宙 任谁喋喋不休</span><br>
            I'm the one, I'm the one<br>
            I'm the one, I'm the one<br>
            <span lang="zh">键盘上双手<br>
            正在忘我弹奏一首 击破耳膜狂躁节奏<br>
            它好像热衷解构重组拼凑盖栋高楼<br>
            等我像个小丑 去顶层上出糗<br>
            快找个出口 早懒得还手<br>
            我 我想我此刻正需要<br>
            迅速恢复心跳<br>
            需要 需要 让自己冷静一秒<br>
            滚烫的气流 管它灼热狠手<br>
            我在我的宇宙 任谁喋喋不休</span><br>
            I'm the one, I'm the one<br>
            I'm the one, I'm the one<br>
            I'm the one, I'm the one<br>
            I'm the one, I'm the one, hey<br>
            I'm the one, I'm the one<br>
            I'm the one, I'm the one, hey<br>
            <span lang="zh">就 潇灑的去松手<br>
            早 懒得去执拗<br>
            找到 出口 好好酷爽的 <span lang="en">solo</span><br>
            滚烫的气流 放任它遊走<br>
            就在各自宇宙 任谁喋喋不休</span><br>
            I'm the one, I'm the one<br>
            I'm the one, I'm the one<br>
            I'm the one, I'm the one<br>
            I'm the one, I'm the one, hey<br>
            I'm the one, I'm the one<br>
            I'm the one, I'm the one<br>
            <br>
        </p>
    `,
    GrowingTowardstheSunSunrise: `
        <div class="header">
            <h1>Growing Towards the Sun - Sunrise Version <span lang="zh">(向阳而生-日出版)</span></h1>
            <p></p>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/w_Qqcw71ZKc?si=CtwZA61FYqoPnsiN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p><br></p>
        <p>
            <span lang="zh">生 予绚烂<br>
            生 予希望<br>
            生 予一切无常<br>
            相 信羁绊<br>
            相 信微光<br>
            相 信一切如常<br>
            白昼会变长 照亮心脏<br>
            让万物生长 如是我们 向阳<br>
            沉醉过 泥土的芬芳啊<br>
            用最柔嫩青苔 换取一抹阳光<br>
            然後自然老去吧 别再依依惜别了<br>
            可我仍爱著那道 晚霞<br>
            我看过 他青涩的藤啊<br>
            匆匆长在人海 被风吹著流浪<br>
            更多阴晴不定的 还是阳光灿烂呢<br>
            只是他总是笑而 不答<br>
            就让温暖 驱散迷雾<br>
            给尘世 一场风暴<br>
            看远方 万众期冀 跃起地<br>
            那一颗 太阳<br>
            喔～<br>
            喔～<br>
            多闪耀<br>
            我看到 久违的晴朗啊<br>
            又在黎明醒来 万亿爱中生长<br>
            长出轻盈的云朵 长出柔美的山色<br>
            长出世界本来的 喧哗<br>
            寻一颗 未萌的渺小啊<br>
            随著青翠未来 升入辽阔云霄<br>
            那些黑暗笼罩的<br>
            终将向阳而生呢<br>
            也许生命早给我 解答<br>
            就让温暖 将我救赎<br>
            给心灵 一场风暴<br>
            当我们 拼尽全力 追逐过<br>
            那一颗 太阳<br>
            喔～<br>
            喔～<br>
            喔～<br>
            喔～<br>
            我们曾 默默承受<br>
            破碎的山 呜咽的黑<br>
            就在这 长夜之後<br>
            凝结一座 新宇宙<br>
            那太阳 闪耀依旧<br>
            照亮胚胎 照亮墓碑<br>
            随无数 生命漂流 向阳而生<br>
            我们曾 默默承受<br>
            破碎的山 呜咽的黑<br>
            就在这长夜之後<br>
            凝结一座 新宇宙<br>
            那太阳 闪耀依旧<br>
            照亮胚胎 照亮墓碑<br>
            随无数 生命漂流 向阳而生<br>
            我们 彼此簇拥 歌唱（希望）<br>
            你看 荒芜之地 那颗（太阳）<br>
            无论 世界种下 绝望 （希望）<br>
            别哭 你永远是 我的（太阳）<br>
            我们 彼此簇拥 歌唱（希望）<br>
            你看 荒芜之地 那颗（太阳）<br>
            无论 世界种下 绝望 （希望）<br>
            我看到 太阳 喔<br>
            喔～<br>
            喔～<br>
            我们曾 默默承受<br>
            破碎的山 呜咽的黑<br>
            就在这 长夜之後<br>
            凝结一座 新宇宙<br>
            那太阳 闪耀依旧<br>
            照亮胚胎 照亮墓碑<br>
            随无数 生命漂流 向阳而生<br>
            我们曾 默默承受<br>
            破碎的山 呜咽的黑<br>
            就在这长夜之後 凝结一座 新宇宙<br>
            那太阳 闪耀依旧<br>
            照亮胚胎 照亮墓碑<br>
            随无数 生命漂流 向阳而生<br>
            我们 彼此簇拥 歌唱（希望）<br>
            你看 荒芜之地 那颗（太阳）<br>
            无论 世界种下 绝望 （希望）<br>
            别哭 你永远是 我的（太阳）<br>
            我们 彼此簇拥 歌唱（希望）<br>
            你看 荒芜之地 那颗（太阳）<br>
            无论 世界种下 绝望 （希望）<br>
            别哭 你永远是 我的（太阳）<br>
            我们 彼此簇拥 歌唱（希望）<br>
            你看 荒芜之地 那颗（太阳）<br>
            无论 世界种下 绝望 （希望）<br>
            我看到 太阳 喔<br>
            喔～<br>
            喔～<br>
            喔～<br>
            喔～<br>
            终闪耀</span><br>
            <br>
        </p>
    `,
  }

const content = document.getElementById("content");

function loadPage(page) {
    content.classList.remove("fade");
  
    void content.offsetWidth;
  
    content.innerHTML = pages[page] || pages.home;
    content.classList.add("fade");
    window.scrollTo(0,0);
  }

function loadAlbum(album) {
    content.classList.remove("fade");
  
    void content.offsetWidth;
  
    content.innerHTML = albums[album];
    content.classList.add("fade");
    window.scrollTo(0,0);
  }

  function loadSong(song) {
    content.classList.remove("fade");
  
    void content.offsetWidth;
  
    content.innerHTML = songs[song];
    content.classList.add("fade");
    window.scrollTo(0,0);
  }
  

document.querySelectorAll(".navigation span").forEach(item => {
    item.addEventListener("click", () => {
      loadPage(item.dataset.page);
    });
  });

loadPage("home");

content.addEventListener("click", (e) => {
    const card = e.target.closest(".display-card");
    if (!card) return;
    if (card.dataset.type == "song"){
        loadSong(card.dataset.track);
    } else {
        loadAlbum(card.dataset.album);
    }
  });
  


  let player;
  let playerReady = false;
  let isPlaying = false;
  let currentVideo = "uWOGzjWsCW8";
  
  function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      height: "0",
      width: "0",
      videoId: currentVideo,
      playerVars: {
        autoplay: 0,
        controls: 0
      },
      events: {
        onReady: () => {
          playerReady = true;
          console.log("YouTube player ready");
        }
      }
    });
  }

const songSelect = document.getElementById("song-select");
const playPauseBtn = document.getElementById("play-pause");

songSelect.addEventListener("change", () => {
  if (!playerReady) return;

  currentVideo = songSelect.value;
  player.loadVideoById(currentVideo);
});

playPauseBtn.addEventListener("click", () => {
    if (!playerReady) return;
  
    if (isPlaying) {
      player.pauseVideo();
      playPauseBtn.textContent = "▶ Play";
    } else {
      player.playVideo();
      playPauseBtn.textContent = "⏸ Pause";
    }
  
    isPlaying = !isPlaying;
  });
  
