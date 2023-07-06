const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
const deadline = document.querySelector(".date");
const items = document.querySelectorAll(".format-timer h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDay();

const future = new Date(tempYear, tempMonth, tempDay + 10, 10, 30,0);
const year = future.getFullYear();
const hours = future.getHours();
const minutes = future.getMinutes();
let month = future.getMonth();
month = months[month];
const day = future.getDate();
const weekday = weekdays[future.getDay()];

deadline.innerHTML =` ${weekday}, ${day} ${month} ${year} ${hours}:${minutes}am`;

const futureTime = future.getTime();
function remainTime(){
    const currentTime = new Date().getTime();
    const t = futureTime - currentTime;
    //values in miniseconds
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr

    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

    let days = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let secounds = Math.floor((t % oneMinute) / 1000);

    const values = [days, hours, minutes, secounds];

    function format(item){
        if(item <10 ){
            return (item =`0${item}`);
        }
        return item;
    }
    items.forEach(function(item, index){
        item.innerHTML = format(values[index]);
    });
    if(t<0){
        clearInterval(coutdown);
        deadline.innerHTML = `sorry, this giveaway has expired!`;
    }
}
let coutdown = setInterval(remainTime, 1000);
remainTime();