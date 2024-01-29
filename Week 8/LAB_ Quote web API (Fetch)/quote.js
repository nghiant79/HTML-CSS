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

// TODO: Modify to use Fetch API
async function fetchQuotes(topic, count) {

   const url = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;
 
   try {
     const response = await fetch(url);
     const data = await response.json();
 
     if (data.error) {
       document.getElementById('quotes').innerHTML = data.error;
       return;
     }
 
     let quotesHTML = '<ol>';
     data.forEach(quote => {
       quotesHTML += `<li>${quote.quote} - ${quote.source}</li>`; 
     });
     quotesHTML += '</ol>';
 
     document.getElementById('quotes').innerHTML = quotesHTML;
 
   } catch (error) {
     console.log(error);
     document.getElementById('quotes').innerHTML = 'Failed to fetch quotes'; 
   }
 
 }
