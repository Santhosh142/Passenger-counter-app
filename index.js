
let count = 0;
let res = "";
function increment()
{
    count+=1;
    document.getElementById("count-el").innerHTML=count;
}
function save() {
    res+=count+"-";
    document.getElementById("save-el").innerHTML=res;
}
function reset() {
    count = 0;
    res = "";
    document.getElementById('count-el').innerHTML=count;
    document.getElementById('save-el').innerHTML=res;
}