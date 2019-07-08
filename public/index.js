const user          = document.querySelector('#user');
const password      = document.querySelector('#password');
const find          = document.querySelector('#find');
const create        = document.querySelector('#create');
const container     = document.querySelector('#container2');
const hostname      = document.location.hostname;

create.addEventListener("click", () => createUser());
function createUser(){
    location.href = '/newuser.html';
}
find.addEventListener("click", () => findUser());
async function findUser(){
    const userId = user.value;
    const userPassword = password.value;
    const rawResponse = await fetch(`/user`, {
        method: 'PUT',
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
    if(content === true) location.href = '/home.html';
}