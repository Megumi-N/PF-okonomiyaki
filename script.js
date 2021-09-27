/*
 * グローバル変数
 */
let no; // 数値格納用
let number; // 数値表示部分のDOM取得用
let s;

/*
 * スワイプイベント設定
 */
function setSwipe(elem) {
  let t = document.querySelector(elem);
  let startY; // タッチ開始 y座標
  let moveY; // スワイプ中の y座標
  let dist = 0; // スワイプを感知する最低距離（ピクセル単位）

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
    }
  });

  /*
   * 前の番号を表示
   */
}

/*
 * 数値を画面に表示する
 */
function setNumber() {
  number.innerHTML = s;
}

/*
 * 起動時の処理
 */
window.addEventListener("load", function () {
  // 数値表示部分のDOM取得
  number = document.getElementById("number");

  // 数値を画面に表示
  s = "移動距離";
  setNumber();

  // スワイプイベント設定
  setSwipe("#swipe_area");
});
