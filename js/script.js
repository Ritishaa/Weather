function promptbox(){
 	var loc = window.prompt("Please Enter City Name:");
 	return loc;
}

function myapi(){
        
        var loc = promptbox();
        if(loc=="")
        {
        	loc="Jodhpur";
        }
        console.log(loc);
        //var apkey="3054e14dee01dc11741d8820d2ed3d0d";
        fetch('http://api.openweathermap.org/data/2.5/weather?q='+loc+'&APPID=3054e14dee01dc11741d8820d2ed3d0d')
        .then(alldata=>{return alldata.json();})
        .then(_reqdata=>{
            const {temp, humidity} =_reqdata.main;
            const {name} = _reqdata;
            const {speed} = _reqdata.wind;
            console.log(temp);   
            console.log(humidity); 
            console.log(name);
            document.querySelector(".location-timezone").innerHTML =name;  
            document.querySelector(".temperature-degree").innerHTML =temp;
            document.querySelector(".wind").innerHTML = speed;
            document.querySelector(".humidity").innerHTML =humidity;

            //console.log(a);
           /* a.innerHTML= name;*/
    });
}

window.addEventListener('load',()=>{
   var but= document.getElementById("text-inside-button");
   but.addEventListener('click',myapi);
    console.log("hey there");
})

