// Generated by CoffeeScript 1.6.3
(function() {
  $(function() {
    console.log('in app.coffee');
    $("#simple-menu").sidr();
    return $(".imenu").click(function(e) {
      return $.sidr('toggle');
    });
  });

}).call(this);
