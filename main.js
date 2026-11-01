(function(){"use strict";
var bg=document.getElementById("bg"),dr=document.getElementById("dr");
function close(){dr.classList.remove("open");bg.setAttribute("aria-expanded","false")}
bg.addEventListener("click",function(){var o=dr.classList.toggle("open");bg.setAttribute("aria-expanded",o)});
dr.addEventListener("click",function(e){if(e.target.tagName==="A")close()});
document.addEventListener("keydown",function(e){if(e.key==="Escape")close()});
var f=document.getElementById("fm"),nm=document.getElementById("nm"),ob=document.getElementById("ob"),er=document.getElementById("er");
f.addEventListener("submit",function(e){e.preventDefault();
 var n=nm.value.replace(/[\u0000-\u001f]/g," ").trim();
 if(n.length<2||n.length>60){nm.setAttribute("aria-invalid","true");er.textContent="Digite seu nome com pelo menos 2 letras.";nm.focus();return}
 nm.setAttribute("aria-invalid","false");er.textContent="";
 var t="Olá! Meu nome é "+n+" e quero agendar uma aula experimental na Cross Extreme. Meu objetivo: "+ob.value+".";
 window.open("https://wa.me/5514981542428?text="+encodeURIComponent(t),"_blank","noopener")});
})();