document.getElementById('button-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('user-deposit');
    const newDepositString = depositField.value;
    const newDepositNumber = parseFloat(newDepositString);
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotalNumber = parseFloat(previousDepositTotalString) ; 
//add number to set total deposit
    const currentDepositeTotal = previousDepositTotalNumber + newDepositNumber;
    //set deposit total
    depositTotalElement.innerText = currentDepositeTotal;
    // get current balance total 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceTotalElementNumber = parseFloat(previousBalanceTotalElementString);
    //calculate current balance total
    const currentBalanceTotal = previousBalanceTotalElementNumber + newDepositNumber;

    // set total balance
    balanceTotalElement.innerText = currentBalanceTotal;
   

    //clear deposit field
    depositField.value = '';
})