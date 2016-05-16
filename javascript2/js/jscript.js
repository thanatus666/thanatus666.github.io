var arr = [];
var oneName;
var i=0;
do{
	oneName=prompt('Введите имя номер ' + (i+1), arr[i] );
 	if (oneName==""){
 		alert('Вы ввели пустую строку, повторите ввод');
 	}else{
 		arr.push(oneName);
 		i++;
 	}
 	
}while (i<5);
    
var name = prompt('Введите ваше имя:');

var yesName = false;

for ( i = 0; i < 5; i++ ){
	/*debugger;*/
  	if (arr[i] == name){
    	yesName = true;
  	}; 
};

if ( yesName ){
		alert( name + ' вы успешно вошли');
    }
    else{
    	alert('Error!!! <' + name + '> - отсутствует в списке имен!');	
    };
