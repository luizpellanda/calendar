window.setInterval(function () {
    // Current Day - Hour - moment.js //
    let NowMoment = moment().format('MMMM Do YYYY, h:mm:ss a');;
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = NowMoment;
    let currentHour = moment().format("HH");
}, 1000);

