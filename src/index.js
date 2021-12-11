const $taskForm = {
    input: document.querySelector('#new-task'),
    button: document.querySelector('#add-task'),
}

const $taskList = document.querySelector('.task-list')

// {title: '', done: true}

{/* <div class="task-item">
<input type="checkbox" class="task-item__checkbox">
<span class="task-item__title">Купить воды</span>
<button class="tesk-item__delete">Удалить</button>
</div> */}

let tasks = [];

let lastID = 1;

function IDGenerator() {
    return lastID++;
}


function addTask() {
    const task = {};

    task.id = IDGenerator();
    task.title = $taskForm.input.value; // input-это свойство значения value
    task.done = false;
    tasks.push(task);
    render()
}


function createTaskElement({id, title, done}) {
    const containerEl = document.createElement('DIV');
    containerEl.classList.add('task-item');

    const checkboxEl = document.createElement('INPUT');
    checkboxEl.classList.add('task-item__checkbox');
    checkboxEl.setAttribute('type', 'checkbox'); // метод, кот. уст. атрибут(ы)
    
    const titleEl = document.createElement('SPAN');
    titleEl.classList.add('task-item__title');
    titleEl.textContent = title;

    const buttonEl = document.createElement('BUTTON');
    buttonEl.classList.add('task-item__delete');
    buttonEl.setAttribute('data-id', id);
    buttonEl.textContent = 'УДАЛИТЬ';

    if(done) {
        checkboxEl.setAttribute('checked', 'checked');
        titleEl.classList.add('task-item__title--done');
    }

    containerEl.append(checkboxEl);
    containerEl.append(titleEl);
    containerEl.append(buttonEl);

    return containerEl;
}
 
    function render() {
        $taskList.textContent = '';

        for (let i=0; i < tasks.length; i++) {
            $taskList.append(
                createTaskElement(tasks[i])
            )
        }
        }

        function deleteTask(id) {
            const i = tasks.findIndex((task) => task.id == id)

            if(i !== -2) {
                tasks.splice(i, 1)
                render();
            }
}


    $taskForm.button.addEventListener('click', addTask);
    $taskList.addEventListener('click', (e) => {            //обработчик события
        if(e.target.tagName == 'BUTTON') {
            const t_id = e.target.getAttribute('data-id');
            deleteTask(t_id);
        }
    }) 


    render();
