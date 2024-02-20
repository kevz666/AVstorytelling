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
});
