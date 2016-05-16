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

var page = {
    liClass : 'menu--item',
    liHTML : 'Вопрос №',
    ulClass :  'under__menu',
    liUnderClass : 'under__menu--item',

    createLi : function(n){
        for(var i=1; i<=n; i++){
            var li__ol = document.createElement('li');
            li__ol.classList.add(this.liClass);
            li__ol.innerHTML=this.liHTML + i;
            ol.appendChild(li__ol);
            var ul = document.createElement('ul');
            ul.classList.add(this.ulClass);
            li__ol.appendChild(ul);
            for(var j=1; j<=3; j++){
                var li = document.createElement('li');
                li.classList.add(this.liUnderClass);
                ul.appendChild(li);
                var label = document.createElement('label');
                li.appendChild(label);
                var input = document.createElement('input');
                input.setAttribute('type','checkbox');
                input.setAttribute('value','check' + j);
                input.setAttribute('name','check');
                label.appendChild(input);
                var span = document.createElement('span');
                span.innerHTML=this.liHTML + j;
                label.appendChild(span);
            }   
        }
    },     // function
    
    createSubmit: function(name){
        var submit = document.createElement('input');
        submit.setAttribute('type',"submit");
        submit.setAttribute('value',name);
        mainForm.appendChild(submit);        
    }
};

page.createLi(3);
page.createSubmit("Проверить мои результаты");


