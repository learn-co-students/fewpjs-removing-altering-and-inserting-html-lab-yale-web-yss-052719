let mainTag = document.getElementById('main');
mainTag.remove();

var newHeader = document.createElement('h1');
newHeader.id = "victory"
document.body.appendChild(newHeader);

newHeader.innerHTML = "Xavier is the champion";