    $(document).ready(function(){

        if(window.location.href.indexOf('conductores')>-1){
            // $("#test").load('http://172.16.14.31:8080/LaravelBosqueTravel-master/public/API/drivers');
                $.getJSON( 'http://172.16.14.31:8080/LaravelBosqueTravel-master/public/API/drivers', function( data ) {
                    var items = data;
                    var lista= document.getElementById('listaConductores');
                    var conductores="";
                    for(var i=0;i<items.length;i++){
                        /*
                        conductores=conductores+"<li><div class='ui-grid-b' ><div class='ui-block-a' style='width: 20%;'><img class='imgList' src="+items[i].img+" eight='50' width'50'></div>"+
                        "<div class='ui-block-b' style='width: 65%;'><div data-role='fieldcontain'><h2>"+items[i].name+"</h2><p><b>Id:"+items[i].id+"</b></p><p><b>Edad:"+items[i].age+"años</b>"+
                        "</p></div></div><div class='ui-block-c' style='width: 6%;  float: right;'><div style='float: right;'><a href='#' data-role='button' data-icon='gear' data-iconpos='notext' "+
                        "data-theme='c' data-inline='true'>Configurar</a><br><a href='#' data-role='button' data-icon='forbidden' data-iconpos='notext' data-theme='c' data-inline='true'>Eliminar</a>"+
                        "</div></div></div></li>";

                        */
                        alert (items[i].name)+"<br>";
                    }
                    

                });

                lista.innerHTML="";
        }

    });
