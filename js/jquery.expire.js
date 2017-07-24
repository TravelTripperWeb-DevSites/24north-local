/*
   Expire Content
   ========================================================================== */

$(function() {
  $(".expired").each(function(index) {
    var end  = new Date($(this).data("expire-date"));
    var date = new Date();
    if (date < end )
      $(this).show();
  });
});

$(function() {
  $(".expired").each(function(index) {
    if ($(this).data("expire-date").length <= 0)
      $(this).show();
  });
});