const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days")


let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();


const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const renderCalender = () =>{
    let lastDateOfMonth = new Date(currYear,currMonth,0).getDate();
    let liTag = "";
    for(let i = 1; i <= lastDateOfMonth;i++){
        liTag += `<li>${i}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`
    daysTag.innerHTML = liTag;
}

renderCalender();