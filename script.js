document.getElementById('startRideButton').addEventListener('click', function() {
    var video = document.getElementById('myVideo');
    video.play();
  
    // Hide the overlay when playing
    this.closest('.overlay').style.display = 'none';
  });
  