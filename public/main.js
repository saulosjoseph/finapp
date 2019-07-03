const user = document.querySelector('#user');
const find = document.querySelector('#find');
const container = document.querySelector('#container2');

find.addEventListener("click", () => findUser());
async function findUser(){
    const userName = user.value;
    const rawResponse = await fetch('https://f1n4pp.herokuapp.com/user', {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': userName
        })
    })
    const content = await rawResponse.json();
    console.log(content);
    /*
    const p = document.createElement('p');
    p.innerText = `basic: ${content.basic}, education: ${content.education}`;
    container.appendChild(p);
    */
}