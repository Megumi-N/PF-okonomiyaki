// グローバル変数
let no; // 数値格納用
let distance; // スワイプした座標距離
let startY; // タッチ開始 y座標
let moveY; // スワイプ中の y座標
let dist = 0; // スワイプを感知する最低距離（ピクセル単位）
const image = document.getElementsByTagName("img")[0];

//  スワイプイベント設定
function setSwipe(elem) {
  let t = document.querySelector(elem);

  // タッチ開始時： xy座標を取得
  t.addEventListener("touchstart", function (e) {
    e.preventDefault();
    startY = e.touches[0].pageY;
  });

  // スワイプ中： xy座標を取得
  t.addEventListener("touchmove", function (e) {
    e.preventDefault();
    moveY = e.changedTouches[0].pageY;
  });

  t.addEventListener("touchend", function (e) {
    if (startY > moveY && startY > moveY + dist) {
      distance = startY - moveY;
      setNumber();
      const oko = document.getElementById("okonomiyaki");
      //level1
      let titleText;
      let bodyText;
      const modalModify = function () {
        modalTitle.innerText = titleText;
        modalBody.innerHTML = bodyText;
        modalButton.innerText = "再挑戦";
        modalButton.setAttribute("onclick", "window.location.reload();");
      };

      if (0 < distance && distance < 200) {
        oko.classList = "okonomiyaki_up_level1";
        setTimeout(() => {
          modalOpen();
          titleText = "お好み焼きはピクリと動いた";
          bodyText = `え?<br>
          なんかしました?<br>
          そよ風が吹いたかと思いました。<br>
          その程度でお好み焼きが食べれると思ったら笑止千万!!`;
          modalModify();
        }, 3000);
      }
      //level2
      else if (200 <= distance && distance < 400) {
        oko.classList = "okonomiyaki_up_level2";
        setTimeout(() => {
          modalOpen();
          titleText = "惜しい！あとひとおし!!";
          bodyText = `惜しい！<br>
        あと少し!<br>
        あと少し距離を伸ばそう!<br>
        お好み焼きまであと一歩!!"`;
          modalModify();
        }, 3000);
      }
      //level3
      else if (400 <= distance && distance < 450) {
        oko.classList = "okonomiyaki_up_level3";
        document.getElementById("uragaeshi").classList.add("uragaeshi");
        setTimeout(() => {
          modalOpen();
          titleText = "お好み焼き名人を襲名";
          bodyText = `
        とんでもないセンスに満ち溢れていますね...<br>
        手首のスナップ...<br>
        そして力の入れ具合...<br>
        もはや名人です。`;
          modalModify();
        }, 3000);
      }
      //level4
      else {
        oko.classList = "okonomiyaki_up_level4";
        setTimeout(() => {
          modalOpen();
          titleText = "お好み焼きは星になった";
          bodyText = `
          どうして...?<br>
          どうしてそんなに力を入れたんですか...?<br>
          お好み焼きもまさか星になるとは思ってなかったと思います。<br>
          お好み焼きを作るときは必ず保護者の方と一緒に作ってください。
          `;
          modalModify();
        }, 3000);
      }
    }
  });
}

// 数値を画面に表示する
function setNumber() {
  console.log(distance);
}

//  起動時の処理
window.addEventListener("load", function () {
  number = document.getElementById("number"); // 数値表示部分のDOM取得
  distance = "移動距離"; // 数値を画面に表示
  setSwipe("#swipe_area"); // スワイプイベント設定
});
