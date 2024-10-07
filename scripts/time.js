// Simple script to display the opening time of the pool

// In this case, it should display "We are open" when the pool is open
// and "We are closed" when the pool is closed
// If closed, it should give a countdown to the next opening time
// 7 am - 8 pm, mon - fri
// 8 am - 6 pm, sat
// 8 am - 4 pm, sun

function openTime() {
    var d = new Date();
    var n = d.getDay();
    var openTime = "07:00";
    var closeTime = "20:00";
    if (n == 6) {
        openTime = "08:00";
        closeTime = "18:00";
    }
    if (n == 0) {
        openTime = "08:00";
        closeTime = "16:00";
    }
    var currentTime = d.getHours() + ":" + d.getMinutes();
    if (currentTime >= openTime && currentTime <= closeTime) {
        return "We are open until " + closeTime;
    } else {
        return "We are closed";
    }
    
}

// update the open time every 5 minutes
setInterval(function() {
    document.getElementById("openingTime").innerHTML = openTime();
}, 300000);

// initial call to set the open time
document.getElementById("openingTime").innerHTML = openTime();

