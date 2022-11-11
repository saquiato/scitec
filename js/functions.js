$(function () {

  // フッターデザイン
  $("footer").hover(function () {
    $(this).css("background-color", "red");
  }, function () {
    $(this).css("background-color", "#b2eaff");
  });




  // トップページスライドショー

  if ($("#home").length) {
    $('.slider').slick({
      autoplay: true,
      arrows: false,
    })
  }







  //リサイズ時のイベント
  $(window).resize(function () {
    console.log($("body").width());
  });






});