window.addEventListener("load",()=>{

    let long;
    let lat;
    let query;
    let celsiusSet=true;

    if (navigator.geolocation){

        navigator.geolocation.getCurrentPosition(position=>
            {
                lat=position.coords.latitude;
                lang= position.coords.longitude;

                query=`https://api.weatherapi.com/v1/current.json?key=53b8bd0a6df2473f82b112428211112&q=${lat},${lang}&aqi=no`;


                fetch(query)
                .then(response=>response.json())
                .then(data=>{
                    
                    document.getElementById("location").innerText=data.location.name;
                    document.getElementById("image").innerHTML=`<img src=${data.current.condition.icon}>`;
                    document.getElementById("temperature").innerText=data.current.temp_c+"° C";
                    document.getElementById("comment").innerText=data.current.condition.text;

                    document.getElementById("temperature").addEventListener('click',()=>{
                        if (celsiusSet){
                        document.getElementById("temperature").innerText=data.current.temp_f+"° F";
                        celsiusSet=false;
                        }
                        else{
                            document.getElementById("temperature").innerText=data.current.temp_c+"° C";
                            celsiusSet=true;
                        }
                    })

});



            });
            

    }

    

});