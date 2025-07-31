function InputFildById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumberValue = parseFloat(inputValue);
    return inputNumberValue;
};

function getTextvalueid(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumberValue = parseFloat(textValue);
    return textNumberValue;
}

function showSectionId(id){
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cash-out-section').classList.add('hidden');
    document.getElementById('Transaction-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}