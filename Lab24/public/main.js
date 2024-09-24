const addTaskButton = document.getElementById('addTaskButton');

const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const message = taskInput.value;

    fetch('/addTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    })
    .then(response => response.json())
    .then(data => {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';
        data.tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.message;
            taskList.appendChild(li);
        });
        taskInput.value = '';
    })
    .catch(error => console.error('Error:', error));
};

addTaskButton.addEventListener('click', addTask);
