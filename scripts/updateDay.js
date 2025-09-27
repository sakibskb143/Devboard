function updateDate(){
    const today = new Date();

    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];

    const dayName = days[today.getDay()];
    const monthName = months[today.getMonth()];
    const day = today.getDate();
    const year = today.getFullYear();

    document.getElementById('day').innerText = dayName + ',';
    document.getElementById('task-upcoming').innerText = `${monthName} ${day} ${year}`;
}

updateDate();
setInterval(updateDate, 1000 * 60 * 60); // update every 1 hour
