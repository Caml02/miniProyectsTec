function toggleCountDown(){var e=document.getElementById("countDown");e.style.display="none"===e.style.display?"block":"none","block"===e.style.display&&startCountDown()}function startCountDown(){var e=document.getElementById("count-time"),t=new Date("January 1, "+((new Date).getFullYear()+1)+" 00:00:00").getTime(),n=setInterval((function(){var o=(new Date).getTime(),a=t-o,l=Math.floor(a/864e5),r=Math.floor(a%864e5/36e5),u=Math.floor(a%36e5/6e4),i=Math.floor(a%6e4/1e3);e.innerHTML=l+"d "+r+"h "+u+"m "+i+"s ",a<0&&(clearInterval(n),e.innerHTML="¡Feliz año nuevo!")}),1e3)}document.addEventListener("DOMContentLoaded",(function(){toggleCountDown(),startCountDown()}));
//# sourceMappingURL=countdown.js.map