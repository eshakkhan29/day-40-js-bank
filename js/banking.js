// banking js 

// deposit 

document.getElementById('deposit-button').addEventListener('click', function(){
    const newDepositText = document.getElementById('diposit-input');
    const newDeposit = parseFloat(newDepositText.value);

    const prevDepositValueText = document.getElementById('deposit-value');
    const  prevDepositValue = parseFloat(prevDepositValueText.innerText);

    const totalDeposit = newDeposit + prevDepositValue;
    const totalDepositValue = prevDepositValueText.innerText = totalDeposit;

    const accountValueText = document.getElementById('account-value');
    const accountValue = parseFloat(accountValueText.innerText);
    const totaAccountValue = newDeposit + accountValue;
    const totalAccount = accountValueText.innerText = totaAccountValue;

    newDepositText.value = '';
    
});

// withdraw

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInputText = document.getElementById('withdraw-input');
    const withdrawInput = parseFloat(withdrawInputText.value);
    
    const withdrawValueText =document.getElementById('withdraw-value');
    const withdrawValue = parseFloat(withdrawValueText.innerText);

    const totalWithdrawValue = withdrawInput + withdrawValue;
    const totalWithdraw = withdrawValueText.innerText = totalWithdrawValue;

    const accountValueText = document.getElementById('account-value');
    const accountValue = parseFloat(accountValueText.innerText); 
    const totaAccountValue = accountValue - withdrawInput;
    const totalAccount = accountValueText.innerText = totaAccountValue;

    withdrawInputText.value = '';
});