window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {
   
   // Get values from drop-downs
   const topicDropdown = document.querySelector("#topicSelection");
   const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
   const countDropdown = document.querySelector("#countSelection");
   const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
   // Get and display quotes
   fetchQuotes(selectedTopic, selectedCount);     
   });
   });
   
   function fetchQuotes(topic, count) {
     //Declaring and forming the given url with selected topic and count
     var url = "https://wp.zybooks.com/quotes.php?topic="+topic+"&count="+count;
     //Creating XML Http Request and assigning to quoteHttp variable
     var quoteHttp = new XMLHttpRequest();
     //We can capture the state changes of sent request with readystatechange
     quoteHttp.addEventListener("load", responseReceivedHandler);
     //Setting responseType of request as json
     quoteHttp.responseType = "json";
     //Opening the request to fetch the quotes data and sending the request
     quoteHttp.open("GET", url, true);
     quoteHttp.send();
   }
   
   function responseReceivedHandler() {
       var html = "";
       if (this.response.error) {
           html = this.response.error;
       }
       else {
           html += "<ol>";
   
           for (let c = 0; c < this.response.length; c++) {
               html += `<li>${this.response[c].quote} - ${this.response[c].source}</li>`;
           }
           html += "</ol>";
       }
       document.querySelector("#quotes").innerHTML = html;
   }