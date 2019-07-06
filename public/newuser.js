const user = document.querySelector('#user');
const password = document.querySelector('#password');
const create = document.querySelector('#create');
const container = document.querySelector('#container2');

create.addEventListener("click", () => createUser());
function createUser(){
    const userId = user.value;
    const userPassword = password.value;

    const rawResponse = await fetch('https://f1n4pp.herokuapp.com/user', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': userId,
            'pass': userPassword
        })
    })
    const content = await rawResponse.json();
    if(content) location.href = 'https://f1n4pp.herokuapp.com/'
}