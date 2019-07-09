// Write your code here!
let main = document.getElementById('main');
main.remove();

var newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'YOUR-NAME is the champion';
body.appendChild(newHeader);