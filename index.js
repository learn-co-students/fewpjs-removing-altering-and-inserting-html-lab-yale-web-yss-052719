let element = document.getElementById('main');
element.remove();

var newHeader = document.createElement('h1');
newHeader.id = 'victory'
document.body.appendChild(newHeader);

newHeader.innerHTML = 'Rina is the champion';