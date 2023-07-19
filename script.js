// javascript for switch clock format
const formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", () =>{
    formatSwitchBtn.classList.toggle("active");

    var formatValue = formatSwitchBtn.getAttribute("data-format");

    if(formatValue === "12"){
        formatSwitchBtn.setAttribute("data-format","24")
    }
    else{
        formatSwitchBtn.setAttribute("data-format","12")
    }
});


// Get current time in javascript
function clock(){
    let today = new Date();

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let period ="AM";

    // Set the time period(AM/PM)
    if(hours >= 12){
        period= "PM"
    }

    // Set the 12-hour clock format
    var formatValue = formatSwitchBtn.getAttribute("data-format")

    if(formatValue === "12"){
         hours = hours > 12 ? hours % 12 : hours ;
    }

    // Add the 0 for the values lower than 10
    if( hours < 10)
    {
        hours = "0" + hours ;
    }

    if( minutes< 10)
    {
        minutes = "0" + minutes ;
    }

    if( seconds < 10)
    {
        seconds = "0" + seconds ;
    }


    document.querySelector(".hours").innerHTML = hours ;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".period").innerHTML = seconds ;
    document.querySelector(".seconds").innerHTML = period ;
}

let updateClock = setInterval(clock,1000);

// Get the date in javascript
let today = new Date();
const dayNumber = today.getDate();
const year = today.getFullYear();
const dayName = today.toLocaleString("default",{ weekday: "long" });
const monthName = today.toLocaleString("default",{ month: "short"});

document.querySelector(".date-number").innerHTML = dayNumber;
document.querySelector(".month-name").innerHTML = monthName ;
document.querySelector(".year").innerHTML = year ;
document.querySelector(".date-name").innerHTML = dayName ;



// Javascript for dot menu toggle
const dotmenuBtn = document.querySelector(".dot-menu-btn");
const dotMenu = document.querySelector(".dot-menu");

dotmenuBtn.addEventListener("click",() => {
    dotMenu.classList.toggle("active");
});


document.addEventListener("click",(e) => {
    if(e.target.id !== "active-menu"){
        dotMenu.classList.remove("active");
    }
});
