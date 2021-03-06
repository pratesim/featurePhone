var app = {
 wid: "WID",
 onSuccess: function(position) {
              var altitudine = position.coords.altitude == null? "Attendere segnale gps...": position.coords.altitude;
              var accuratezzaAlt = position.coords.altitudeAccuracy == null? "Non disponibile per android": position.coords.altitudeAccuracy;
              var gradi = position.coords.heading == null? "Attendere segnale gps...": position.coords.heading;
              var velo = position.coords.speed == null? "Attendere segnale gps...": position.coords.speed;
                    
                document.getElementById("content").innerHTML = 
                  "Latitudine: "             + position.coords.latitude          + '<br>' +
                  "Longitudine: "            + position.coords.longitude         + '<br>' +
                  "Accuratezza: "            + position.coords.accuracy          + '<br>' +
                  "Altitudine: "             + altitudine                        + '<br>' +
                  "Accuratezza Altitudine: " + accuratezzaAlt                    + '<br>' + 
                  "Gradi: "                  + gradi                             + '<br>' + 
                  "Velocit&agrave: "         + velo                              + '<br>' + 
                  "Timestamp: "              + position.timestamp                + '<br>';
            
             console.log("Watch id: ");
             console.log(app.wid);
             navigator.geolocation.clearWatch(app.wid);
            },
    
 onError: function(error) {
             document.getElementById("content") = 
                      'Codice errore: '    + error.code    + '<br>' +
                      'Messaggio errore: ' + error.message + '<br>';
                      
             console.log("Watch id: ");
             console.log(app.wid);
             navigator.geolocation.clearWatch(app.wid);
          },

}
