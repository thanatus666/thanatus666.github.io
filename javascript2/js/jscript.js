var arr = [];
for ( var i = 0; i < 5; i++ ){
 arr.push( prompt('Введите имя номер ' + (i+1), arr[i] ) );
}
    
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
