const optionsBttn   = document.querySelector('#options');
const hostname      = document.location.hostname;

optionsBttn.addEventListener("click", () => options());
async function options(){ 
    location.href = `/options.html`
}