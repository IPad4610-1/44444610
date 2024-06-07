function loadGms() {
    const squareBtns = document.querySelectorAll('.square_btn');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadSquareBtn(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });
  
    squareBtns.forEach(btn => {
      observer.observe(btn);
    });
  }
  
  function loadSquareBtn(btn) {
    btn.classList.add('loaded');
}

function addGms(name, imageUrl, onClickFunction, width, height) {
    var gmsContainer = document.getElementById('gmsContainer');
    var linkElement = document.createElement('a');
    linkElement.href = "#";
    linkElement.className = "square_btn";
    linkElement.onclick = onClickFunction;

    if (width) {
        linkElement.style.width = width + 'px';
    }

    if (height) {
        linkElement.style.height = height + 'px';
    }

    var imageElement = document.createElement('img');
    imageElement.className = "rounded";
    imageElement.src = imageUrl;
    imageElement.alt = name;
    imageElement.draggable = false;

    var brElement = document.createElement('br');
    var textElement = document.createTextNode(name);

    linkElement.appendChild(imageElement);
    linkElement.appendChild(brElement);
    linkElement.appendChild(textElement);

    gmsContainer.appendChild(linkElement);
}

var gms = {
  // All-Time favorites
  'GeForce Now': { imageUrl: "/assets/img/geforcenow.webp", onClick: geforce },
  'ロブロ': { imageUrl: "/assets/img/roblox.webp", onClick: rbx },
  // Shooter Games
  'フォトナみたいなやつ': { imageUrl: "/assets/img/1v1.webp", onClick: onevone },
  'Awesome Tanks 2': { imageUrl: "/assets/img/atanks2.webp", onClick: awesomeTanksTwo, height: 135 },
  'Florr.io': { imageUrl: "/assets/img/florr.webp", onClick: florr },
  'Krunker.io': { imageUrl: "/assets/img/krunker.webp", onClick: krunker },
  'Time Shooter SWAT': { imageUrl: "/assets/img/time-shooter-3.webp", onClick: timeShooter3, height: 135 },
  // Sport Games
  'Retro Bowl': { imageUrl: "/assets/img/retro.webp", onClick: rBowl },
  'BasketBros.io': { imageUrl: "/assets/img/basketbros.webp", onClick: basketBros },
  'Basket Random': { imageUrl: "/assets/img/basketrandom.webp", onClick: basketRandom, height: 135 },
  'Volley Random': { imageUrl: "/assets/img/volley-random.webp", onClick: volleyRandom, height: 135 },
  // Ball/Platformer Games
  'Slope': { imageUrl: "/assets/img/slope.webp", onClick: slope },
  'Boxel Rebound': { imageUrl: "/assets/img/boxelrebound.webp", onClick: brebound, height: 135 },
  'Run 3': { imageUrl: "/assets/img/run3.webp", onClick: run3 },
  'Fireboy and Watergirl': { imageUrl: "/assets/img/fireboy-and-watergirl.webp", onClick: fBwG1, height: 135 },
  'Stickman Hook': { imageUrl: "/assets/img/stickmanhook.webp", onClick: stickManHook, height: 135 },
  // Domination Games
  'Hole.io': { imageUrl: "/assets/img/hole-io.webp", onClick: holeio, height: 135 },
  'Paper.io': { imageUrl: "/assets/img/paperio.webp", onClick: paperIo },
  'Territorial.io': { imageUrl: "/assets/img/territorial.webp", onClick: territorial },
  // Running Games
  'Subway Surfers': { imageUrl: "/assets/img/subway.webp", onClick: subway, height: 135 },
  'Temple Run': { imageUrl: "/assets/img/temple-run.webp", onClick: templeRun },
  'OvO': { imageUrl: "/assets/img/ovo.webp", onClick: ovo, height: 135 },
  'Vex 8': { imageUrl: "/assets/img/vex8.webp", onClick: vex8 },
  'Tall Man Run': { imageUrl: "/assets/img/tall-man-run.webp", onClick: tallManRun },
  'Crowd Run 3D': { imageUrl: "/assets/img/crowd-run-3d.webp", onClick: crowdRun3d },
  // Car/Racing Games
  'Drift Hunters': { imageUrl: "/assets/img/drifthunters.webp", onClick: driftHunters },
  'Drive Mad': { imageUrl: "/assets/img/drive-mad.webp", onClick: driveMad },
  'Moto X3M': { imageUrl: "/assets/img/motox3m.webp", onClick: motoX3M },
  // Brain Games
  'Bitlife': { imageUrl: "/assets/img/bitlife.webp", onClick: bitlife, height: 135 },
  '4610 ': { imageUrl: "/assets/img/2048.webp", onClick: twoZeroFourEight, height: 135 },
  'Pokemon 2048': { imageUrl: "/assets/img/p2048.webp", onClick: p2048, height: 135 },
  'Chess.com': { imageUrl: "/assets/img/chess.webp", onClick: chess },
  'Jstris': { imageUrl: "/assets/img/jstris.webp", onClick: jstris },
  'Watermelon Game (Suika)': { imageUrl: "/assets/img/suika.webp", onClick: suikaWatermelon, height: 135 },
  "World's Hardest GM": { imageUrl: "/assets/img/worldshardestgm.webp", onClick: worldsHardestGm, height: 135 },
  // Idle/Clicking Games
  'Cookieをクリック': { imageUrl: "/assets/img/cookieclicker.webp", onClick: cookieClicker },
  'Idle Breakout': { imageUrl: "/assets/img/idlebreakout.webp", onClick: idleBreakout },
  'Monkey Mart': { imageUrl: "/assets/img/monkeymart.webp", onClick: monkeyMart },
  // Sandbox/Arcade Games
  'マイクラの海賊 (1.5)': { imageUrl: "/assets/img/eaglercraft.webp", onClick: eaglerCraft15, height: 135 },
  'マイクラの海賊 (1.8)': { imageUrl: "/assets/img/eaglercraft.webp", onClick: eaglerCraft18, height: 135 },
  'Kick The Buddy': { imageUrl: "/assets/img/super-buddy-kick.webp", onClick: kickTheBuddy, height: 135 },
  'There is No Game': { imageUrl: "/assets/img/there-is-no-gms.webp", onClick: thereIsNoGame, height: 135 },
};

