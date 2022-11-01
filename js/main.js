/* -------------------------------------------------------
   Function for getting weather information
   ------------------------------------------------------- */

function weatherBalloon() {
  var key = 'e35ca5623af73c61e78b08a4d03a4462';
  var lat = '41.8137116';
  var lon = '-71.3700545';
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    drawWeather(data);
    console.log(data);
  })
  .catch(function() {
    // catch any errors
  });
}


/* -------------------------------------------------------
   Function for display weather information
   ------------------------------------------------------- */

function drawWeather( d ) {

  // placeholder div for testing output


    $('.current h2').html(convertTemp(d.daily[0].temp.day));
    $('.high p').html(convertTemp(d.daily[0].temp.max));
    $('.low p').html(convertTemp(d.daily[0].temp.min));
    $('.message h3').html(printMessage(d.current.weather[0].description));  
    $('.message p').html(printMessages(d.current.weather[0].description));


    $('.xtra_weather li:nth-child(1) .xtra_att').html(d.current.visibility);
    $('.xtra_weather li:nth-child(2) .xtra_att').html(d.current.wind_speed);
    $('.xtra_weather li:nth-child(3) .xtra_att').html(d.current.feels_like);
    $('.xtra_weather li:nth-child(4) .xtra_att').html(d.current.humidity);


    $('.extended-forecast li:nth-child(1) h4').html(displayDay(1));
    $('.extended-forecast li:nth-child(1) .icon').html(printGraphic(d.daily[1].weather[0].description));    
    $('.extended-forecast li:nth-child(1) .high').html(convertTemp(d.daily[1].temp.max));
    $('.extended-forecast li:nth-child(1) .low').html(convertTemp(d.daily[1].temp.min));
    $('.extended-forecast li:nth-child(1) .precip').html(convertPop(d.daily[1].pop));


    $('.extended-forecast li:nth-child(2) h4').html(displayDay(2));
    $('.extended-forecast li:nth-child(2) .icon').html(printGraphic(d.daily[2].weather[0].description));   
    $('.extended-forecast li:nth-child(2) .high').html(convertTemp(d.daily[2].temp.max));
    $('.extended-forecast li:nth-child(2) .low').html(convertTemp(d.daily[2].temp.min));
    $('.extended-forecast li:nth-child(2) .precip').html(convertPop(d.daily[2].pop));


    $('.extended-forecast li:nth-child(3) h4').html(displayDay(3));
    $('.extended-forecast li:nth-child(3) .icon').html(printGraphic(d.daily[3].weather[0].description));    
    $('.extended-forecast li:nth-child(3) .high').html(convertTemp(d.daily[3].temp.max));
    $('.extended-forecast li:nth-child(3) .low').html(convertTemp(d.daily[3].temp.min));
    $('.extended-forecast li:nth-child(3) .precip').html(convertPop(d.daily[3].pop));


    $('.extended-forecast li:nth-child(4) h4').html(displayDay(4));
    $('.extended-forecast li:nth-child(4) .icon').html(printGraphic(d.daily[4].weather[0].description));
    $('.extended-forecast li:nth-child(4) .high').html(convertTemp(d.daily[4].temp.max));
    $('.extended-forecast li:nth-child(4) .low').html(convertTemp(d.daily[4].temp.min));
    $('.extended-forecast li:nth-child(4) .precip').html(convertPop(d.daily[4].pop));


    $('.extended-forecast li:nth-child(5) h4').html(displayDay(5));
    $('.extended-forecast li:nth-child(5) .icon').html(printGraphic(d.daily[5].weather[0].description));   
    $('.extended-forecast li:nth-child(5) .high').html(convertTemp(d.daily[5].temp.max));
    $('.extended-forecast li:nth-child(5) .low').html(convertTemp(d.daily[5].temp.min));
    $('.extended-forecast li:nth-child(5) .precip').html(convertPop(d.daily[5].pop)); 


    $('.extended-forecast li:nth-child(6) h4').html(displayDay(6));
    $('.extended-forecast li:nth-child(6) .icon').html(printGraphic(d.daily[6].weather[0].description));    
    $('.extended-forecast li:nth-child(6) .high').html(convertTemp(d.daily[6].temp.max));
    $('.extended-forecast li:nth-child(6) .low').html(convertTemp(d.daily[6].temp.min));
    $('.extended-forecast li:nth-child(6) .precip').html(convertPop(d.daily[6].pop));



 


    changeTheme(d.current.weather[0].description);

}




/* --------------------------------------------------
   Event to get weather information when page loads
   -------------------------------------------------- */

window.onload = function() {
  weatherBalloon();
}


/* ----- OTHER JS ----- */

$('button').click(function(){
  $('.cover').addClass('open');
})




