var parentElem = document.body;

var div = document.createElement('div');
div.classList.add('container');
parentElem.insertBefore(div, parentElem.children[0]);

var mainForm = document.createElement('form');
mainForm.setAttribute('name',"main");
mainForm.setAttribute('method',"post");
mainForm.setAttribute('action',"#");
div.appendChild(mainForm);

var h2 = document.createElement('h2');
h2.innerHTML = 'Тест по программированию';
mainForm.appendChild(h2);

var ol = document.createElement('ol');
ol.classList.add('menu');
mainForm.appendChild(ol);

for(var i=1; i<=3; i++){
    var li__ol = document.createElement('li');
    li__ol.classList.add('menu--item');
    li__ol.innerHTML='Вопрос №' + i;
    ol.appendChild(li__ol);
    var ul = document.createElement('ul');
    ul.classList.add('under__menu');
    li__ol.appendChild(ul);
    for(var j=1; j<=3; j++){
        var li = document.createElement('li');
        li.classList.add('under__menu--item');
        ul.appendChild(li);
        var label = document.createElement('label');
        li.appendChild(label);
        var input = document.createElement('input');
        input.setAttribute('type','checkbox');
        input.setAttribute('value','check' + j);
        input.setAttribute('name','check');
        label.appendChild(input);
        var span = document.createElement('span');
        span.innerHTML='Вариант ответа №' + j;
        label.appendChild(span);
    }   

}

var submit = document.createElement('input');
submit.setAttribute('type',"submit");
submit.setAttribute('value',"Проверить мои результаты");
mainForm.appendChild(submit);