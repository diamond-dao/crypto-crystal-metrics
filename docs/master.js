$(document).ready(function () {
  $("a").click(function () {
    $(this).attr("target", "_blank");
  });

  $("#tab_metrics").click(function () {
    var current_selected_tab = $("section.is-active");
    $("#metrics-spinner").hide();
  });

  $(".toggle_words").click(function () {
    console.log($(this).siblings(".top_words").text());
    $(this).siblings(".top_words").toggle(500);
    $(this).siblings(".least_words").toggle(500);
  });
});
