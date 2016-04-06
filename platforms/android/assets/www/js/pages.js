$(document).ready(function(){
	//Validar formulario conductores
   $("#btnAgrConductor").click(function() {
		  if($.trim($("#firstName").val()) != "" && $.trim($("#userName").val()) != ""  && $.trim($("#password").val()) != "" && $.trim($("#lastName").val()) != "" && $.trim($("#birthDate").val().trim() != "")){
            console.log("click");
            return true;
          }else{
            alert('Se deben ingresar todos los espacios'); 
            console.log("click N");
            return false;
          }

    });
	$("#formConductores").submit(function(event){
		
	 	console.log("submit"+serverURL);
	    var formObj = $(this);
	    var formURL = formObj.attr("action");
	    var formData = new FormData(this);
	    $.ajax({
	        url: serverURL+"/drivers",
	    type: 'POST',
	        data:  formData,
	    mimeType:"multipart/form-data",
	    contentType: false,
	        cache: false,
	        processData:false,
		    success: function(data, textStatus, jqXHR)
		    {
		    	alert("Conductor agregado satisfactoriamente!");
		 		$("#formConductores").attr("action", "indexAdmin.html?url="+serverURL+"#conductores");
		 		return;
		    },
		     error: function(jqXHR, textStatus, errorThrown) 
		     {
		     	alert("Hubo un problema de conexión y fue imposible realizar la transacción, intente más tarde");
		     	$("#formConductores").attr("action", "indexAdmin.html?url="+serverURL+"#conductores");
		     	event.preventDefault();
		     	return false;
		     }          
		    });
	    

	}); 

});

