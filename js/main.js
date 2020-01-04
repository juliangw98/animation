$(document).ready(function() {
  $("#div-1").click(function() {
    // alert('klik');
    $("#content-div-1").addClass("slideUp");
  });
  $("#content-div-1").click(function() {
    // alert("klik");
    $(".slideUp").removeClass("slideUp");
  });
});