for (var gmsName in gms) {
    if (gms.hasOwnProperty(gmsName)) {
      try {
        const { imageUrl, onClick, width, height } = gms[gmsName];
        addGms(gmsName, imageUrl, onClick, width, height);
        fetchMessage.style.display = 'none';
      } catch (error) {
        fetchMessage.innerText = 'Failed to load, please refresh.';
      }
    }
}

/* Search Bar */
document.getElementById('searchApps').addEventListener('input', function(event) {
    const query = this.value.toLowerCase();
    const links = document.getElementsByClassName('search-results')[0].getElementsByTagName('a');
    let foundResults = false;
    for(let i = 0; i < links.length; i++) {
        const link = links[i];
        const linkText = link.innerText.toLowerCase();
        if(linkText.includes(query)) {
            link.style.display = 'block';
            foundResults = true;
        } else {
            link.style.display = 'none';
        }
    }
    if(!foundResults) {
        const message = document.getElementById('searchMessage');
        message.innerText = 'No Results Found.';
        message.style.display = 'block';
    } else {
        const message = document.getElementById('searchMessage');
        message.style.display = 'none';
    }
});

loadGms();

var searchBar = document.querySelector('.searchbar');
var searchIcon = document.getElementById('search');
searchBar.addEventListener('focus', () => {
    searchIcon.style.marginLeft = '20px';
    searchBar.placeholder = '';
    searchBar.style.textAlign = 'left';
});

searchBar.addEventListener('blur', () => {
    searchIcon.style.marginLeft = '140px';
    searchBar.placeholder = 'Search for games';
    searchBar.style.textAlign = 'center';
});
