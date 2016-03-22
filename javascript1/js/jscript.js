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
	
	console.log(x, 'в степени ', y, '=', result);
}

var x=prompt('Введите число');
var y=prompt('Введите степень числа');
var result=myPow(x, y);