document.addEventListener('DOMContentLoaded', function(event) {
  window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
  navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
  navigator.getUserMedia({video: true}, function(stream) {
    var video = document.getElementById('video-demo');
    video.src = window.URL.createObjectURL(stream);
  }, function (err) { alert('Error:' + err); });
});
