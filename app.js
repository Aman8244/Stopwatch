var hh,mm,ss;
var resett;
hh=0;
mm=0;
ss=0;
function timer(){
    update(); 
}
function update(){
    
    ss += 1;
    if(ss === 60 ){
        mm += 1;
        ss=0;
        if(mm === 60){
            hh += 1;
            mm=0;
        }
    }

if(hh<10){
    hh = "0"+hh;

}
if(mm<10){
    mm = "0"+mm;
}
if(ss<10){
    ss="0"+ss;
}
let = currentTime = hh + ":"+mm+":"+ss;
document.querySelector("#time").innerHTML = currentTime;
hh = Number(hh);
mm = Number(mm);
ss = Number(ss);
}


document.querySelector(".start").addEventListener("click",function(){
    
    int = setInterval(update,1000);
});
document.querySelector(".reset").addEventListener("click",function(){
    clearInterval(int);
    document.querySelector("#time").innerHTML = "00:00:00";
    hh=0;
    mm=0;
    ss=0;
    
});
document.querySelector(".stop").addEventListener("click",function(){
    clearInterval(int);
   
    
});



