
var var1=0;
var decimal=false;
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
    scropr.innerHTML=element.innerHTML;
    var1=parseFloat(scrdown.innerHTML)
    
    if(element.innerHTML=="√")
    {
        scrdown.innerHTML=Math.sqrt(var1);
    }
    else if(element.innerHTML=="=")
    {
        var2=parseFloat(scrdown.innerHTML);
        scrup.innerHTML+=scrop.innerHTML+scrdown.innerHTML;
    }
    else{
        scrup.innerHTML=scrdown.innerHTML;
        scrdown.innerHTML="0";
    }
})
);

function equals(){
    document.querySelector('#scropr').innerHTML="&times;"
    var2=parseFloat(scrdown.innerHTML);

}
