//get withdraw button

document.getElementById('button-withdraw').addEventListener('click', function () {
    //withdraw field 
    const withdrawField = document.getElementById('user-withdraw');
    const newWithdrawString = withdrawField.value;
    const newWithdrawNumber = parseFloat(newWithdrawString);
    
    //Display withdraw field
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotalNumber = parseFloat(previousWithdrawTotalString);


    //current withdraw calculate
    const currentWithdrawTotal = previousWithdrawTotalNumber + newWithdrawNumber;
//set vaalue on total withdraw

withdrawTotalElement.innerText = currentWithdrawTotal;

//previous balance total
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalElementString = balanceTotalElement.innerText;
const previousBalanceTotalElementNumber = parseFloat(previousBalanceTotalElementString);

//calculate new balance total 
const newbalanceTotal = previousBalanceTotalElementNumber - newWithdrawNumber;
balanceTotalElement.innerText = newbalanceTotal
// clear the input field 
withdrawField.value = '';
})