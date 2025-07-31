document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();

    const cashOutInput = InputFildById('cashOut-input-Amount');
    const cashOutinputPin = InputFildById('cashOut-input-pass');

    if(cashOutinputPin === 11){
        const balance = getTextvalueid('Available-Blance');
        const newblance = balance - cashOutInput;

        document.getElementById('Available-Blance').innerText = newblance;
    }
    else{
        alert('wrond pin, please try again');
    }

})