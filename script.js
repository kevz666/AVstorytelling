document.addEventListener('DOMContentLoaded', (event) => {
  const video = document.getElementById('myVideo');
  const overlay = document.getElementById('videoOverlay');

  // Event listener for when the video ends
  video.onended = function() {
      overlay.style.display = 'flex';
  };

  // Event listener for the start ride button
  document.getElementById('startRideButton').addEventListener('click', function() {
      video.play();
      // Hide the overlay when playing
      this.closest('.overlay').style.display = 'none';
  });

  document.getElementById('yieldButton').addEventListener('click', function() {
    // Change the video source to 'My Movie 11.mp4'
    video.src = 'path/to/My Movie 11.mp4';
    video.play();
    // Hide the overlay when playing
    this.closest('.overlay').style.display = 'none';
});

  // Event listener for the continue ride button
  document.getElementById('continueRideButton').addEventListener('click', function() {
    video.src = 'path/to/My Movie 11.mp4';
    video.load(); // Load the new source
    video.onloadeddata = function() {
        video.play();
        this.closest('.overlay').style.display = 'none';
    };
});
});
