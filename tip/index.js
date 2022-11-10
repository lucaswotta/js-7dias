function formatMoney(value) {
    value = value.toFixed(2)
    return `$${value}`;
}

function update() {
    let bill = Number(document.getElementById('yourBill').value);
    let tipPercent = Number(document.getElementById('tipInput').value);
    let split = Number(document.getElementById('splitInput').value);

    let tipValue = bill * (tipPercent / 100);
    let billTotal = bill + tipValue;
    let billEach = billTotal / split;

    document.getElementById('tipPercent').innerHTML = `${tipPercent}%`;
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue);
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal);
    document.getElementById('billEach').innerHTML = formatMoney(billEach);

    document.getElementById('splitValue').innerHTML = split;

}