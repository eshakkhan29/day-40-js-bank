// loog in js 

document.getElementById('loogin-button').addEventListener('click', function(){
    const accountInput = document.getElementById('account-input');
    const accountValue = accountInput.value;
    const passwordInput = document.getElementById('input-password');
    const passwordValue = passwordInput.value;
    if (accountValue == 'Account' && passwordValue == 'password') {
        window.location.href = 'banking.html';
    }
    else{
        alert('Input Account = Account, and password = password')
    }
    accountInput.value = '';
    passwordInput.value = '';
});