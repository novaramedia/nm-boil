var animationLength, l, layout, mainContent;

l = function(data) {
  return console.log(data);
};

animationLength = 200;

mainContent = $('#main-content');

jQuery(document).ready(function($) {

  $.getScript("http://tools.novaramedia.com/tool/novara_live/schedule.min.js", function() {
    if (isLive()) {
      $("#livenow").css({
        height: 20,
        paddingTop: 8,
        paddingBottom: 8
      });
    }
    setInterval((function() {
      if (isLive()) {
        $("#livenow").css({
          height: 20,
          paddingTop: 8,
          paddingBottom: 8
        });
      }
    }), 15000);
  });
  layout();
  $(window).resize(function() {
    return layout();
  });
  $('.js-toggle-drawer').click(function() {
    return $('#drawer-main').slideToggle(animationLength);
  });
  $('.js-toggle-tags').click(function() {
    return $('#drawer-tags').slideToggle(animationLength);
  });
  return $('.masonry').each(function() {
    var t;
    t = $(this);
    return $(this).imagesLoaded(function() {
      return t.masonry();
    });
  });
});

layout = function() {
  var footerHeight, headerHeight, windowHeight;
  windowHeight = $(window).height();
  headerHeight = $('#header').outerHeight(true);
  footerHeight = $('#footer').outerHeight(true);
  return mainContent.css({
    'min-height': (windowHeight - headerHeight - footerHeight) + 'px'
  });

};