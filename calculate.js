
var var1=0;
var decimal=false;
var generalbuttons=document.querySelectorAll("#generalbtn>.btn");
generalbuttons.forEach(element=>element.addEventListener('click',()=>{
    console.log(element.innerHTML);

    if(element.innerHTML=='C')
    {
        scrdown.innerHTML="0";
    }
    if(element.innerHTML=="←")
    {
        var s=scrdown.innerHTML;
        scrdown.innerHTML=s.substring(0,s.length -1);
        if(scrdown.innerHTML=="")
        scrdown.innerHTML="0";
        
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
var oprbuttons=document.querySelectorAll("#operator>.btn");
oprbuttons.forEach(element=>element.addEventListener('click',()=>{
    
    if(element.innerHTML=="√")
    {
        var1=parseFloat(scrdown.innerHTML);
        scrup.innerHTML=element.innerHTML+scrdown.innerHTML;
        scropr.innerHTML="=";
        scrdown.innerHTML=Math.sqrt(var1);
    }
    else if(element.innerHTML=="=")
    {
        var2=parseFloat(scrdown.innerHTML);
        if(scropr.innerHTML!="=")
        scrup.innerHTML+=" "+scropr.innerHTML+" "+scrdown.innerHTML;
        switch(scropr.innerHTML)
        {
            case "+":{
                scrdown.innerHTML=var1+var2;
                break;
            }
            case "-":{
                scrdown.innerHTML=var1-var2;
                break;
            }
            case "×":{
                scrdown.innerHTML=var1*var2;
                break;
            }
            case "÷":{
                if(var2!=0)
                scrdown.innerHTML=var1/var2;
                else
                scrdown.innerHTML="Error";
                break;
            }
            case "%":{
                scrdown.innerHTML=var1%var2;
            }
        }
        scropr.innerHTML="=";
    }
    else{
        var1=parseFloat(scrdown.innerHTML)
        scrup.innerHTML=scrdown.innerHTML;
        scropr.innerHTML=element.innerHTML;
        scrdown.innerHTML="0";
    }
})
);