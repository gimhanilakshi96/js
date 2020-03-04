document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("#red").onclick= function(){
        document.querySelector("h1").style.color="red";
    }



    document.querySelector("#green").onclick= function()
    {
        document.querySelector("h1").style.color="green";
    }

    document.querySelector("#blue").onclick =function()
    {
        document.querySelector("h1").style.color="blue";
    }
});