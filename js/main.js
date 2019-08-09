$(document).ready(function(){
    
    $(".m-menu-icon").click(function(){
        var menu = $(".main-menu .menu");
        var h = $(".main-menu .menu .menu-items").height();

        if(menu.height() > 0){
            menu.height(0);
        } else {
            menu.height(h);
        }

       
        
    });

});