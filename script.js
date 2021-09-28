// グローバル変数
let no; // 数値格納用
let s;
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
      s = startY - moveY;
      setNumber();
      const oko = document.getElementById("okonomiyaki");
      //level1
      if (0 < s && s < 100) {
        oko.classList = "okonomiyaki_up_level1";
        number.innerHTML = "何も起きなかった";
      }
      //level2
      else if (100 <= s && s < 200) {
        oko.classList = "okonomiyaki_up_level2";
        number.innerHTML = "裏返らなかったので半分におった";
      }
      //level3
      else if (200 <= s && s < 300) {
        oko.classList = "okonomiyaki_up_level3";
        number.innerHTML = "完璧！";
      }
      //level4
      else if (300 <= s && s < 400) {
        oko.classList = "okonomiyaki_up_level4";
        number.innerHTML = "鉄板の外に逃げ出した";
      }
      //level5
      else {
        oko.classList = "okonomiyaki_up_level5";
        number.innerHTML = "星になった";
      }
    }
  });
}

// 数値を画面に表示する
function setNumber() {
  number.innerHTML = s;
}

//  起動時の処理
window.addEventListener("load", function () {
  number = document.getElementById("number"); // 数値表示部分のDOM取得
  s = "移動距離"; // 数値を画面に表示
  setSwipe("#swipe_area"); // スワイプイベント設定
});
