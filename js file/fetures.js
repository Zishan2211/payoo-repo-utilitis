document.getElementById('btnAddMoney').addEventListener('click', function (event) {
    event.preventDefault();

    document.getElementById('add-money-section').classList.remove('hidden');
    document.getElementById('cash-out-section').classList.add('hidden');
})

document.getElementById('btnCashOut').addEventListener('click', function (event) {
    event.preventDefault();

    document.getElementById('cash-out-section').classList.remove('hidden');
    document.getElementById('add-money-section').classList.add('hidden');
})