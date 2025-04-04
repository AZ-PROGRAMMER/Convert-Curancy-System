function convert(){
     function  toUsd(amount,from) {
     if(from === 'frw'){
          return amount*1000;
     }else if(from === 'fbu'){
          return amount*3000;
     }else if(from === 'usd'){
          return amount;
     }
     else{
          return 'Error choose correctly';
     }
}
function toFrw(amount,from){
     if(from === 'usd'){
          return amount/1000;
     }else if(from === 'fbu'){
          return amount*3;
     }else if(from === 'frw'){
          return amount;
     }
     else{
          return 'Error Choose correctly';
     }         
}
function tofbu(amount,from){
     if(from === 'usd'){
          return amount/1100;
     }else if(from === 'frw'){
          return amount/3;
     }else if(from === 'fbu'){
          return amount;
     }
     else{
          return 'Error Choose correctly';
     }
}
var amount = document.getElementById('amount').value;
var from = document.getElementById('from').value;
var to = document.getElementById('to').value;
var result = document.getElementById('result');

if(from === 'frw' && to ==='frw'){
     result.innerHTML= toFrw(amount,to)+' Frw';
     result.style.color = "rgba(59, 59, 59, 0.658);"
}else if(from === 'frw' && to ==='usd'){
     result.innerHTML= toFrw(amount,to)+' Usd';
     result.style.color = "rgba(59, 59, 59, 0.658);"
}else if(from === 'frw' && to ==='fbu' ){
     result.innerHTML= toFrw(amount,to)+' Fbu';
     result.style.color = "rgba(59, 59, 59, 0.658);"
}else if(from === 'usd' && to ==='frw'){
     result.innerHTML= toUsd(amount,to)+' Frw';
     result.style.color = "rgba(59, 59, 59, 0.658);"
}else if(from === 'usd' && to ==='usd' ){
     result.innerHTML= toUsd(amount,to)+' Usd';
     result.style.color = "rgba(59, 59, 59, 0.658);"
}else if(from === 'usd' && to ==='fbu'){
     result.innerHTML= toUsd(amount,to)+' Fbu';
     result.style.color = "rgba(59, 59, 59, 0.658);"
}else if(from === 'fbu' && to ==='frw' ){
     result.innerHTML= tofbu(amount,to)+' Frw';
     result.style.color = "rgba(59, 59, 59, 0.658);"
}else if(from === 'fbu' && to ==='usd'){
     result.innerHTML= tofbu(amount,to)+' Usd';
     result.style.color = "rgba(59, 59, 59, 0.658);"
}else if(from === 'fbu' && to ==='fbu'){
     result.innerHTML= tofbu(amount,to)+' Fbu';
     result.style.color = "rgba(59, 59, 59, 0.658);"
}
else{
     result.innerHTML= 'Error choose correctly';
}
if(result === '0'){
     result.style.color = 'rgba(59, 59, 59, 0.658);';
}
   }
function convertre(){
     document.getElementById('amount').value = ' ';
     document.getElementById('result').style.color='rgba(59, 59, 59, 0.658)'
     document.getElementById('result').innerHTML = 'Result ';
}
function convertr() {
convert();
document.getElementById('result').style.color = "black";
}