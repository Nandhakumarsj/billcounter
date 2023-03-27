let given_people = document.getElementById("people")
let tip = document.getElementById("tip") || 10;
let bill = document.getElementById("some") || 100;
let result;
let calculater = document.getElementById('calculated');

const calculateBill = () =>{
    console.log(tip.innerText);
    result = Number(bill.value)+Number(tip.value)*Number(bill.value)/100;
    calculater.innerText = (result/Number(given_people.innerText)).toFixed(2) || 0.00;
}
const increasePeople = () => {
    given_people.innerText = Number(given_people.innerText)+1;
    calculateBill();
}

const decreasePeople = () => {
    if (Number(given_people.innerText) > 1)
    {
        given_people.innerText= Number(given_people.innerText) - 1;
        calculateBill();
    }
}
