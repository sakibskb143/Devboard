const completeTasks = document.querySelectorAll('.complete-btn');

completeTasks.forEach(button => {
    button.addEventListener("click", () => {
        let taskValue = getInputByID('task-assigned');
        let taskDone = getInputByID('task-done');

        taskDone++;
        taskValue--;

        if (taskValue >= 0) {
            setInputByID('task-assigned', taskValue);
            setInputByID('task-done', taskDone);
            button.setAttribute('disabled', 'true');
        }

        const card = button.closest('div.p-6');
        const taskTitle = card.querySelector('.uncompleted-task').innerText; // pass text
        console.log(taskTitle);

        makeHistoryByValue(taskTitle);

    });
});

document.getElementById('activity-btn').addEventListener('click', function () {
    document.getElementById('history-container').style.display = 'none';

});

document.getElementById('discover').addEventListener('click', function () {
    window.location.href = 'next.html';
});

function makeHistoryByValue(taskTitle) {
    const container = document.getElementById('history-container');
    const now = new Date();
    const time = now.toLocaleTimeString();

    // Create div first
    const div = document.createElement('div');
    div.classList.add('bg-[#f4f7ff]', 'p-2', 'rounded-xl', 'mb-2');

    div.innerHTML = `
        <p>You have completed ${taskTitle} at ${time}</p>
    `;

    container.appendChild(div);
}

function getInputByID(id) {
    const values = document.getElementById(id);
    const value = parseInt(values.innerText); // use parseInt for integer counts
    return value;
}

function setInputByID(id, value) {
    document.getElementById(id).innerText = value;
}