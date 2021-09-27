/*
 * グローバル変数
 */
let no; // 数値格納用
let number; // 数値表示部分のDOM取得用

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
    console.log(startY);
    console.log(moveY);
    console.log(dist);

    if (startY > moveY && startY > moveY + dist) {
      // console.log(moveY);
      // console.log(startY);
      // 右から左にスワイプ
      previous();
    } else if (startY < moveY && startY + dist < moveY) {
      // console.log(moveY);
      // console.log(startY);
      // 左から右にスワイプ
      next();
    }
  });
}

/*
 * 次の番号を表示
 */
function next() {
  no--;
  setNumber();
}

/*
 * 前の番号を表示
 */
function previous() {
  no++;
  setNumber();
}

/*
 * 数値を画面に表示する
 */
function setNumber() {
  number.innerHTML = no;
}

/*
 * 起動時の処理
 */
window.addEventListener("load", function () {
  // 数値表示部分のDOM取得
  number = document.getElementById("number");

  // 数値を画面に表示
  no = 0;
  setNumber();

  // スワイプイベント設定
  setSwipe("#swipe_area");
});
