//alert("hello");	
function myPow (x, y) {
	var result=x;
	if ( x==0 ){
		result=0;
	}

	if ( y==0 ){
		result=1;
	}

	if (( x != 0 ) && ( y != 0 )) {
		for(var i=1; i<y; i++){
			result*=x;
		}	
	};
	
	if (y<0) { // если отричательная степень
		result=1 / result;
	};

	console.log(x, 'в степени ', y, '=', result);
}

var myTrue=true;
do{
	var x=prompt('Введите число');	
	myTrue=false;

	if ( isNaN(x) || (x=='') ) {
		alert("Ошибка, Вы должны ввести число, повторите ввод!");
		myTrue=true;	
	};
		
}while(myTrue);

myTrue=true;
do{
	var y=prompt('Введите степень числа');
	myTrue=false;
	
	if ( isNaN(y) || (y=='') ) {
		alert("Ошибка, Вы должны ввести число, повторите ввод!");
		myTrue=true;	
	}else{
		if ( (y - Math.floor(y) != 0 )) {
			alert("Ошибка, число должно быть целым, повторите ввод!");
			myTrue=true;	
		};
	};
		
}while(myTrue);

var result=myPow(x, y);