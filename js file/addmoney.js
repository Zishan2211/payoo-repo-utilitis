document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoneyInputPass = document.getElementById('addMoney-input-pass').value;

    const addMoneyInputAmount = document.getElementById('addMoney-input-Amount').value;
    const addMoneyInputAmountNumber = parseFloat(addMoneyInputAmount);
    const AvailableBlance = document.getElementById('Available-Blance').innerText;
    const AvailableBlanceNumber = parseFloat(AvailableBlance);


    if (addMoneyInputPass == '11') {
        const newAvailableBalence = AvailableBlanceNumber + addMoneyInputAmountNumber;
        document.getElementById('Available-Blance').innerText = newAvailableBalence;
    }
    else {
        alert('pleace enter correct password');
    }
})