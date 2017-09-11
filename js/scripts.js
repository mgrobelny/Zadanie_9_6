// scripts.js

//przypisanie przycisku do zmiennej "add":
var add = document.getElementById('addElem'),

//zapamiętanie w zmiennej "list" odniesienia do elementu z id 'list':
    list = document.getElementById('list');

//nadanie listenera przyciskowi i ustawienie wykonania funkcji po kliknięciu:
add.addEventListener('click', function(e) {

//przypisanie metody createElement do zmiennej element:
    var element = document.createElement('li');

//przypisanie dla utworzonych elementów "li" tekstu 'Item' oraz kolejnej liczby: 
    element.innerText = 'Item ' + (document.getElementsByTagName('li').length);

//dodawanie elementu do zmiennej "list" na końcu:
    list.appendChild(element);
});