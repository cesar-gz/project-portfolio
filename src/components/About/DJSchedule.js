import React, { useEffect } from 'react';

function DJSchedule() {
  useEffect(() => {
    updateSchedule();

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
  }, []);

  function updateSchedule() {
    let nextDate = new Date();
    const pst = nextDate.toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
    });
    nextDate = new Date(pst);

    updateDJInfo(
      'TR Staff',
      'Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.',
      'TR2',
      'TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It\'s a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you\'re going to get, but one thing is for sure, it\'s always good stuff.',
      'https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png'
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
      const DJshowLogo0 = document.getElementById('DJshowLogo');
      const DJshowBio0 = document.getElementById('DJshowBio');

      if (DJname0.innerHTML !== djName)
        DJname0.innerHTML = djName;
      if (DJbio0.innerHTML !== djBio)
        DJbio0.innerHTML = djBio;
      if (DJshowBio0.innerHTML !== showBio)
        DJshowBio0.innerHTML = showBio;

      if (DJshowLogo0.style.backgroundImage !== `url('${showLogo}')`)
        DJshowLogo0.style.backgroundImage = `url('${showLogo}')`;
    }

    return null;
  }

  return (
    <div>
      {/* Your JSX code for the modal goes here */}
    </div>
  );
}

export default DJSchedule;
