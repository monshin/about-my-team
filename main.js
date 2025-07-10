$(document).ready(function () {
  $('#logo').on('click', function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });

  var $menu = $('#menu-navbar');
  $('#btn-navbar').on('click', function () {
    $menu.toggleClass('flex hidden');
  });

  $menu.onePageNav({
    scrollSpeed: 500,
    begin: function () {
      //I get fired when the animation is starting
      if (!$menu.is('.hidden')) {
        $menu.toggleClass('flex hidden');
      }
    },
  });
});
