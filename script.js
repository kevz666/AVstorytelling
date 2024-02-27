document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('myVideo');
    const overlay = document.getElementById('videoOverlay');
    const overlay2 = document.getElementById('videoOverlay2');

    document.getElementById('startRideButton').addEventListener('click', function() {
        const video = document.getElementById('myVideo');
        if (video) {
          video.src = 'My Movie 10.mp4';
          video.play().catch(e => console.error("Error playing the video:", e));
          overlay.style.display = 'none';
        } else {
          console.error('Second video element not found');
        }
        video.play();
        this.closest('.overlay').style.display = 'none';
      });
  
      const Video = document.getElementById('myVideo');
      if (Video) {
          Video.onended = function() {
            overlay.innerHTML = `
              <div class="message-box">
                  <p>Some pedestrians want to cross, do you...</p>
                  <button id="yieldButton">Now</button>
                  <button id="keepDrivingButton">Wait</button>
              </div>`;
            overlay.style.display = 'block';
  
            // Move the event listener setup inside the onended function
            const yieldButton = document.getElementById('yieldButton');
            const keepDrivingButton = document.getElementById('keepDrivingButton');
  
            yieldButton.onclick = function() {
              overlay.innerHTML = `
                  <div class="message-box">
                      <p>The AV chose yielded to the pedestrians.</p>
                  </div>`;
              overlay.style.display = 'block';
            };
  
            keepDrivingButton.onclick = function() {
              overlay.innerHTML = `
                  <div class="message-box">
                      <p>The AV chose yielded to the pedestrians.</p>
                  </div>`;
              overlay.style.display = 'block';
            };
          };
      }
  
    document.getElementById('continueRideButton').addEventListener('click', function() {
      const secondVideo = document.getElementById('mySecondVideo');
      if (secondVideo) {
        secondVideo.src = 'My Movie 11.mp4';
        secondVideo.play().catch(e => console.error("Error playing the video:", e));
        overlay2.style.display = 'none';
      } else {
        console.error('Second video element not found');
      }
      video.play();
      this.closest('.overlay2').style.display = 'none';
    });

    const secondVideo = document.getElementById('mySecondVideo');
    if (secondVideo) {
        secondVideo.onended = function() {
          overlay2.innerHTML = `
            <div class="message-box">
                <p>You want to change lanes, do you do it now or wait...</p>
                <button id="nowButton">Now</button>
                <button id="waitButton">Wait</button>
            </div>`;
          overlay2.style.display = 'block';

          // Move the event listener setup inside the onended function
          const nowButton = document.getElementById('nowButton');
          const waitButton = document.getElementById('waitButton');

          nowButton.onclick = function() {
            overlay2.innerHTML = `
                <div class="message-box">
                    <p>The AV chose to switch lanes now.</p>
                </div>`;
            overlay2.style.display = 'block';
          };

          waitButton.onclick = function() {
            overlay2.innerHTML = `
                <div class="message-box">
                    <p>The AV chose to switch lanes now.</p>
                </div>`;
            overlay2.style.display = 'block';
          };
        };
    }
});