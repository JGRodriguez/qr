$(document).ready(function(){
            var $map_canvas = $( "#googleMap" );
            $map_canvas.css({"width": "100%", "height": $( window ).height()*0.5});

            $( window ).resize(function() {
              
                // if( window.innerHeight != screen.height) {
                    $map_canvas.css({"width": "100%", "height": $( window ).height()*0.5}); // browser is  not fullscreen
                    
                   
                // }else{
                //     $map_canvas.css({"width": "100%", "height": $( window ).height()});
                // }
            });
});