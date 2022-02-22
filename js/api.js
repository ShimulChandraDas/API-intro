// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))


function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
};

function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data));
};
//loadPost()


function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUsers(data));
};

function displayUsers(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `name:${user.name},    Email: ${user.email} `;
        ul.appendChild(li);
    }
}


function loadEmail() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => DisplayEmail(data))
};
function DisplayEmail(data) {
    const ul = document.getElementById('email-id');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `Email:- ${user.email}, Name:- ${user.name};`;
        ul.appendChild(li);
    }

}