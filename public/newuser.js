const user = document.querySelector('#user');
const password = document.querySelector('#password');
const create = document.querySelector('#create');
const container = document.querySelector('#container2');
const hostname = document.location.hostname;

create.addEventListener("click", () => createUser());
async function createUser(){
    const userId = user.value;
    const userPassword = password.value;

    const rawResponse = await fetch(`/user`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'id': userId,
            'password': userPassword
        })
    })
    const content = await rawResponse.json();
    if(content) location.href = `/`
}