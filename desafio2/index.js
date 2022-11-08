let productValue = Number(prompt('Enter the product value: '));

if (productValue >= 20) {
    document.getElementById('result').innerHTML = 'Approved'
    document.getElementById('result').style.color = 'green'
} else {
    document.getElementById('result').innerHTML = 'Denied'
    document.getElementById('result').style.color = 'red'
}