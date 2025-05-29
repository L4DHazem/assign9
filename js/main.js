
var quotes = [
    "Be yourself; everyone else is already taken.",
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "A friend is someone who knows all about you and still loves you.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
];





function quote(){
    
    var randomquote = Math.floor(Math.random() * quotes.length);

    document.getElementById("quotes").innerHTML = quotes[randomquote];

}




