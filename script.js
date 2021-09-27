// グローバル変数
let no; // 数値格納用
let number; // 数値表示部分のDOM取得用
let s;
let startY; // タッチ開始 y座標
let moveY; // スワイプ中の y座標
let dist = 0; // スワイプを感知する最低距離（ピクセル単位）

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

      if (0 < s && s < 100) {
        alert("しょう");
      } else if (100 <= s && s < 200) {
        alert("ちゅう");
      } else if (200 <= s && s < 300) {
        alert("じょう");
      } else if (300 <= s && s < 400) {
        alert("さい");
      } else {
        alert("ぷんぷん");
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
