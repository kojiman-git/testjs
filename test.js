const $threeDotsLeader = $('#three-dots-leader');
const $backCallNumber = $('#back-call-number');

// 3点リーダークリックで表示/非表示をトグル
$threeDotsLeader.on('click', function() {
  $backCallNumber.toggle();
});

// ドキュメント全体のクリックで判定
$(document).on('click', function(e) {
  if (!$(e.target).closest($threeDotsLeader).length) {
    $backCallNumber.hide();
  }
});