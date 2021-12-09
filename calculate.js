var var1=0;
const history=[ {"up":" ","opr":" ","down":"0"},
                {"up":" ","opr":" ","down":"0"},
                {"up":" ","opr":" ","down":"0"}];
var pos=2;
var decimal=false;
var generalbuttons=document.querySelectorAll("#generalbtn>.btn");
generalbuttons.forEach(element=>element.addEventListener('click',()=>{
    console.log(element.innerHTML);

    if(element.innerHTML=='C')
    {
        scrdown.innerHTML="0";
    }
    else if(element.innerHTML=="←")
    {
        var s=scrdown.innerHTML;
        scrdown.innerHTML=s.substring(0,s.length -1);
        if(scrdown.innerHTML=="")
        scrdown.innerHTML="0";
    }
    else if(element.innerHTML=="PREV" && pos>0)
    {
        pos--;
        scrup.innerHTML=history[pos]["up"];
        scropr.innerHTML=history[pos]["opr"];
        scrdown.innerHTML=history[pos]["down"];
    }
    else if(element.innerHTML=="NEXT" && pos<2)
    {
        pos++;
        scrup.innerHTML=history[pos]["up"];
        scropr.innerHTML=history[pos]["opr"];
        scrdown.innerHTML=history[pos]["down"];
    }
    else  if(element.innerHTML=="AC")
    {
        var1=0;
        scrup.innerHTML="";
        scropr.innerHTML="";
        scrdown.innerHTML="0";
    }
})
);
var numbuttons=document.querySelectorAll("#numpad>.btn");
numbuttons.forEach(element => element.addEventListener('click',()=>{
    if(element.innerHTML=='.')
    {
        if(decimal==false)
        scrdown.innerHTML+=element.innerHTML;
        decimal=true;
    }
    else if(scrdown.innerHTML=="0")
    {
        scrdown.innerHTML=element.innerHTML;
    }
    else{
        scrdown.innerHTML+=element.innerHTML;
    }
})
);
//decimal thik karo
//Error message thik karo
var oprbuttons=document.querySelectorAll("#operator>.btn");
oprbuttons.forEach(element=>element.addEventListener('click',()=>{
    
    if(element.innerHTML=="√")
    {
        var1=parseFloat(scrdown.innerHTML);
        scrup.innerHTML=element.innerHTML+scrdown.innerHTML;
        scrdown.innerHTML=Math.sqrt(var1);
        scropr.innerHTML="=";
        console.log("Shifted",history.shift());
        history.push({"up":String(scrup.innerHTML),"opr":String(scropr.innerHTML),"down":String(scrdown.innerHTML)});
        pos=2;
    }
    else if(element.innerHTML=="=")
    {
        var2=parseFloat(scrdown.innerHTML);
        
        if(scropr.innerHTML!="=")
        {
            scrup.innerHTML+=" "+scropr.innerHTML+" "+scrdown.innerHTML;
            if(scropr.innerHTML== "+"){
                scrdown.innerHTML=var1+var2;
            }
            else if(scropr.innerHTML== "-"){
                scrdown.innerHTML=var1-var2;
            }
            else if(scropr.innerHTML== "×"){
                scrdown.innerHTML=var1*var2;
            }
            else if(scropr.innerHTML== "÷"){
                if(var2!=0){
                    scrdown.innerHTML=var1/var2;
                }
                else
                scrdown.innerHTML="Error";
            }
            else if(scropr.innerHTML== "%"){
                scrdown.innerHTML=var1%var2;
            }
            pos=2;
            scropr.innerHTML="=";
            console.log("Shifted",history.shift());
            history.push({"up":String(scrup.innerHTML),"opr":String(scropr.innerHTML),"down":String(scrdown.innerHTML)});
        }
    }
    else{
        var1=parseFloat(scrdown.innerHTML)
        scrup.innerHTML=scrdown.innerHTML;
        scropr.innerHTML=element.innerHTML;
        scrdown.innerHTML="0";
    }
    console.log(history);
})
);