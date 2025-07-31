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