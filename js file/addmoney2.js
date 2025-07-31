document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoneyinput = InputFildById('addMoney-input-Amount');
    const addpinNumber = InputFildById('addMoney-input-pass');

    if (addpinNumber === 11) {
        const balance = getTextvalueid('Available-Blance');
        const newbalace = balance + addMoneyinput;

        document.getElementById('Available-Blance').innerText = newbalace;
    }
    else {
        alert('worng pin number')
    }

})