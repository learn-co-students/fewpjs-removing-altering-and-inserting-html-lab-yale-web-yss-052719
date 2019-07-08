// Write your code here!


var maine = document.querySelector("main#main");
maine.remove();

var newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = ('Elijah is the champion')
document.body.append(newHeader)

