document.getElementById('startRideButton').addEventListener('click', function() {
    var video = document.getElementById('myVideo');
    video.play();
  
    // Hide the overlay when playing
    this.closest('.overlay').style.display = 'none';
  });
  
<script>
    document.addEventListener('DOMContentLoaded', (event) => {
        const video = document.getElementById('myVideo');
        const overlay = document.getElementById('videoOverlay');

        video.onended = function() {
            overlay.style.display = 'flex';
        };
    });
</script>
