var map;var bus;
            
function onDeviceReadye(){
        var mapOptions = {
            center: new google.maps.LatLng('-74.0336385','4.7132174'),
            zoom:14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl:false,
            streetViewControl:false,
            // fullscreenControl:true,
            // fullscreenControlOptions:true
         }
        map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);
};
function onSuccess(position){
		var mapOptions = {
            center: new google.maps.LatLng('-74.0336385','4.7132174'),
            zoom:14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl:false,
            streetViewControl:false,
            // fullscreenControl:true,
            // fullscreenControlOptions:true
         }
        map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);
}
function onError(error){
  	alert(error.message);
}
onDeviceReadye();
// function onDeviceReady(){
//                     navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
// };
	   
//  function onSuccess(position){
// 				var mapOptions = {
// 		            center: new google.maps.LatLng('-74.0336385','4.7132174'),
// 		            zoom:14,
// 		            mapTypeId: google.maps.MapTypeId.ROADMAP,
// 		            mapTypeControl:false,
// 		            streetViewControl:false,
// 		            // fullscreenControl:true,
// 		            // fullscreenControlOptions:true
// 		         }
// 		        map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);
// 	           google.maps.event.addListener(map, 'click', function(event) {
// 				   agregarParada(event.latLng);
// 				});
// 	           google.maps.event.addListener(map, 'dblclick', function(event) {
// 				   quitarParada(event.latLng);
// 				});

// 	    }
// 	    onDeviceReady();
// 	    function agregarParada(location) {
// 				    var marker1 = new google.maps.Marker({
// 				        position: location, 
// 				        map: map
// 				    });
// 		}
// 		function quitarParada(location) {
// 				    var marker2 = new google.maps.Marker({
// 				        position: location, 
// 				        map: map
// 				    });
// 		}
// 	    function onError(error){
// 	      	alert(error.message);
// 	    }