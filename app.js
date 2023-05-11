var cel= document.getElementById("cel");
var fah= document.getElementById("fah");
var kel= document.getElementById("kel");

cel.addEventListener('input',function()
{
    let c =parseFloat(cel.value);
    let f = (c* 9/5)+32;
    let k = c + 273.15;
    if(!Number.isInteger(f))
    {
        f=f.toFixed(2);
    }
    fah.value =f;
    if(!Number.isInteger(k))
    {
        k=k.toFixed(2);
    }
    kel.value =k;
});
fah.addEventListener('input',function()
{
    let f= parseFloat(fah.value);
    let c= (f-32)*9/5;
    let k = ((f-32)*9/5)+275.15;
    if(!Number.isInteger(c))
    {
        c=c.toFixed(2);
    }
    cel.value =c;
    if(!Number.isInteger(k))
    {
        k=k.toFixed(2);
    }
    kel.value =k;
});
fah.addEventListener('input',function()
{
    let k= parseFloat(kel.value);
    let c= k-273.15;
    let f = ((k-273.15)*9/5)+32;
    if(!Number.isInteger(c))
    {
        c=c.toFixed(2);
    }
    cel.value =c;
    if(!Number.isInteger(f))
    {
        f=f.toFixed(2);
    }
    fah.value =f;
});