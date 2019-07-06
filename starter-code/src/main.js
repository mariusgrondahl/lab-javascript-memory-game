var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

var memoryGame = new MemoryGame(cards);



document.addEventListener("DOMContentLoaded", function(event) { 
 
  $(document).ready(function(){
    // Lets create alle the cards
    let html = '';

    $("#memory_board").html(html) 
    memoryGame.cards.forEach(function (pic) {
      html += '<div class="card" data-card-name="'+ pic.name +'">';
   // html += '  <div class="back" name="'+ pic.img +'"></div>';
      html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
      html += '</div>';
    });
  // Add all the div's to the HTML
  $("#memory_board").html(html) 
  
  // Bind the click event of each element to a function
      $(".front").click(function() {
        console.log("Her klikkær vi")
        $(this).toggleClass("front");

       
      });

}); // Here ends the Dom content loaded function

}); // document ready function

