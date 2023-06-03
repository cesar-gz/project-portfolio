var minutes=0;
var seconds=0;
var width = 0;
var timeLeft = 0;

window.setInterval(disp(), 1000);


// this function adjusts the text timer underneath the playbar
function disp(){
  updateTimer(); // Call updateTimer function to sync with system time

  // Format the output by adding 0 if it is single digit
  if(seconds<10){var s1='0' + seconds;}
  else{s1=seconds;}
  if(minutes<10){var m1='0' + minutes;}
  else{m1=minutes;}

  // Display the output
  let str= m1 +':' + s1 ;
  document.getElementById('songTimer').innerHTML=str;
}

function updateTimer() {
  var currentDate = new Date();
  minutes = currentDate.getMinutes();
  seconds = currentDate.getSeconds();
}

function calculateMinutes(){
  var todaysDate = new Date();
  var pst = todaysDate.toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
    });
  todaysDate = new Date(pst);
  width = todaysDate.getMinutes() / .6000      // the width will be based on the current time
  timeLeft = 3600000 - (width * 36000);        // initialize this variable so that update() runs every hour correctly
  minutes = todaysDate.getMinutes();
  seconds = todaysDate.getSeconds();
}

function updatePlaybar() {
  // The progress bar is based from 0 to 100. 100 means the bar is at 1 hour, its full green.
  // 0 means the bar is at 0 minutes 0 seconds, its full grey.
  // This function increments the variable "width" until it hits 100.
  var element = document.getElementById("playbar_inner");
  setInterval(scene, 1000); // will increase the progress bar width every second
  function scene() {
    var currentDate = new Date();
    var currentMinutes = currentDate.getMinutes();
    var currentSeconds = currentDate.getSeconds();

    // Calculate the width based on the current minutes and seconds
    width = (currentMinutes * 60 + currentSeconds) / 3600 * 100;

    element.style.width = width + "%";
  }
}

updatePlaybar();
calculateMinutes();
setInterval(updatePlaybar, timeLeft); // this will reset the progress bar back to 0/100 every hour
setInterval(calculateMinutes, timeLeft);
