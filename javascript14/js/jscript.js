'use strict';

var testData = [
{
    question: '2+2=',
    answer: ['Ответ=4', 'Ответ=3', 'Ответ=5'],
    check: ['true', 'false', 'false'],
    name: 'first'
},
{
    question: '3*3=',
    answer: ['Ответ=6', 'Ответ=9', 'Ответ=69'],
    check: ['false', 'true', 'false'],
    name: 'second'
},
{
    question: '1/0=',
    answer: ['Ответ=1', 'Ответ=0', 'На 0 делить нельзя'],
    check: ['false', 'false', 'true'],
    name: 'third'
}
];


localStorage.setItem('questionAnswer', JSON.stringify(testData));

$(function() {

var test = $('#test').html();

var content = localStorage.getItem('questionAnswer');
content = JSON.parse(content);

var page = tmpl(test, { 
	data: content
});

$('.show_test').click(function() {
	$('.show_test').hide();
	$('.check').css("display", "block");
    $('.check').before(page);
});

$('.check').on('click', function() { 
    var $result = true;
        $('.checkbox').each(function() {
    	if ($(this).prop('checked') != ($(this).attr('value') == 'true')) {
    			$result = false;
                return false;
    		}
    });
    console.log($result);

$('.modal_text')[0].innerHTML = $result ? 'Ответы верные, тест пройден' : 'Ответы неверные, тест не пройден'; 
$('.modal_window').css("display", "block").animate({opacity: 1}, 100); 
$('.overlay').show('slow'); 

});

$('.modal_button').on('click', function(){
    $('.modal_window').animate({opacity: 0}, 100, function() {
        $(this).css("display", "none"); 
        $('.overlay').hide('slow'); 
    })
    $('.checkbox').each(function() { 
        $(this).prop('checked', false);
    });
});

})