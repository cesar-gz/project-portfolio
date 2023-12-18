import React, { useEffect } from 'react';
import cover from './music/cover.jpeg'

function DJSchedule() {
  useEffect(() => {
    // Get the modal
    const modal = document.getElementById("myModal");

    // Get the button that opens the modal
    const btn = document.getElementById("DJ_button");

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.addEventListener("click", popupWindow);
    function popupWindow() {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };

    updateSchedule();
  }, []);

  function updateSchedule() {
    let nextDate = new Date();
    const pst = nextDate.toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
    });
    nextDate = new Date(pst);

    updateDJInfo(
      'Music Player',
      'This music player app was made during my web internship at Titan Radio. It is being used to play DJ Music curated from college students. Made with JavaScript, HTML, and CSS.',
      'Push Me',
      'View: https://titanradio.org/  GitHub: https://github.com/Angel-Armendariz/TitanRadioLivePlayer',
      cover,
    );

    if (nextDate.getMinutes() !== 0) { // You can check for seconds here too
      callEveryMinute();
    }

    function callEveryMinute() {
      setInterval(updateSchedule, 30000);
    }

    function updateDJInfo(djName, djBio, showName, showBio, showLogo) {
      const DJname0 = document.getElementById('DJname');
      const DJbio0 = document.getElementById('DJbio');
      const showName0 = document.getElementById('bio');
      const DJshowLogo0 = document.getElementById('DJshowLogo');
      const DJshowBio0 = document.getElementById('DJshowBio');

      if (DJname0 && DJname0.innerHTML !== djName)
        DJname0.innerHTML = djName;
      if (DJbio0 && DJbio0.innerHTML !== djBio)
        DJbio0.innerHTML = djBio;
      if (DJshowBio0 && DJshowBio0.innerHTML !== showBio)
        DJshowBio0.innerHTML = showBio;
      if (showName0 && showName0.innerHTML !== showName)
        showName0.innerHTML = showName;
      if (DJshowLogo0 && DJshowLogo0.style.backgroundImage !== `url('${showLogo}')`)
        DJshowLogo0.style.backgroundImage = `url('${showLogo}')`;
    }
  }

  return (
    <div>
    </div>
  );
}

export default DJSchedule;