$(function(){
    var selectTabs = 'tabs-1';
    var showHelp = true;
    var textHelpHide ="Спрятать подсказки";
    var textHelpShow ="Показать подсказки";
    
    $("a").bind("click",function(){
        var currentTabs = $(this).attr("id");
        $('#'+selectTabs).css('background','#ddd');
        $('#'+currentTabs).css('background','#ada');
        $('#text__'+selectTabs).addClass('hideText');
        $('#text__'+currentTabs).removeClass('hideText');

        selectTabs=currentTabs;

    });
    $("a").hover(function(){
        $(this).css('border','1px solid grey')
    },function(){
        $(this).css('border','1px solid rgba(0,0,0,0)')
    }
    );

    $(":text").hover(function(){
        hideHelp();
        var currentInput=$(this).attr('name');
        $('#'+currentInput).show()
    },function(){
        var currentInput=$(this).attr('name');
        $('#'+currentInput).hide()
    }
    );

    $(":button").bind("click",function(){
        if(showHelp){    
            for(var i=1; i<=3; i++){
                $('#div-'+i).show()
            };  
            $(':button').attr('value',textHelpHide);   
            showHelp=false;
        }else{
            hideHelp();
        }
    });

    function hideHelp(){
    for(var i=1; i<=3; i++){
        $('#div-'+i).hide()
        $(':button').attr('value',textHelpShow);   
        showHelp=true;
    };  
};

});

