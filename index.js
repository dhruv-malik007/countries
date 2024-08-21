$(document).ready(function() {
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://restcountries.com/v3.1/all');
ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    for (var i = 0; i < ourData.length;i++) { 

        
                //show map button
                let button1 = document.createElement("button");
                button1.className = "map";
                button1.innerHTML = "Show Map";
        
             //map
             let map= document.createElement("a");
             map.href= ourData[i].maps.googleMaps;
             map.append(button1);


              //for details
              let button2 = document.createElement("button");
              button2.id = ourData[i].cca3;
              button2.className = "details";
              button2.innerHTML = "Details";

              //for buttons both buttons
              let buttons = document.createElement("div")
              buttons.className = "d-flex bttn";
              buttons.append(map);
              buttons.append(button2);

              //for currency

              let currency = document.createElement('div');
              const currencyName = ourData[i].currencies?Object.values(ourData[i].currencies)[0].name:null;
              currency.className = "currency";
              currency.innerHTML = "Currency: " + currencyName;

              //for time


              let date_time = document.createElement('div');
              date_time.className = "date-time";
            //   date_time.innerHTML = "Date: " + "";

              //for text
              let countrytext = document.createElement('div');
              var tid = ourData[i].name.common;
              countrytext.id = tid.toLowerCase();
              countrytext.className = "text";
              countrytext.innerHTML = "<b>" + ourData[i].name.common + "</b>";
              countrytext.append(currency);
              countrytext.append(date_time);
              countrytext.append(buttons);
        
               //for country image
               let countryimage = document.createElement('img');
               countryimage.className = "image image-fluid pr-4";
               countryimage.src = ourData[i].flags.png;
               countryimage.alt = ourData[i].flags.alt;
       
               let country = document.createElement('div');
               country.className = "country-box d-flex";
               country.append(countryimage);
               country.append(countrytext);

               

               $(".main").append(country);      
    }  
    

 $(".details").click(function(){
    //new page
         window.location.href = "details.html?country="+ this.id;

}); 
};
ourRequest.send();

});










