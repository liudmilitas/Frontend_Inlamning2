const revenues = []; //Empty arrays for storing the objects gotten from addEntry()
const expenditures = [];

const updateDom = ()  => {
    const sumRevenues = revenues.reduce((previousValue, currentValue) => previousValue + parseInt(currentValue.value), 0); 
    // The reduce() method is used on an array to find the sum of all its elements. parseInt() is used in order to convert a string into the number type.
    const sumExpenditures = expenditures.reduce((previousValue, currentValue) => previousValue + parseInt(currentValue.value), 0);
    
    document.getElementById('RevenueSum').innerText = sumRevenues;
    document.getElementById('ExpenditureSum').innerText = sumExpenditures;
    document.getElementById('TotalSum').innerText = sumRevenues-sumExpenditures;
    document.getElementById('RevenueList').innerHTML = revenues.map(revenueEntry => `<li>${revenueEntry.entryName} : ${revenueEntry.value}</li>`).join("");
    //map() is used instead of a for-loop to go through all elements of revenues[] array. join() is used to remove commas between elements.
    document.getElementById('ExpenditureList').innerHTML = expenditures.map(expendituresEntry => `<li>${expendituresEntry.entryName} : ${expendituresEntry.value}</li>`).join("");
};

const addEntry = (e) => {
    // the function is triggered every time the submit button is clicked
    e.preventDefault()
    if (e.target[0].value === "-") {
        expenditures.push({entryName: e.target[1].value, value: e.target[2].value})
    }
    // condition is targeting the first input element of the form, creating and pushing an object in the array.
    if (e.target[0].value === "+") {
        revenues.push({entryName: e.target[1].value, value: e.target[2].value})
    }
    updateDom()
}

updateDom(); //UpdateDom function runs every time 'Submit' button is clicked, but also when the script loads initially to give the initial '0' values to sumRevenues and sumExpenditures 