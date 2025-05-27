const threeDotsLeader = document.getElementById('three-dots-leader');
const backCallNumber = document.getElementById('back-call-number');

let isVisible = false;

const toggleVisibility = (show) => {
  if (show) {
    backCallNumber.style.display = 'block';
    isVisible = true;
  } else {
    backCallNumber.style.display = 'none';
    isVisible = false;
  }
};

// 3点リーダークリックで表示/非表示切り替え
threeDotsLeader.addEventListener('click', () => {
  toggleVisibility(!isVisible);
});

// ドキュメント全体のクリックで判定
document.addEventListener('click', (e) => {
  const clickedElement = e.target;

  // 3点リーダー以外がクリックされたらボタンを非表示にする
  if (!threeDotsLeader.contains(clickedElement)) {
    if (isVisible) {
      toggleVisibility(false);
    }
  }
});