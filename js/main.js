var heights = window.innerHeight;
$(window).on('load', function () {
  document.getElementById("mobile-container").style.height = heights;
  // $('#mobile-container').style.height = "100px";
});

function resize()
        {
            var heights = window.innerHeight;
            document.getElementById("mobile-container").style.height = heights -50 + "px";
        }
        resize();
        window.onresize = function() {
            resize();
        };
        //]]>

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
