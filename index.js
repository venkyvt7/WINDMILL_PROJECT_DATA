
function windspeed()
{



  var input1=document.getElementById('city').value;

  console.log(input1);
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input1+'&appid=546b320f391c831f79f4796be03fab6f').then(response => response.json())
.then(data => {
 
    var wind1speed=data.wind.speed*(3.6);
    console.log(wind1speed);
    var winddir=data.wind.deg;
 

 var p=document.getElementById('ws');
 p.innerHTML="<span> The  WINDSPEED of city "+ input1 +" is </span>"+wind1speed.toFixed(3)+" KMPH, in the Metrological Direction "+winddir;
  });
  


 }



 function temprature()
 {
 
 
 
   var input1=document.getElementById('city').value;
 
   console.log(input1);
 fetch('https://api.openweathermap.org/data/2.5/weather?q='+input1+'&appid=546b320f391c831f79f4796be03fab6f').then(response => response.json())
 .then(data => {
  
     var wind1speed=data.main.temp-273.15;
    
  
 
  var p=document.getElementById('tp');
  p.innerHTML="<span> The  TEMPERATUR of city "+ input1 +" is </span>"+wind1speed.toFixed(2)+"°C.";
   
 
 
  });
};






function windpower()
{



  var input1=document.getElementById('city').value;
 if(input1>=12)
 {

  var p=document.getElementById('ws'); 
  p.innerHTML="<span> The  PREDICTION OF POWER IS  3500 kw (kilowatt) </span>";



 }

  else if(input1<3)
  {
    var p=document.getElementById('ws'); 
    p.innerHTML="<span> The  PREDICTION OF POWER IS  0 kw (kilowatt) </span>";




  }
 else
 {
var m=283.40;
var z=m*input1-834.4;
 z = z.toFixed(7);
var p=document.getElementById('ws'); 
p.innerHTML="<span> The  PREDICTION OF POWER IS " + z +" kw (kilowatt) </span>";


 }


    
  


 }
