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
            console.error("getJSON failed, status: " + textStatus + ", error: "+error)
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
            console.error("getJSON failed, status: " + textStatus + ", error: "+error)
        });   

   }
    // else if(window.location.href.indexOf('#buses')>-1){
    //     lista= document.getElementById('listaBuses');
    //     $.getJSON( 'js/test.json', function( data ) {
    //         // alert(" "+data.length);
    //         itemHTML="<li>"+
    //                         "<div class='ui-grid-b'>"+
    //                             "<div class='ui-block-a' style='width: 20%;'>"+
    //                                 "<img class='imgList' src='linkImagen' height='50' width'50'=''>"+
    //                             "</div>"+
    //                             "<div class='ui-block-b' style='width: 65%;'>"+
    //                                 "<div data-role='fieldcontain' class='ui-field-contain'>"+
    //                                         "<h2>placaBus</h2>"+
    //                                         "<p><b>capacidadBus</b></p>"+
    //                                 "</div>"+
    //                             "</div>"+
    //                             "<div class='ui-block-c' style='width: 6%;  float: right;'>"+
    //                                 "<div style='float: right;'>"+
    //                                    "<a href='#' data-role='button' data-icon='gear' data-iconpos='notext' data-theme='c' data-inline='true' class='ui-link ui-btn ui-btn-c ui-icon-gear ui-btn-icon-notext ui-btn-inline ui-shadow ui-corner-all' role='button'>Configurar</a><br>"+
    //                                    "<a href='#' data-role='button' data-icon='forbidden' data-iconpos='notext' data-theme='c' data-inline='true' class='ui-link ui-btn ui-btn-c ui-icon-forbidden ui-btn-icon-notext ui-btn-inline ui-shadow ui-corner-all' role='button'>Eliminar</a>"+
    //                                 "</div>"+
    //                             "</div>"+    
    //                         "</div>"+
    //                       "</li>";
    //         for(var i=0;i<items.length;i++){
    //             totalItemsHTML=totalItemsHTML+itemHTML.replace('linKImagen','data[i].img').replace('placaBus',data[i].plate).replace('capacidadBus',data[i].capacity);
    //         }   
    //         lista.innerHTML=totalItemsHTML;
    // }
});
