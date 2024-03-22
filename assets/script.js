document.addEventListener("DOMContentLoaded", function() {
    var follower = document.getElementById("follower");
    document.addEventListener("mousemove", function(e) {
      follower.style.left = e.pageX + "px";
      follower.style.top = e.pageY + "px";
    });
  });
  