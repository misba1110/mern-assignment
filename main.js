var arr = [];


function addToList() {
    var inp = document.getElementById('number');
    var lis = document.getElementById('numberList');

    var x = parseInt(inp.value);
    if (Number.isNaN(x)) return;
    arr.push(x);
    
    inp.value = '';
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(x));
    lis.appendChild(li);
}


function clearDisplay() {
    var cons = document.getElementById('console');
    var lis = document.getElementById('numberList');

    cons.innerHTML = '';
    lis.innerHTML = '';
}


function resetCalculator() {
    clearDisplay();
    arr.length = 0;
}


function sum() {
    var cons = document.getElementById('console');
    var res = arr.reduce((a, b) => a + b, 0);
    cons.innerHTML = res;
}


function average() {
    var cons = document.getElementById('console');
    var res = (arr.reduce((a, b) => a + b, 0) / arr.length) || 0;
    cons.innerHTML = res;
}


function minimum() {
    var cons = document.getElementById('console');
    var res = Math.min(...arr);
    cons.innerHTML = res;
}


function refreshList() {
    var lis = document.getElementById('numberList');
    lis.innerHTML = '';

    for (var i = 0; i < arr.length; ++i) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(arr[i]));
        lis.appendChild(li);
    }
}