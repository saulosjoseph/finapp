const total = document.querySelector('#total');
const calculate = document.querySelector('#calculate');

calculate.addEventListener("click", () => teste());

function teste(){
    const value = total.value;
    fetch('https://gentle-brushlands-96996.herokuapp.com/calculate', {
        method: "GET",
        body: {
            total: value
        }
    })
    .then(res => {
        console.log(res);
    })
}