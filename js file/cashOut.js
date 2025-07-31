document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    
    const cashoutInputPass = document.getElementById('cashOut-input-pass').value;

    const cashoutInputAmount = document.getElementById('cashOut-input-Amount').value;
    const cashoutInputAmountNumber = parseFloat(cashoutInputAmount);
    const AvailableBlance = document.getElementById('Available-Blance').innerText;
    const AvailableBlanceNumber = parseFloat(AvailableBlance);
    
    if (cashoutInputPass == '11') {
        const newAvailableBalence = AvailableBlanceNumber - cashoutInputAmountNumber;
        document.getElementById('Available-Blance').innerText = newAvailableBalence;
    }
    else {
        alert('pleace enter correct password');
    }
})