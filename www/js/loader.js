$(document).ready(function(){
    var lista;
    var itemHTML;
    var totalItemsHTML="";
    if(window.location.href.indexOf('#conductores')>-1){
        lista=$('#listaConductores');
        itemHTML="<li>"+
                            "<div class='ui-grid-b'>"+
                                "<div class='ui-block-a' style='width: 20%;'>"+
                                "<img class='imgList' src='linkImagen' height='50' width='50'>"+
                                "</div>"+
                                "<div class='ui-block-b' style='width: 65%;'>"+
                                    "<div data-role='fieldcontain' class='ui-field-contain'>"+
                                            "<p><h2>nombreConductor apellidoConductor</h2></p>"+
                                            "<p><b>Id:idConductor</b></p>"+
                                            "<p><b>Edad: edadConductor años</b></p>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='ui-block-c' style='width: 6%;  float: right;'>"+
                                    "<div style='float: right;'>"+
                                       "<a href='#' data-role='button' data-icon='gear' data-iconpos='notext' data-theme='c' data-inline='true' class='ui-link ui-btn ui-btn-c ui-icon-gear ui-btn-icon-notext ui-btn-inline ui-shadow ui-corner-all' role='button'>Configurar</a><br>"+
                                       "<a href='#' data-role='button' data-icon='forbidden' data-iconpos='notext' data-theme='c' data-inline='true' class='ui-link ui-btn ui-btn-c ui-icon-forbidden ui-btn-icon-notext ui-btn-inline ui-shadow ui-corner-all' role='button'>Eliminar</a>"+
                                    "</div>"+
                                "</div>"+    
                            "</div>"+
                      "</li>";
        $.getJSON(serverURL+"/drivers", function( data ) {
            for(var i=0;i<data.length;i++){
                lista.append(itemHTML.replace('linkImagen','http://a4.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTI2NTgyMzIxOTcyMjU5NDU5.jpg').replace('nombreConductor',data[i].firstName).replace('apellidoConductor',' '+data[i].lastName).replace('idConductor',data[i].id).replace('edadConductor',data[i].age));
                // $('#listaConductores').append(itemHTML.replace('linkImagen','http://a4.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTI2NTgyMzIxOTcyMjU5NDU5.jpg').replace('nombreConductor',data[i].firstName).replace('apellidoConductor',' '+data[i].lastName).replace('idConductor',data[i].id).replace('edadConductor',data[i].age));
            }
            lista.listview('refresh'); 
            // $('#listaConductores').listview('refresh');
        }).fail( function(d, textStatus, error) {
            console.log("getJSON failed, status: " + textStatus + ", error: "+error)
        });   

   }else if(window.location.href.indexOf('#buses')>-1){
        alert("lkjsdfklasjkldf");
        lista=$('#listaBuses');
        itemHTML="<li>"+
                        "<div class='ui-grid-b'>"+
                                "<div class='ui-block-a' style='width: 20%;'>"+
                                "<img class='imgList' src='photo' height='50' width='50'>"+
                                "</div>"+
                                "<div class='ui-block-b' style='width: 65%;'>"+
                                    "<div data-role='fieldcontain' class='ui-field-contain'>"+
                                            "<p><h2>placa</h2></p>"+
                                            "<p><b>Posición Actual: posicion</b></p>"+
                                            "<p><b>Capacidad: capacidad pasajeros</b></p>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='ui-block-c' style='width: 6%;  float: right;'>"+
                                    "<div style='float: right;'>"+
                                       "<a href='#' data-role='button' data-icon='gear' data-iconpos='notext' data-theme='c' data-inline='true' class='ui-link ui-btn ui-btn-c ui-icon-gear ui-btn-icon-notext ui-btn-inline ui-shadow ui-corner-all' role='button'>Configurar</a><br>"+
                                       "<a href='#' data-role='button' data-icon='forbidden' data-iconpos='notext' data-theme='c' data-inline='true' class='ui-link ui-btn ui-btn-c ui-icon-forbidden ui-btn-icon-notext ui-btn-inline ui-shadow ui-corner-all' role='button'>Eliminar</a>"+
                                    "</div>"+
                                "</div>"+    
                            "</div>"+
                      "</li>";
        $.getJSON(serverURL+"/bus", function( data ) {
            console.log(data.length);
            for(var i=0;i<data.length;i++){
                lista.append(itemHTML.replace('photo',data[i].photo).replace('placa',data[i].licensePlate).replace('capacidad',' '+data[i].capacity).replace('id',data[i].id).replace('poisicion',data[i].currentLatitude+", "+data[i].currentLongitude));
                // $('#listaConductores').append(itemHTML.replace('linkImagen','http://a4.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTI2NTgyMzIxOTcyMjU5NDU5.jpg').replace('nombreConductor',data[i].firstName).replace('apellidoConductor',' '+data[i].lastName).replace('idConductor',data[i].id).replace('edadConductor',data[i].age));
            }
            lista.listview('refresh'); 
            // $('#listaConductores').listview('refresh');
        }).fail( function(d, textStatus, error) {
            console.log("getJSON failed, status: " + textStatus + ", error: "+error)
        });   

   }else if(window.location.href.indexOf('#rutas')>-1){
        $.fn.actualizarRutas = function(){
                lista=$('#listaRutas');
                itemHTML="<li>"+
                                "<div class='ui-grid-b'>"+
                                        "<div class='ui-block-b' style='width: 65%;'>"+
                                            "<div class='ui-block-a' style='width: 20%;'>"+
                                                "<img class='imgList' src='availability' height='50' width='50'>"+
                                            "</div>"+
                                            "<div data-role='fieldcontain' class='ui-field-contain'>"+
                                                    "<p><h2>nombreRuta</h2></p>"+
                                                    "<p><b>Origen: origenRuta</b></p>"+
                                                    "<p><b>Destino: destinoRuta</b></p>"+
                                                    "<p><b>Puestos disponibles: puestosDisponibles</b></p>"+
                                            "</div>"+
                                        "</div>"+
                                        "<div class='ui-block-c' style='width: 6%;  float: right;'>"+
                                            "<div style='float: right;'>"+
                                               "<a href='#' data-role='button' data-icon='gear' data-iconpos='notext' data-theme='c' data-inline='true' class='ui-link ui-btn ui-btn-c ui-icon-flag ui-btn-icon-notext ui-btn-inline ui-shadow ui-corner-all' role='button'>Ver</a><br>"+
                                            "</div>"+
                                        "</div>"+    
                                    "</div>"+
                              "</li>";
                $.getJSON(serverURL+"/route_schedule", function( data ) {
                    console.log(data.length);
                    for(var i=0;i<data.length;i++){
                        if(data[i].availability<0.5){
                            itemHTML.replace('availability','/img/bus_dispo.png')
                        }else if(data[i].availability<0.5){
                            itemHTML.replace('availability','/img/bus_mediolleno.png')
                        }else{
                            itemHTML.replace('availability','/img/bus_lleno.png')
                        }
                        lista.append(itemHTML.replace('nombreRuta',data[i].nameRS).replace('origenRuta',data[i].sourceRS).replace('destinoRuta',data[i].destinationRS).replace('puestosDisponibles',data[i].availability*data[i].bus.capacity));
                    }
                    lista.listview('refresh'); 
                }).fail( function(d, textStatus, error) {
                    console.log("getJSON failed, status: " + textStatus + ", error: "+error)
                }); 
        }  
        setInterval(actualizarRutas, 2000);
   }
});
