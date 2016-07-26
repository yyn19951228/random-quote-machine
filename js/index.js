var currentQuote="";
var preparation = "           --";
var crrentQuoteAuthor = "";
var colorArray = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
function clickButton(){
  $.ajax({
    
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    
    
    // method: "GET",  
    // url: "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
    // dataType: "jsonp",
    error: function()  {
      console.log("this doesn't work");
    },
    success: function(response) {
      var r = JSON.parse(response);
      currentQuote = r.quote;
      currentQuoteAuthor = r.author;
     
      document.getElementById("quote-word").innerHTML=currentQuote;
      document.getElementById("quote-author").innerHTML=preparation+currentQuoteAuthor;
      console.log(response);
      
      
      
    }
    
  });
};
function ShareToQQ(){
  /*var shareURL = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=www.baidu.com&desc=&summary=&site=';*/
  var shareURL  = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
  var shareFrom = location.href;
  var desc = currentQuote + preparation+currentQuoteAuthor;
  
  window.open(shareURL + 'url=' + shareFrom + '&desc='+desc );
};
function ShareToWeChat(){
  alert("分享到微信太麻烦了，凑合着用QQ空间就好了。。")
}

function clickButton1() {
  document.getElementById("quote-word").innerHTML=currentQuote;
}