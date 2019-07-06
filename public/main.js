const user = document.querySelector('#user');
const password = document.querySelector('#password');
const find = document.querySelector('#find');
const create = document.querySelector('#create');
const container = document.querySelector('#container2');

create.addEventListener("click", () => createUser());
function createUser(){
    location.href = 'https://f1n4pp.herokuapp.com/newuser';
}
find.addEventListener("click", () => findUser());
async function findUser(){
    const userId = user.value;
    const userPassword = password.value;

    const rawResponse = await fetch('https://f1n4pp.herokuapp.com/user', {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'id': userId,
            'pass': userPassword
        })
    })
    const content = await rawResponse.json();
    alert(content);
}