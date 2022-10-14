function calculate() {
    let first = document.getElementById('first').value;

    let second = document.getElementById('second').value;

    let output =parseInt(first) + parseInt(second);

    document.getElementById('output').innerText = output;
}