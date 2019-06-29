const total = document.querySelector('#total');
const calculate = document.querySelector('#calculate');
const container = document.querySelector('#container2');

calculate.addEventListener("click", () => teste());
async function teste(){
    const value = total.value;
    console.log(value);
    const rawResponse = await fetch('https://gentle-brushlands-96996.herokuapp.com/calculate', {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            total: value
        })
    })
    const content = await rawResponse.json();
    const p = document.createElement('p');
    p.innerText = `basic: ${content.basic}, education: ${content.education}`;
    container.appendChild(p);
}