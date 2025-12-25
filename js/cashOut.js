document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
    event.preventDefault();
    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');
    // console.log('inside the click handler', cashOut, pinNumber);

    if(pinNumber === 1234){
        const balance = gEtTextFieldValueById('account-balance');
        const newBalance = balance -cashOut;
        document.getElementById('account-balance').innerText =newBalance;

        // add to transaction history 
        const div = document.createElement('div');
        div.classList.add('bg-red-100');
        div.innerHTML=`
        <h4 class="text-2xl font-bold">Withdraw</h4>
        
        <p>${cashOut} Withdraw. New Balance ${newBalance} </p>
        `
        document.getElementById('transaction-container').appendChild(div);

    }
else{
    alert('Something is wrong, please try again')
}
});