document.addEventListener("DOMContentLoaded",(function(){let e=5,t=!1,n="";fetch("http://localhost:5000/get_word").then((function(e){if(e.ok)return e.json();throw new Error("Error en la respuesta del servidor")})).then((function(e){n=e.word})).catch((function(e){console.error("Error en la solicitud: "+e.message)}));document.getElementById("guessForm").addEventListener("submit",(function(o){o.preventDefault();const r=document.getElementById("letterInput"),s=r.value.toUpperCase();r.value="",t||fetch("http://localhost:5000/guess",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({letter:s})}).then((function(e){if(e.ok)return e.json();throw new Error("Error en la respuesta del servidor")})).then((function(o){const r=o.message,s=o.guessed_letters.join(", ");o.remaining_attempts>=0&&(e=o.remaining_attempts),document.getElementById("message").textContent=r,document.getElementById("guessedLetters").textContent="Letras adivinadas: "+s,document.getElementById("remainingAttempts").textContent="Intentos restantes: "+e,0===e?(t=!0,swal("Has perdido. La palabra era: "+n,{className:"red-bg"})):r.includes("La letra no se encuentra")||s.length===n.length&&(t=!0,swal("¡Has adivinado la palabra oculta!",{className:"green-bg"}))})).catch((function(e){console.error("Error en la solicitud: "+e.message)}))}))}));
//# sourceMappingURL=hangMan.js.map
