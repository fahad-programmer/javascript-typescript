//Chossing the end date
const endDate = "26 May 2023 10:00"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll('input')

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const difference = (end - now) / 1000

    if (difference < 0) return;
    
    //Convert into Days
    inputs[0].value = Math.floor(difference/ 3600 / 24)

    //Hours
    inputs[1].value = Math.floor((difference / 3600) % 24)

    //Minutes
    inputs[2].value = Math.floor((difference / 60) % 60)

    //Seconds
    inputs[3].value = Math.floor((difference) % 60)


}

clock()


setInterval(
    () => {
        clock()
    },
    1000
)