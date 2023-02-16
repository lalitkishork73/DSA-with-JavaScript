const time = function (s) {

    let hh = parseInt(s.slice(0, 2))
    let PM_AM = s.slice(8, 10)
    if (PM_AM == "PM") {
        hh >= 12 ? console.log(s.slice(0, 8)) : console.log(12 + hh + s.slice(2, 8), "h")
    } else {
        hh == "12" ? console.log("00" + s.slice(2, 8)) : console.log(s.slice(0, 8));
    }
}

let t = '12:01:00AM'
time(t);