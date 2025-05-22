document.addEventListener("DOMContentLoaded", function () {
  let isVisible = false;

  document.addEventListener("click", function (event) {
    const ellipsis = document.getElementById("ellipsis");
    const actionButton = document.getElementById("action-button");

    // 要素が取得できなければ何もしない（他のJSで削除されてる可能性も考慮）
    if (!ellipsis || !actionButton) return;

    // 3点リーダーをクリックした場合
    if (event.target === ellipsis) {
      isVisible = !isVisible;
      actionButton.style.display = isVisible ? "block" : "none";
      return;
    }

    // ボタンの中をクリックした場合 → 必要なら閉じる or 何もしない
    if (actionButton.contains(event.target)) {
      // ここで何かボタン処理を入れてもOK（閉じる処理は任意）
      actionButton.style.display = "none";
      isVisible = false;
      return;
    }

    // それ以外の場所をクリックした場合 → ボタンを非表示に
    actionButton.style.display = "none";
    isVisible = false;
  });
});