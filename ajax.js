$(document).ready(function() {
        $.ajax({
            type: 'GET',
            url: 'text.txt',
        
        }).done(function(data){ $('#write').html(data)})
    
        $('#boton').click(function(){ 
            $.ajax({
                type: 'GET',
                url: 'text2.txt',
                cache: false,
        
            }).done(function(data){ $('#writeBoton').html(data)})
        })
});    

