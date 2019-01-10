function timebox() { // 30min
  // halftime, 1 min, 10sec, done
  // 1. Convert to seconds => 1800s
  // 2. Find seconds for each point
  // 3. Set timeout then console.log
  var meetingName = prompt("Please enter the meeting name: ")
  var duration = prompt("How long is the meeting (Enter in minutes): ")
  var durationSec = Number(duration) * 60

  var halftime = durationSec / 2;
  var oneMin = 60;
  var tenSec = 10;

  // console.log(name + ' has started.');

  const timer = setInterval(function() {
    if (durationSec !== 1) {
      // console.log(durationSec);
      durationSec--;
    } else {
      alert(`${meetingName} - Time is up!`);
      clearInterval(timer);
    }
  }, 1000)
}

// timebox('Test', 0.2);
// timebox('Test 2', 0.1);
// timebox('Meeting', 1);
// timebox('Um', 10000000);
// timebox('idk', 5.5);
