const Body = () => {
    return (
        <div class="grid">
        <div class="player player1">
            <img class="player-image" src="./Images/BruceBrown.png" alt="">
            <div class="overlay overlayp1"><button class="otvori" type="button" onclick="toggleStats1()">Show more</button></div>
              <div class="tag">
                  <div class="name-pos">
                      <p class="player-name">Bruce Brown</p> 
                      <p>Guard-Forward</p>
                  </div>
                  <span class="jersey-num">1</span>
              </div>
              <div class="info infop1">
                <i class="far fa-window-close" onclick="closeStats1()"></i>
                <p>Games: 30</p>
                <p>PPG: 7.7</p>
                <p>APG: 1.2</p>
                <p>RPG: 4.5</p>
                <p>SPG: 0.8</p>
                <p>BPG: 0.3</p>
              </div>
          </div>
        <div class="player player2">
            <img class="player-image" src="./Images/DeAndreJordan.png" alt="">
            <div class="overlay overlayp2"><button class="otvori" type="button" onclick="toggleStats2()">Show more</button></div>
            <div class="tag">
              <div class="name-pos">
                  <p class="player-name">DeAndre Jordan</p>
                  <p>Center</p>
              </div>
              <span class="jersey-num">6</span>
            </div>
            <div class="info infop2">
              <i class="far fa-window-close" onclick="closeStats2()"></i>
              <p>Games: 33</p>
              <p>PPG: 7.3</p>
              <p>APG: 1.8</p>
              <p>RPG: 7.3</p>
              <p>SPG: 0.3</p>
              <p>BPG: 1.4</p>
            </div>
          </div>
        <div class="player player3">
            <img class="player-image" src="./Images/JamesHarden.png" alt="">
            <div class="overlay overlayp3"><button class="otvori" type="button" onclick="toggleStats3()">Show more</button></div>  
            <div class="tag">
                  <div class="name-pos">
                      <p class="player-name">James Harden</p>
                      <p>Guard</p>
                  </div>
                  <span class="jersey-num">13</span>
              </div>
              <div class="info infop3">
                <i class="far fa-window-close" onclick="closeStats3()"></i>
                <p>Games: 21</p>
                <p>PPG: 25.1</p>
                <p>APG: 11.1</p>
                <p>RPG: 8.4</p>
                <p>SPG: 1.1</p>
                <p>BPG: 0.7</p>
              </div>
          </div>
        <div class="player player4">
              <img class="player-image" src="./Images/JeffGreen.png" alt="">
              <div class="overlay overlayp4"><button class="otvori" type="button" onclick="toggleStats4()">Show more</button></div>
              <div class="tag">
                  <div class="name-pos">
                      <p class="player-name">Jeff Green</p>
                      <p>Forward</p>
                  </div>
                  <span class="jersey-num">8</span>
              </div>
              <div class="info infop4">
                <i class="far fa-window-close" onclick="closeStats4()"></i>
                <p>Games: 33</p>
                <p>PPG: 9.5</p>
                <p>APG: 1.4</p>
                <p>RPG: 3.5</p>
                <p>SPG: 0.7</p>
                <p>BPG: 0.2</p>
              </div>
          </div> 
        <div class="player player5">
              <img class="player-image" src="./Images/JoeHarris.png" alt="">
              <div class="overlay overlayp5"><button class="otvori" type="button" onclick="toggleStats5()">Show more</button></div>
              <div class="tag">
                  <div class="name-pos">
                      <p class="player-name">Joe Harris</p>
                      <p>Guard-Forward</p>
                  </div>
                  <span class="jersey-num">12</span>
              </div>
              <div class="info infop5">
                <i class="far fa-window-close" onclick="closeStats5()"></i>
                <p>Games: 35</p>
                <p>PPG: 14.9</p>
                <p>APG: 1.8</p>
                <p>RPG: 3.6</p>
                <p>SPG: 0.5</p>
                <p>BPG: 0.2</p>
              </div>
          </div>
        <div class="player player6">
              <img class="player-image" src="./Images/KevinDurant.png" alt="">
              <div class="overlay overlayp6"><button class="otvori" type="button" onclick="toggleStats6()">Show more</button></div>
              <div class="tag">
                  <div class="name-pos">
                      <p class="player-name">Kevin Durant</p>
                      <p>Forward</p>
                  </div>
                  <span class="jersey-num">7</span>
              </div>
              <div class="info infop6"> 
                <i class="far fa-window-close" onclick="closeStats6()"></i>
                <p>Games: 19</p>
                <p>PPG: 29.0</p>
                <p>APG: 5.2</p>
                <p>RPG: 7.3</p>
                <p>SPG: 0.7</p>
                <p>BPG: 1.4</p>
              </div>
          </div>
        <div class="player player7">
              <img class="player-image" src="./Images/KyrieIrving.png" alt="">
              <div class="overlay overlayp7"><button class="otvori" type="button" onclick="toggleStats7()">Show more</button></div>
              <div class="tag">
                  <div class="name-pos">
                      <p class="player-name">Kyrie Irving</p>
                      <p>Guard</p>
                  </div>
                  <span class="jersey-num">11</span>
              </div>
              <div class="info infop7">
                <i class="far fa-window-close" onclick="closeStats7()"></i>
                <p>Games: 24</p>
                <p>PPG: 27.4</p>
                <p>APG: 5.9</p>
                <p>RPG: 4.7</p>
                <p>SPG: 1.2</p>
                <p>BPG: 0.6</p>
              </div>
          </div>
        <div class="player player8">
            <img class="player-image" src="./Images/LandryShamet.png" alt="">
            <div class="overlay overlayp8"><button class="otvori" type="button" onclick="toggleStats8()">Show more</button></div>
            <div class="tag">
              <div class="name-pos">
                  <p class="player-name">Landry Shamet</p>
                  <p>Guard</p>
              </div>
              <span class="jersey-num">20</span>
            </div>
            <div class="info infop8">
              <i class="far fa-window-close" onclick="closeStats8()"></i>
              <p>Games: 31</p>
              <p>PPG: 7.7</p>
              <p>APG: 1.1</p>
              <p>RPG: 1.7</p>
              <p>SPG: 0.4</p>
              <p>BPG: 0.1</p>
            </div>
          </div>
        <div class="player player9">
            <img class="player-image" src="./Images/ReggiePerry.png" alt="">
            <div class="overlay overlayp9"><button class="otvori" type="button" onclick="toggleStats9()">Show more</button></div>
            <div class="tag">
              <div class="name-pos">
                  <p class="player-name">Reggie Perry</p>
                  <p>Guard-Forward</p>
              </div>
              <span class="jersey-num">1</span>
            </div>
            <div class="info infop9">
              <i class="far fa-window-close"  onclick="closeStats9()"></i>
              <p>Games: 14</p>
              <p>PPG: 3.6</p>
              <p>APG: 0.9</p>
              <p>RPG: 3.7</p>
              <p>SPG: 0.1</p>
              <p>BPG: 0.4</p>
            </div>
          </div>
        <div class="player player10">
            <img class="player-image" src="./Images/SpencerDinwiddie.png" alt="">
            <div class="overlay overlayp10"><button class="otvori" type="button" onclick="toggleStats10()">Show more</button></div>
            <div class="tag">
              <div class="name-pos">
                  <p class="player-name">Spencer Dinwiddie</p>
                  <p>Forward-Center</p>
              </div>
              <span class="jersey-num">0</span>
            </div>
            <div class="info infop10">
              <i class="far fa-window-close"  onclick="closeStats10()"></i>
              <p>Games: 3</p>
              <p>PPG: 6.7</p>
              <p>APG: 3.0</p>
              <p>RPG: 4.3</p>
              <p>SPG: 0.7</p>
              <p>BPG: 0.3</p>
            </div>
          </div>
        <div class="player player11">
            <img class="player-image" src="./Images/TylerJohnson.png" alt="">
            <div class="overlay overlayp11"><button class="otvori" type="button" onclick="toggleStats11()">Show more</button></div>
            <div class="tag">
              <div class="name-pos">
                  <p class="player-name">Tyler Johnson</p>
                  <p>Guard</p>
              </div>
              <span class="jersey-num">10</span>
            </div>
            <div class="info infop11">
              <i class="far fa-window-close" onclick="closeStats11()"></i>
              <p>Games: 16</p>
              <p>PPG: 4.7</p>
              <p>APG: 0.9</p>
              <p>RPG: 1.4</p>
              <p>SPG: 0.4</p>
              <p>BPG: 0.0</p>
            </div>
          </div>
        <div class="player player12">
            <img class="player-image" src="./Images/NicolasClaxton.png" alt="">
            <div class="overlay overlayp12"><button class="otvori" type="button" onclick="toggleStats12()">Show more</button></div>
            <div class="tag">
              <div class="name-pos">
                  <p class="player-name">Nicolas Claxton</p>
                  <p>Forward-Center</p>
              </div>
              <span class="jersey-num">33</span>
            </div>
            <div class="info infop12">
              <i class="far fa-window-close" onclick="closeStats12()"></i>
              <p>Games: 3</p>
              <p>PPG: 5.7</p>
              <p>APG: 1.0</p>
              <p>RPG: 2.0</p>
              <p>SPG: 1.3</p>
              <p>BPG: 1.3</p>
            </div>
          </div>
    </div>


  </section>
    );
}
 
export default Body;