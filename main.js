function retrieveQuote(){
  var quote = document.getElementById("headerSub");
  quote.innerHTML = randomQuote();
  fadeQuote();
}


function randomQuote(){
  var quotes = [
    "INSERT QUOTE HERE!"
  ];

  return quotes[Math.floor(Math.random() * quotes.length)];
}


function fadeQuote(){
  $(document).ready(function(){
    var width = $(document).width();

    if(width > 740){
      $("#headerSub").fadeOut(0);
      $("#headerSub").fadeIn(2000);
    }
  });
}