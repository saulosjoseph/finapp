const total = document.querySelector('#total');
const calculate = document.querySelector('#calculate');

calculate.addEventListener("click", () => teste());

function teste(){
    const value = total.value;
    fetch('https://gentle-brushlands-96996.herokuapp.com/calculate', {
        method: "PUT",
        body: {
            total: value
        }
    })
    .then(res => {
        res.json();
    })
    .then(res => {
        console.log(res);
    })
}