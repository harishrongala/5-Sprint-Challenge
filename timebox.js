function timebox(name, duration) { // 30min
  // halftime, 1 min, 10sec, done
  // 1. Convert to seconds => 1800s
  // 2. Find seconds for each point
  // 3. Set timeout then console.log
  var durationSec = duration * 60;
  var halftime = durationSec / 2;
  var oneMin = 60;
  var tenSec = 10;

  // console.log(name + ' has started.');

  const timer = setInterval(function() {
    if (durationSec !== 1) {
      // console.log(durationSec);
      durationSec--;
    } else {
      console.log("Time is up!");
      clearInterval(timer);
    }
  }, 1000)
}

timebox('Test', .1);
