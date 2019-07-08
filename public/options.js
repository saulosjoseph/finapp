const saveBttn = document.querySelector('#save');
const cancelBttn = document.querySelector('#cancel');
const budgetInput = document.querySelector('#budget');
const hostname = document.location.hostname;

cancelBttn.addEventListener("click", () => cancel());
function cancel(){
    location.href = '/home.html';
}
saveBttn.addEventListener("click", () => save());
async function save(){
    const budget = budgetInput.value;
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