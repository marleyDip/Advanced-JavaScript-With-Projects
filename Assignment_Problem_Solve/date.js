// How can we get current time in millisecond of current time?

//Returns the number of milliseconds elapsed since January 1, 1970 (UTC).
let currentTime = Date.now();
console.log(currentTime); // 1748769592701

let currentTime1 = new Date().getTime();
console.log(currentTime1); // 1748769592709

/*  
    Returns high-resolution timestamp (milliseconds with decimals) relative to page load.
        => Useful for performance measurement, not for current date/time.
 */
let start = performance.now();
console.log(start);

let currentDate = new Date();

let day = currentDate.getDay();
let date = currentDate.getDate();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

// js count month from 0 to 11, thats why +1  to get exact month

console.log(
  "Date Count",
  day,
  "-",
  "Current date",
  date,
  "-",
  "Current Year",
  year,
  "-",
  "Month Count",
  month,
  "-",
  "Current Hours",
  hours,
  "-",
  "Current Minutes",
  minutes,
  "-",
  "Current Seconds",
  seconds
);

let currentDate1 = new Date();

console.log("Full date -", currentDate1);

console.log("Full date -", currentDate1.toString());
console.log("International Date-", currentDate1.toDateString());
console.log("International Time -", currentDate1.toTimeString());

console.log("Local Date & Time -", currentDate1.toLocaleString());
console.log("Local Date -", currentDate1.toLocaleDateString());
console.log("Local Time -", currentDate1.toLocaleTimeString());
