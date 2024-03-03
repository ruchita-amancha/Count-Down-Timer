const endDate = "3 March 2024 3:13 PM";
document.getElementById('endDate').innerHTML = endDate

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  // console.log(end);
  // console.log(now);

  // converting milliseconds to seconds
  let difference = (end - now) / 1000;

  if (difference < 0) return
  const input = document.querySelectorAll('input');
  input[0].value =Math.floor(difference / 3600 / 24);
  input[1].value = Math.floor(difference / 3600 % 24);
  input[2].value = Math.floor(difference / 60)%60;
  input[3].value = Math.floor(difference % 60);
}

clock()
setInterval(clock, 1000);

// 1 second = 1000 milliseconds
// 1 minute = 60 seconds
// 1 hour = 60 minutes
// 1 day = 24 hours
// 1 year = 365 days
// 1 year = 365 * 24 * 60 * 60 seconds
