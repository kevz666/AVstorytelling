document.addEventListener('DOMContentLoaded', (event) => {
  const video = document.getElementById('myVideo');
  const overlay = document.getElementById('videoOverlay');
  const overlay2 = document.getElementById('videoOverlay2');
  const overlay3 = document.getElementById('videoOverlay3');

  document.getElementById('startRideButton').addEventListener('click', function() {
    const Video = document.getElementById('myVideo');
    if (Video) {
      Video.src = 'My Movie 10.mp4';
      Video.play().catch(e => console.error("Error playing the video:", e));
      overlay.style.display = 'none';
    } else {
      console.error('Video element not found');
    }
    video.play();
    this.closest('.overlay').style.display = 'none';
  });

  const Video = document.getElementById('myVideo');
  if (Video) {
      Video.onended = function() {
        overlay.innerHTML = `
          <div class="message-box">
              <p>Some pedestrians are crossing, do you...</p>
              <button id="yieldButton">Yield</button>
              <button id="keepDrivingButton">Keep Driving</button>
          </div>`;
        overlay.style.display = 'block';

        // Move the event listener setup inside the onended function
        const yieldButton = document.getElementById('yieldButton');
        const keepDrivingButton = document.getElementById('keepDrivingButton');

        yieldButton.onclick = function() {
          overlay.innerHTML = `
              <div class="message-box">
                  <p>The AV yielded to the pedestrians.<br>
                  <i>Scroll down to continue</i></p>
              </div>`;
          overlay.style.display = 'block';
        };

        keepDrivingButton.onclick = function() {
          overlay.innerHTML = `
              <div class="message-box">
                  <p>The AV yielded to the pedestrians.</p>
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
    secondVideo.play();
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
                  <p>The AV chose to switch lanes now.<br>
                  <i>Scroll down to continue</i></p>
              </div>`;
          overlay2.style.display = 'block';
        };
      };
  }

  document.getElementById('continueRideButton2').addEventListener('click', function() {
    const thirdVideo = document.getElementById('myThirdVideo');
    if (thirdVideo) {
      thirdVideo.src = 'My Movie 12.mp4';
      thirdVideo.play().catch(e => console.error("Error playing the video:", e));
      overlay3.style.display = 'none';
    } else {
      console.error('Third video element not found');
    }
    thirdVideo.play();
    this.closest('.overlay3').style.display = 'none';
  });

  const thirdVideo = document.getElementById('myThirdVideo');
  if (thirdVideo) {
      thirdVideo.onended = function() {
        overlay3.innerHTML = `
          <div class="message-box">
              <p>You have arrived.</p>
              <button id="endButton">End Ride</button>
          </div>`;
        overlay3.style.display = 'block';

        const endButton = document.getElementById('endButton');

        endButton.onclick = function() {
          overlay3.innerHTML = `
              <div class="message-box">
                  <p>Thank you for riding in an autonomous vehicle.<br>
                  <i>Scroll down to continue</i></p>
              </div>`;
          overlay3.style.display = 'block';
        };
      };
  }
});