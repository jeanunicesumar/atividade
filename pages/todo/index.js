document.addEventListener('DOMContentLoaded', function () {
    main()
})

function main() {

    const button = document.getElementById('button');
    const field = document.getElementById('field');

    button.addEventListener("click", (e) =>  {
        saveField(field);
    });

    showTasks();
}

function saveField(field) {

    if (!field.value) {
        return;
    }

    const fields = JSON.parse(localStorage.getItem('fields')) || [];
    fields.push(field.value);
    localStorage.setItem('fields', JSON.stringify(fields));

    showTasks();
}

function showTasks() {

    const tasks = document.querySelector('#tasks');
    tasks.innerHTML = '';
    const fields = JSON.parse(localStorage.getItem('fields')) || [];

    fields.forEach(field => {
        const p = document.createElement("p");
        p.textContent = field;
        tasks.appendChild(p);
    });

}